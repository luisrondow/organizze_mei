import React from 'react';

type Props = {
  openModal: boolean;
};

const BackgroundOverlay = React.memo(function BackgroundOverlay(props: Props) {
  const { openModal } = props;

  return (
    <div
      style={{
        transition: '.3s linear',
        top: '0',
        right: '0',
        visibility: !openModal ? 'hidden' : 'visible',
        position: 'fixed',
        height: '100vh',
        zIndex: 3,
        width: '100vw',
        background: 'rgba(28, 23, 51, 0.2)',
      }}></div>
  );
});

export default BackgroundOverlay;
