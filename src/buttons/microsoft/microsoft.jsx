import React from 'react';
import AuthButton from '../button.jsx';
import svg from './microsoft.svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Microsoft'}
      url={url || '/auth/microsoft'}
      svg={svg}
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
