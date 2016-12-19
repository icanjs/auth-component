import React from 'react';
import AuthButton from '../button.jsx';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Skype'}
      url={url || '/auth/skype'}
      img='/src/components/auth/buttons/skype/skype.svg'
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
