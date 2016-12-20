import React from 'react';
import AuthButton from '../button.jsx';
import svg from './openid.svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'OpenID'}
      url={url || '/auth/openid'}
      svg={svg}
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
