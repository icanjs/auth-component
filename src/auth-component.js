import AuthContainer from './auth-container/auth-container';

import Form from './forms/form/form';
import FormError from './forms/form-error/form-error';
import AsyncValidator from './forms/async-validator/async-validator';
import LocalLoginForm from './forms/local-login/local-login';
import LocalSignupForm from './forms/local-signup/local-signup';

import Generic from './buttons/button';
import Amazon from './buttons/amazon/amazon';
import Dropbox from './buttons/dropbox/dropbox';
import Evernote from './buttons/evernote/evernote';
import Facebook from './buttons/facebook/facebook';
import Github from './buttons/github/github';
import Google from './buttons/google/google';
import LinkedIn from './buttons/linkedin/linkedin';
import Microsoft from './buttons/microsoft/microsoft';
import OpenID from './buttons/openid/openid';
import PayPal from './buttons/paypal/paypal';
import Skype from './buttons/skype/skype';
import Slack from './buttons/slack/slack';
import StackOverflow from './buttons/stackoverflow/stackoverflow';
import Twitter from './buttons/twitter/twitter';
import Yahoo from './buttons/yahoo/yahoo';

export {
  AuthContainer,
  Form,
  FormError,
  AsyncValidator,
  LocalLoginForm,
  LocalSignupForm,
  Generic as GenericButton,
  Amazon as AmazonButton,
  Dropbox as DropboxButton,
  Evernote as EvernoteButton,
  Facebook as FacebookButton,
  Github as GithubButton,
  Google as GoogleButton,
  LinkedIn as LinkedInButton,
  Microsoft as MicrosoftButton,
  OpenID as OpenIDButton,
  PayPal as PayPalButton,
  Skype as SkypeButton,
  Slack as SlackButton,
  StackOverflow as StackOverflowButton,
  Twitter as TwitterButton,
  Yahoo as YahooButton
};

export default {
  AuthContainer,
  Form,
  FormError,
  AsyncValidator,
  LocalLoginForm,
  LocalSignupForm,
  buttons: {
    Generic,
    Amazon,
    Dropbox,
    Evernote,
    Facebook,
    Github,
    Google,
    LinkedIn,
    Microsoft,
    OpenID,
    PayPal,
    Skype,
    Slack,
    StackOverflow,
    Twitter,
    Yahoo
  }
};
