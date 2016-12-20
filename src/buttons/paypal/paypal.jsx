import React from 'react';
import AuthButton from '../button.jsx';
import svg from './paypal.svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Paypal'}
      url={url || '/auth/paypal'}
      svg={svg}
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
