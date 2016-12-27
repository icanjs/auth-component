# auth-component

[![Build Status](https://travis-ci.org/icanjs/auth-component.png?branch=master)](https://travis-ci.org/icanjs/auth-component)

Compose a clean Auth UI with these simple React components.

There is also a matching CanJS Stache version: https://github.com/icanjs/can-auth-component

![auth-component example](https://cloud.githubusercontent.com/assets/128857/21478355/da76f80a-cb07-11e6-8a6d-dc382d30bf9f.jpg)

## Example Usage

`auth-component` is a collection of components.  They can be composed based on the auth requirements of your application.  The main demo shows how to build the example shown in the image above.  To run the demo, start an `http-server` in the root and open [http://localhost:8080](http://localhost:8080).  Here's the [demo code](https://github.com/icanjs/auth-component/blob/master/src/auth-demo.js).

```jsx
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
</AuthContainer>
```

## AuthContainer

The `<AuthContainer></AuthContainer>` component is a set a styles that center a white login container both vertically and horizontally inside its parent element.  It has no viewModel logic of its own, so all of the other components will work without it.

```jsx
import AuthContainer from 'auth-component/auth-container/auth-container';
// In your template.
<AuthContainer>
	Put whatever markup you want inside here.
</AuthContainer>
```

## Forms

A basic Login and Signup form are included. Here are four examples for using either the `<SignupForm>` or `<LoginForm>`:

```jsx
import SignupForm from 'auth-component/forms/signup/signup';
// You can use LoginForm in any of the below examples.
import LoginForm from 'auth-component/forms/login/login';

<h2>Signup - React Standalone</h2>
<SignupForm handleSubmit={(authData) => Promise.resolve(authData)} />

<h2>Signup - Feathers Service</h2>
<SignupForm service={dummyService} onSuccess={handleSuccess} />

<h2>Signup - Can-Connect Model</h2>
<SignupForm Model={DummyModel}
	onSuccess={handleSuccess}
	usernameField='username'
	usernamePlaceholder='username' />

<h2>Signup - Error</h2>
<SignupForm Model={DummyModel}
	handleSubmit={() => Promise.reject('Invalid everything! No soup for you!')}
	onSuccess={handleSuccess}
	onError={error => { console.error(error); }} />
```

Many of the viewModel attributes are the same, so they share a [common base viewModel](https://github.com/icanjs/auth-component/blob/master/src/forms/form-base-vm.js).  The following attributes are available in both forms:

- `usernameField` {String} Allows you to customize one of the attributes sent to the server. It's set to `"email"` by default.
- `usernamePlaceholder` {String} Set the placeholder text for the `usernameField`.  Default is `"e-mail address"`.
- `passwordField` {String} Allows you to customize an attribute sent to the server.  The default is `"password"`.
- `passwordPlaceholder` {String} Set the placeholder text for the `passwordField`.  Default is `"password"`.
- `Model` {can-connect Model} a can-connect compatible Model to use for submitting the form data.
- `service` {FeathersJS service} a Feathers service to use for submitting the form data.
- `suppressWarnings` {Boolean} There are a few warnings that will show up by default. Turn them off by setting `suppressWarnings` to true.  Default `false`.
- `handleSubmit` {Function} is called when the form is submitted.  If a `Model` or `service` was provided, it will be used to communicate with the server.  If not, `handleSubmit` must be overwritten with your own logic.  It must return a `Promise`.
- `onSuccess` {Function} a function that runs when the server returns a success response.
- `onError` {Function} a function that runs when the server returns an error response.

These are the custom attributes for the `<LoginForm>` form:
- `buttonText` {String} Set the main action button's label.  Default is `"Login"`.
- `onForgot` {Function} runs when the user clicks the "Forgot Password" link. There is no default handler for this, so you have to provide your own function.

These are the custom attributes for the `<SignupForm>` form:
- `buttonText` {String} Set the main action button's label.  Default is `"Sign up"`.

There are two form demos included.  Start an http-server in the root and open [http://localhost:8080/src/forms/login-demo.html](http://localhost:8080/src/forms/login-demo.html) and [http://localhost:8080/src/forms/signup-demo.html](http://localhost:8080/src/forms/signup-demo.html).  Both demos include examples for using a `Model`, `service`, or custom function.

## Buttons

A Generic button and a bunch of ready-to-use buttons are included.  There is a buttons demo included.  Start an http-server in the root, and check out [http://localhost:8080/src/buttons/buttons-demo.html](http://localhost:8080/src/buttons/buttons-demo.html).

### Generic Auth Button

The generic button is the base for all of the other buttons.  You can use it to make your own auth buttons.  Here's how the Facebook button implements the generic button:

```jsx
import React from 'react';
import AuthButton from '../button.jsx';
import svg from './facebook.svg';

export default ({name, url, img, alt, text, popup}) => {
  return (
    <AuthButton name={name || 'Facebook'}
      url={url || '/auth/facebook'}
      popup={popup}
      svg={svg}
      alt={alt}
      text={text}
    />
  );
};
```

- `url` is like specifying the `href` on a link. The default value matches FeathersJS default OAuth URLs like `/auth/<providerName>`.  For example, the Facebook button uses `/auth/facebook`.
- `popup`, if truthy, simply opens the `url` in a centered popup window.
- `alt` is for alt text, the same as on other HTML elements.
- `text` allows you to specify some text to the right of the image.
- `svg` allows you to embed svg directly into the button.
- `img` is supported in place of `svg`.  The `img` attribute should the the URL to an image.

### Ready-to-use Buttons

A bunch of pre-styled buttons are included.  They all extend the generic button.

```js
import Amazon from 'auth-component/buttons/amazon/amazon';
import Dropbox from 'auth-component/buttons/dropbox/dropbox';
import Evernote from 'auth-component/buttons/evernote/evernote';
import Facebook from 'auth-component/buttons/facebook/facebook';
import Github from 'auth-component/buttons/github/github';
import Google from 'auth-component/buttons/google/google';
import LinkedIn from 'auth-component/buttons/linkedin/linkedin';
import Microsoft from 'auth-component/buttons/microsoft/microsoft';
import OpenID from 'auth-component/buttons/openid/openid';
import PayPal from 'auth-component/buttons/paypal/paypal';
import Skype from 'auth-component/buttons/skype/skype';
import Slack from 'auth-component/buttons/slack/slack';
import StackOverflow from 'auth-component/buttons/stackoverflow/stackoverflow';
import Twitter from 'auth-component/buttons/twitter/twitter';
import Yahoo from 'auth-component/buttons/yahoo/yahoo';
```

You'll generally only have to specify a `url` and the `popup` attribute:

```jsx
import FacebookButton from 'auth-component/buttons/facebook/facebook';

<FacebookButton url='/auth/facebook' popup={true} />
```

![AuthComponent Buttons Demo](https://cloud.githubusercontent.com/assets/128857/21478412/70751af8-cb08-11e6-8305-807c6fd0777b.jpg)

## Tabs

Currently, the only set of tabs uses [can-route](https://github.com/canjs/can-route) to change tabs.  If the feature is needed, [this issue for creating a standalone set of tabs](https://github.com/icanjs/auth-component/issues/18) is open and could use a champion.

The main demo shows how to use can-route based tabs together. You first need a basic can-route setup, shown in the below example. Then you can use the `<Route />` component from [can-route-react](https://github.com/icanjs/can-route-react) to show and hide components.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import route from 'can-route';
import DefineMap from 'can-define/map/map';
import {Route} from 'can-route-react';

import AuthContainer from './auth-container/auth-container';
import Tabs from 'auth-component/tabs/can-route';
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

    <Route data={{page: 'login'}} component={LoginForm} />
    <Route data={{page: 'signup'}} component={SignupForm} />
  </AuthContainer>,
  document.querySelector('[root=true]')
);
```

## Contributing

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```
npm install
node build
```

### Running the tests

Tests can run in the browser by opening a webserver and visiting the `test.html` page.
Automated tests that run the tests from the command line in Firefox can be run with

```
npm test
```
