FROM node:14.15-alpine as build

WORKDIR /app
COPY package*.json /app/
RUN yarn cache clean && yarn --update-checksums
COPY ./app/
RUN yarn && yarn build

# Stage - Production
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx.html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]