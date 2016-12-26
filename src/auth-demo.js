import React from 'react';
import ReactDOM from 'react-dom';
import route from 'can-route';
import DefineMap from 'can-define/map/map';
import {Route} from 'can-route-react';

import SVGInline from 'react-svg-inline';
import logo from './demo-logo.svg';

import AuthContainer from './auth-container/auth-container';
import Tabs from './tabs/can-route';
import FacebookButton from './buttons/facebook/';
import GitHubButton from './buttons/github/';
import GoogleButton from './buttons/google/';
import MicrosoftButton from './buttons/microsoft/';
import TwitterButton from './buttons/twitter/';
import SignupForm from 'auth-component/forms/signup/';
import LoginForm from 'auth-component/forms/login/';

const RouteMap = DefineMap.extend({
  page: {
    type: 'string'
  }
});
route.data = new RouteMap({});

// Create a '/page' route.
route('{page}', {page: 'login'});

route.ready();

ReactDOM.render(
  <AuthContainer>
    <Tabs activeTab={route.data.page} routeAttr='page' />

    <div className='auth-branding'>
      <SVGInline svg={logo} />
    </div>

    <div className='oauth-buttons'>
      <FacebookButton popup='true' />
      <GitHubButton popup='true' />
      <GoogleButton popup='true' />
      <MicrosoftButton popup='true' />
      <TwitterButton popup='true' />
    </div>

    <Route data={{page: 'login'}} component={LoginForm} />
    <Route data={{page: 'signup'}} component={SignupForm} />
  </AuthContainer>,
  document.querySelector('[root=true]')
);
