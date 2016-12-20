import React from 'react';
import AuthButton from '../button.jsx';
import svg from './skype.svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Skype'}
      url={url || '/auth/skype'}
      svg={svg}
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
