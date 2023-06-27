import React from 'react';

const BackButton = () => {
  const goBack = () => {
    window.location.replace('/')
  };

  return (
    <button
      style={{
        position: 'fixed',
        top: '10px',
        left: '10px',
        zIndex: '9999',
      }}
      className='text-wave-300 md:text-4xl text-3xl p-2 hover:underline'
      onClick={goBack}
    >
      Back &gt;
    </button>
  );
};

export default BackButton;
