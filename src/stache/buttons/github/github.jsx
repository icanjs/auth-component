import React from 'react';
import AuthButton from '../button.jsx';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'GitHub'}
      url={url || '/auth/github'}
      img='/src/components/auth/buttons/github/github.svg'
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
