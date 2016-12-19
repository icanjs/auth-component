import React from 'react';
import AuthButton from '../button.jsx';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Microsoft'}
      url={url || '/auth/microsoft'}
      img='/src/components/auth/buttons/microsoft/microsoft.svg'
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
