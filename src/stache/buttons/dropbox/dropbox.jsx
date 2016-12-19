import React from 'react';
import AuthButton from '../button.jsx';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Dropbox'}
      url={url || '/auth/dropbox'}
      img='/src/components/auth/buttons/dropbox/dropbox.svg'
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
