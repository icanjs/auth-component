import React from 'react';
import AuthButton from '../button.jsx';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'LinkedIn'}
      url={url || '/auth/linkedin'}
      img='/src/components/auth/buttons/linkedin/linkedin.svg'
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
