import React from 'react';
import AuthButton from '../button.jsx';
import svg from './google.svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Google'}
      url={url || '/auth/google'}
      svg={svg}
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
