import React from 'react';
import AuthButton from '../button.jsx';
import svg from './twitter.svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Twitter'}
      url={url || '/auth/twitter'}
      svg={svg}
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
