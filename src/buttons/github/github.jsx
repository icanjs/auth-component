import React from 'react';
import AuthButton from '../button.jsx';
import svg from './github.svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'GitHub'}
      url={url || '/auth/github'}
      svg={svg}
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
