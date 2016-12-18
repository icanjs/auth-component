import React from 'react';
import AuthButton from '../button.jsx';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'OpenID'}
      url={url || '/auth/openid'}
      img='/src/components/auth/buttons/openid/openid.svg'
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
