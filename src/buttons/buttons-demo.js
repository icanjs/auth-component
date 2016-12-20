import React from 'react';
import ReactDOM from 'react-dom';
import AmazonButton from './amazon/amazon';
import DropboxButton from './dropbox/dropbox';
import EvernoteButton from './evernote/evernote';
import FacebookButton from './facebook/facebook';
import GithubButton from './github/github';
import GoogleButton from './google/google';
import LinkedInButton from './linkedin/linkedin';
import MicrosoftButton from './microsoft/microsoft';
import OpenIDButton from './openid/openid';
import PaypalButton from './paypal/paypal';
import SkypeButton from './skype/skype';
import SlackButton from './slack/slack';
import StackOverflowButton from './stackoverflow/stackoverflow';
import TwitterButton from './twitter/twitter';
import YahooButton from './yahoo/yahoo';

// Render the DOM
ReactDOM.render(
  <div>
    <h1>Plain Buttons</h1>
    <AmazonButton popup />
    <DropboxButton popup />
    <EvernoteButton popup />
    <FacebookButton popup />
    <GithubButton popup />
    <GoogleButton popup />
    <LinkedInButton popup />
    <MicrosoftButton popup />
    <OpenIDButton popup />
    <PaypalButton popup />
    <SkypeButton popup />
    <SlackButton popup />
    <StackOverflowButton popup />
    <TwitterButton popup />
    <YahooButton popup />

    <h1>Buttons with Text</h1>
    <AmazonButton popup text='Login with Amazon' />
    <DropboxButton popup text='Login with DropBox' />
    <EvernoteButton popup text='Login with Evernote' />
    <FacebookButton popup text='Login with Facebook' />
    <GithubButton popup text='Login with GitHub' />
    <GoogleButton popup text='Login with Google' />
    <LinkedInButton popup text='Login with LinkedIn' />
    <MicrosoftButton popup text='Login with Microsoft' />
    <OpenIDButton popup text='Login with OpenID' />
    <PaypalButton popup text='Login with PayPal' />
    <SkypeButton popup text='Login with Skype' />
    <SlackButton popup text='Login with Slack' />
    <StackOverflowButton popup text='Login with Stack Overflow' />
    <TwitterButton popup text='Login with Twitter' />
    <YahooButton popup text='Login with Yahoo' />
  </div>,
  document.querySelector('[root=true]')
);
