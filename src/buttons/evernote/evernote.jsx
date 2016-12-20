import React from 'react';
import AuthButton from '../button.jsx';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Evernote'}
      url={url || '/auth/evernote'}
      img='/src/components/auth/buttons/evernote/evernote.svg'
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
