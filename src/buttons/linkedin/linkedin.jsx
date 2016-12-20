import React from 'react';
import AuthButton from '../button.jsx';
import svg from './linkedin.svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'LinkedIn'}
      url={url || '/auth/linkedin'}
      svg={svg}
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
