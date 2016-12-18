import React from 'react';
import AuthButton from '../button.jsx';
import svg from './facebook-svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Facebook'}
      url={url || '/auth/facebook'}
      logo={svg}
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
