import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

export const formatISODate = (input: string) => {
  return format(parseISO(input), `dd/MM/yyyy`, {
    locale: pt,
  });
};