import React from 'react';
import AuthButton from '../button.jsx';
import svg from './slack.svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Slack'}
      url={url || '/auth/slack'}
      svg={svg}
      alt={alt}
      text={text}
      popup={popup}
    />
  );
};
