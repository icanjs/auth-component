import React from 'react';
import AuthButton from '../button.jsx';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Amazon'}
      url={url || '/auth/amazon'}
      img='/src/components/auth/buttons/amazon/amazon.svg'
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
