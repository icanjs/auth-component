import React from 'react';
import AuthButton from '../button';
import './amazon.less';
import logo from './amazon.svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Amazon'}
      url={url || '/auth/amazon'}
      logo={logo}
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
