import React from 'react';
import AuthButton from '../button.jsx';
import svg from './evernote.svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Evernote'}
      url={url || '/auth/evernote'}
      svg={svg}
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
