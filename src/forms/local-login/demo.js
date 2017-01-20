import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './local-login';
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

// Render the DOM
ReactDOM.render(
  <div>
    <div className='container standalone'>
      <h2>Login - React Standalone</h2>
      <p>Custom field names and validation</p>
      <LoginForm
        usernameField='username'
        usernamePlaceholder='your username'
        passwordField='secretPhrase'
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
      <h2>Login - Feathers Service</h2>
      <LoginForm service={dummyService} onSuccess={handleSuccess} />
    </div>

    <div className='container model'>
      <h2>Login - Can-Connect Model</h2>
      <LoginForm Model={DummyModel}
        onSuccess={handleSuccess}
        usernameField='username'
        usernamePlaceholder='username' />
    </div>

    <div className='container error'>
      <h2>Login - Error</h2>
      <LoginForm Model={DummyModel}
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
