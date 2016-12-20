import React from 'react';
import AuthButton from '../button.jsx';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Google'}
      url={url || '/auth/google'}
      img='/src/components/auth/buttons/google/google.svg'
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
