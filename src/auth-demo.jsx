import React from 'react';
// import AuthButton from './buttons/button.jsx';
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
import './auth.less';

export default ({subpage, setSubpage}) => {
  var signupActive = subpage === 'signup' ? 'active' : '';
  var loginActive = subpage === 'login' ? 'active' : '';

  return (
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
          {/* <AuthButton name='Twitter' url='https://twitter.com' img='/src/components/auth/svg/twitter.svg' popup='true' /> */}
          <AmazonButton url='https://amazon.com' popup='true' />
          <DropboxButton url='https://dropbox.com' popup='true' />
          <EvernoteButton url='https://evernote.com' popup='true' />
          <FacebookButton url='https://github.com' popup='true' />
          <GitHubButton url='https://github.com' popup='true' />
          <GoogleButton url='https://google.com' popup='true' />
          <LinkedInButton url='https://linkedin.com' popup='true' />
          <MicrosoftButton url='https://microsoft.com' popup='true' />
          <OpenIDButton url='https://openid.com' popup='true' />
          <PaypalButton url='https://paypal.com' popup='true' />
          <SkypeButton url='https://skype.com' popup='true' />
          <SlackButton url='https://slack.com' popup='true' />
          <TwitterButton url='https://twitter.com' popup='true' />
          <YahooButton url='https://yahoo.com' popup='true' />
        </div>
      </div>
    </div>
  );
};
