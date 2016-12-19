import React from 'react';
import AuthButton from '../button.jsx';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Slack'}
      url={url || '/auth/slack'}
      img='/src/components/auth/buttons/slack/slack.svg'
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
