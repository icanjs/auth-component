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

## LocalSignupForm and LocalLoginForm

A basic Local (username & password) Login and Signup form are included.

```jsx
import SignupForm from 'auth-component/forms/local-signup/local-signup';
import LoginForm from 'auth-component/forms/local-login/local-login';
```

Check out the [local-login demo](https://github.com/icanjs/auth-component/blob/master/src/forms/local-login/local-login.js) and [local-signup demo](https://github.com/icanjs/auth-component/blob/master/src/forms/local-signup/local-signup.js) code to see example usage.

The following attributes are available in both forms:

- `usernameField` {String} Allows you to customize one of the attributes sent to the server. It's set to `"email"` by default.
- `usernamePlaceholder` {String} Set the placeholder text for the `usernameField`.  Default is `"e-mail address"`.
- `passwordField` {String} Allows you to customize an attribute sent to the server.  The default is `"password"`.
- `passwordPlaceholder` {String} Set the placeholder text for the `passwordField`.  Default is `"password"`.
- `strategy` {String} When using [feathers-authentication](https://github.com/feathersjs/feathers-authentication), setting this attribute will add a `strategy` attribute to the outgoing data.
- `Model` {can-connect Model} a can-connect compatible Model to use for submitting the form data.
- `service` {FeathersJS service} a Feathers service to use for submitting the form data.
- `suppressWarnings` {Boolean} There are a few warnings that will show up by default. Turn them off by setting `suppressWarnings` to true.  Default `false`.
- `error` {String} When the server responds with an error string or an error object containing a `message` string, it will be set on `error` and shown in the UI above the form.
- `buttonText` {String} Set the main action button's label.  Default is `"Login"` or `"Signup"`.
- `clearError` {Function} Clears the error message.
- `onSubmit(data)` {Function} is called with the form data when the form is submitted.  If a `Model` or `service` was provided, it will be used to communicate with the server.  If not, `handleSubmit` must be overwritten with your own logic.  It must return a `Promise`.
- `onSuccess(responseData)` {Function} is called with the server response data.
- `onError(error)` {Function} is called with the server response error.

As of version `5.0`, both forms are based off of [@tannerlinsley/react-form](https://github.com/tannerlinsley/react-form). Check out the [React-Form API docs](https://github.com/tannerlinsley/react-form#-form-) to see additional properties and functions that are available.

These are the custom attributes for the `<LoginForm>` form:
- `onForgot` {Function} runs when the user clicks the "Forgot Password" link. There is no default handler for this, so you have to provide your own function.

These are the custom attributes for the `<SignupForm>` form:
- `asyncValidation` {Function} A function that returns a promise. If an error string is returned, or an error object with a `message` string is returned, it will become the validation error for the username/email field.

See the "Running the Demos" section to run the included form demos.  Both demos include examples for using a `Model`, `service`, or custom function.

## Form

As of version `5.0`, and as part of the refactor to use [react-form](https://github.com/tannerlinsley/react-form), you can easily create your own auth form. The `Form` element is a wrapper for the react-form component by the same name, but adds asynchronous validation support and automatic server response error handling.  The following properties are available on the `Form` component:

- `strategy` {String} When using [feathers-authentication](https://github.com/feathersjs/feathers-authentication), setting this attribute will add a `strategy` attribute to the outgoing data.
- `Model` {can-connect Model} a can-connect compatible Model to use for submitting the form data.
- `service` {FeathersJS service} a Feathers service to use for submitting the form data.
- `suppressWarnings` {Boolean} There are a few warnings that will show up by default. Turn them off by setting `suppressWarnings` to true.  Default `false`.
- `error` {String} When the server responds with an error string or an error object containing a `message` string, it will be set on `error` and shown in the UI above the form.
- `clearError` {Function} Clears the error message.
- `onSubmit(data)` {Function} is called with the form data when the form is submitted.  If a `Model` or `service` was provided, it will be used to communicate with the server.  If not, `handleSubmit` must be overwritten with your own logic.  It must return a `Promise`.
- `onSuccess(responseData)` {Function} is called with the server response data.
- `onError(error)` {Function} is called with the server response error.

Check out the [React-Form API docs](https://github.com/tannerlinsley/react-form#-form-) to see additional properties and functions that are available.  Below is an annotated example of how to make a custom form.

```jsx
import React from 'react';
import Form from '../form/form.js';
import { Text } from 'react-form';
import '../forms.less';
import FormError from '../form-error/form-error';
import AsyncValidator from '../async-validator/async-validator';

export default ({
  asyncValidation,
  forgotClicked,
  // Allow all react-form props to pass through
  ...rest
}) => {
  return (
    <Form {...rest}>
      {// You must wrap your custom form in two functions as done here.}
      {({error, clearError}) => {
        return ({values, submitForm}) => {
          return (
            <form onSubmit={submitForm} className='auth-component-form'>
              <FormError error={error} clearError={clearError} />

              <Text field='email' placeholder='email' tabIndex='1' />
              <Text field='password' type='password' placeholder='password' tabIndex='1' />

              {asyncValidation && <AsyncValidator field='emailError' params={queryParams} validate={asyncValidation} />}

              <Text field='myCustomField' placeholder='Custom Snazzy Field' tabIndex='1' />

              <div className='forgot-password'>
                <a href='javascript://' onClick={forgotClicked} tabIndex='2'>forgot password</a>
              </div>

              <button type='submit' tabIndex='1'>Login</button>
            </form>
          );
        };
      }}
    </Form>
  );
};
```

Any `react-form` fields you add will be added to the payload and sent to the server.

## AsyncValidator
The `AsyncValidator` allows you to run asynchronous validations against a server.  The `Form` example, above, shows how to use it in a form.  To make the validations work, you need to use the `validate` attribute on a form.  We assigned the AsyncValidator a `field` of `emailError`.  Now we can use the `emailError` attribute in the `validate` rules:

```js
<SignupForm 
  Model={DummyModel}
  defaultValues={{email: '', password: '', emailError: ''}}
  validate={({email, password, emailError}) => {
    return {
      email: !email ? 'E-mail address is required' : emailError || null,
      password: !password ? 'Password is required' : null
    };
  }}
  onSuccess={handleSuccess}
  usernameField='username'
  usernamePlaceholder='username'
  asyncValidation={simulatedAsyncValidation} />

function simulatedAsyncValidation (query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (query.email === 'contact@bitovi.com') {
        reject('That email is unavailable');
      } else {
        resolve(true);
      }
    }, 500);
  });
}
```

## FormError

The `FormError` component is simply a `div` with an error message in it.  It is used to show error messages returned from a server.  See how it's used in the `Form` example, above, or in the demos.

```js
import FormError from 'auth-component/forms/form-error/form-error';

<FormError error={error} clearError={clearError} />
```

- `error` {String} The error message to display.
- `clearError` {Function} a function that can be called to clear the error message.

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

You'll generally only ever have to specify the `url`, `text`, and `popup` attributes.

```jsx
import FacebookButton from 'auth-component/buttons/facebook/facebook';

<FacebookButton url='/auth/facebook' popup={true} text='Login with Facebook' />
```

If you don't specify a `text` attribute, you'll get a square button with an icon.  The button with `text` from the above code would look like the "Login with Facebook" button in this example:

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

## Changelog
- `5.0.0` - Rebuilt forms using [tannerlinsley/react-form](https://github.com/tannerlinsley/react-form).
  - Forms can no be validated.
  - It's now MUCH easier to customize forms.  You're no longer stuck using the basic login forms, which only include email and password.
  - Added AsyncValidator component that works with React-Form.
  - Added FormError component that shows server-sent form errors.
- `4.0.0`
  - Created login buttons.
  - Created basic login and signup forms.  No validation.

## Contributing

### Running the demos
You can try out the included demos using the following steps:

1. Clone the repo.
2. Run `yarn` or `npm install`
3. Run `npm run develop`
4. With the development server running, open a demo
  - [Main demo](http://localhost:8080)
  - [Local Login Form Demo](http://localhost:8080/src/forms/local-login/demo.html)
  - [Local Signup Form Demo](http://localhost:8080/src/forms/local-signup/demo.html)

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```
npm install
node build
```

### Running the tests

Tests can run in the browser by opening a webserver and visiting the `test/test.html` page.
Automated tests that run the tests from the command line in Firefox can be run with

```
npm test
```
