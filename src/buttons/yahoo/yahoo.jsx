import React from 'react';
import AuthButton from '../button.jsx';
import svg from './yahoo.svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Yahoo'}
      url={url || '/auth/yahoo'}
      svg={svg}
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
