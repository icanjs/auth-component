import React from 'react';
import AuthButton from '../button.jsx';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Paypal'}
      url={url || '/auth/paypal'}
      img='/src/components/auth/buttons/paypal/paypal.svg'
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
