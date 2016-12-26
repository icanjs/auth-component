# auth-component

[![Build Status](https://travis-ci.org/icanjs/auth-component.png?branch=master)](https://travis-ci.org/icanjs/auth-component)

Compose a clean Auth UI with these simple React components.

There is also a matching CanJS Stache version: https://github.com/icanjs/can-auth-component

![auth-component example](https://cloud.githubusercontent.com/assets/128857/21478355/da76f80a-cb07-11e6-8a6d-dc382d30bf9f.jpg)

## Example Usage

`auth-component` is a collection of components.  They can be composed based on the auth requirements of your application.  The main demo shows how to build the example shown in the image above.  https://github.com/icanjs/auth-component/blob/master/src/auth-demo.js

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

## Forms

A basic Login and Signup form are included.  There are two forms demos included.  Start an http-server in the root and open http://localhost:8080/src/forms/login-demo.html and http://localhost:8080/src/forms/signup-demo.html

### Login/Signup using a can-connect Model
See demo for now.

### Login/Signup using a FeathersJS Service
See demo for now.

### Login/Signup using plain functions
See demo for now.

## Buttons

A Generic button and a bunch of ready-to-use buttons are included.  There is a buttons demo included.  Start an http-server in the root, and check out http://localhost:8080/src/buttons/buttons-demo.html

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

- `url` is like specifying the `href` on a link.
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
