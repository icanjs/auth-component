import React from 'react';
import ReactDOM from 'react-dom';
import AmazonButton from './buttons/amazon/';
import DropboxButton from './buttons/dropbox/';
import EvernoteButton from './buttons/evernote/';
import FacebookButton from './buttons/facebook/';
import GitHubButton from './buttons/github/';
import GoogleButton from './buttons/google/';
import LinkedInButton from './buttons/linkedin/';
import MicrosoftButton from './buttons/microsoft/';
import OpenIDButton from './buttons/openid/';
import PaypalButton from './buttons/paypal/';
import SkypeButton from './buttons/skype/';
import SlackButton from './buttons/slack/';
import TwitterButton from './buttons/twitter/';
import YahooButton from './buttons/yahoo/';

var signupActive = subpage === 'signup' ? 'active' : '';
var loginActive = subpage === 'login' ? 'active' : '';

ReactDOM.render(
  <div>
    // TODO: import the auth.js component and use it. Add routing.
    <div className='auth-component'>
      <div className='auth-ui-container'>
        <ul className='local-auth-tabs'>
          <li className={`signup ${signupActive}`} onClick={setSubpage('signup')}>
            <a href='javascript://'>Signup</a>
          </li>
          <li className={`login ${loginActive}`} onClick={setSubpage('login')}>
            <a href='javascript://'>Login</a>
          </li>
        </ul>

        <div className='auth-branding'>
          <content />
        </div>

        <div className='sso-providers one'>
          <AmazonButton popup='true' />
          <DropboxButton popup='true' />
          <EvernoteButton popup='true' />
          <FacebookButton popup='true' />
          <GitHubButton popup='true' />
          <GoogleButton popup='true' />
          <LinkedInButton popup='true' />
          <MicrosoftButton popup='true' />
          <OpenIDButton popup='true' />
          <PaypalButton popup='true' />
          <SkypeButton popup='true' />
          <SlackButton popup='true' />
          <TwitterButton popup='true' />
          <YahooButton popup='true' />
        </div>
      </div>
    </div>
  </div>,
  document.querySelector('[root=true]')
);
