import React from 'react';
import ReactDOM from 'react-dom';
import SignupForm from './local-signup';
import DefineMap from 'can-define/map/map';

const dummyService = {
  create (data) {
    return Promise.resolve(data);
  }
};

const DummyModel = DefineMap.extend({
  id: 'any',
  email: 'string',
  password: 'string'
});
DummyModel.prototype.save = function () {
  return Promise.resolve(this.serialize());
};

function handleSuccess (loginData) {
  loginData.id = 1;
  console.log('Login was successful!', loginData);
}

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

// Render the DOM
ReactDOM.render(
  <div>
    <div className='container standalone'>
      <h2>Signup - React Standalone</h2>
      <p>basic validation example</p>
      <SignupForm
        usernameField='username'
        usernamePlaceholder='your username'
        passwordField='pw'
        passwordPlaceholder='secret phrase'
        onSubmit={(authData) => {
          return Promise.resolve(authData);
        }}
        validate={({username, secretPhrase}) => {
          return {
            username: !username ? 'E-mail address is required' : null,
            secretPhrase: !secretPhrase ? 'Secret phrase is required' : null
          };
        }} />
    </div>

    <div className='container service'>
      <h2>Signup - Feathers Service</h2>
      <SignupForm service={dummyService} onSuccess={handleSuccess} />
    </div>

    <div className='container model'>
      <h2>Signup - Can-Connect Model</h2>
      <p>Async email validation: try contact@bitovi.com</p>
      <SignupForm Model={DummyModel}
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
    </div>

    <div className='container error'>
      <h2>Signup - Error</h2>
      <SignupForm Model={DummyModel}
        onSubmit={() => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              reject('Invalid everything! No soup for you!');
            }, 200);
          });
        }}
        onSuccess={handleSuccess}
        onError={error => { console.error(error); }} />
    </div>
  </div>,
  document.querySelector('[root=true]')
);
