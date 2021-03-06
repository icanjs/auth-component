import React from 'react';
import AuthButton from '../button.jsx';
import svg from './dropbox.svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Dropbox'}
      url={url || '/auth/dropbox'}
      svg={svg}
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
