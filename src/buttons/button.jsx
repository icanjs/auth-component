import React from 'react';
import openPopup from 'feathers-authentication-popups/handler';
import SVGInline from 'react-svg-inline';
import './button.less';

export default ({name, classSuffix, url, img, alt, text, popup, svg}) => {
  return (
    <button className={`auth-button oauth-${classSuffix || name.toLowerCase().replace(' ', '')}`} title={`Login with ${name}`}>
      <a href={url} onClick={popup ? openPopup(url) : null} >
        {svg ? <SVGInline svg={svg} /> : <img className='logo' src={img} alt={alt} />}
        {text && <span className='auth-button-text'>{text}</span>}
      </a>
    </button>
  );
};
