import React from 'react';
import AuthButton from '../button.jsx';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Yahoo'}
      url={url || '/auth/yahoo'}
      img='/src/components/auth/buttons/yahoo/yahoo.svg'
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
