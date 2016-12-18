import React from 'react';
import AuthButton from '../button.jsx';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Twitter'}
      url={url || '/auth/twitter'}
      img='/src/components/auth/buttons/twitter/twitter.svg'
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
