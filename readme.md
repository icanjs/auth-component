# auth-component

[![Build Status](https://travis-ci.org/icanjs/auth-component.png?branch=master)](https://travis-ci.org/icanjs/auth-component)

Compose a clean Auth UI with these simple React components.

There is also a matching CanJS Stache version: https://github.com/icanjs/can-auth-component

![auth-component example](https://cloud.githubusercontent.com/assets/128857/21478355/da76f80a-cb07-11e6-8a6d-dc382d30bf9f.jpg)

## Usage

```js
import plugin from 'auth-component';
```

## Buttons

A Generic button and a bunch of ready-to-use buttons are included.

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

![AuthComponent Buttons Demo](https://cloud.githubusercontent.com/assets/128857/21478359/df7977a6-cb07-11e6-9151-5a2e7c119499.jpg)

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
