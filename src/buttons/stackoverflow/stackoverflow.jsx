import React from 'react';
import AuthButton from '../button.jsx';
import svg from './stackoverflow.svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Stack Overflow'}
      url={url || '/auth/stackoverflow'}
      svg={svg}
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
