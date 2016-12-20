import React from 'react';
import AuthButton from '../button.jsx';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Stack Overflow'}
      url={url || '/auth/stackoverflow'}
      img='/src/components/auth/buttons/stackoverflow/stackoverflow.svg'
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
