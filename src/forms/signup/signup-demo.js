import React from 'react';
import ReactDOM from 'react-dom';
import SignupForm from './signup';
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
      <h2>Signup - React Standalone</h2>
      <SignupForm handleSubmit={(authData) => {
        return Promise.resolve(authData);
      }} />
    </div>

    <div className='container service'>
      <h2>Signup - Feathers Service</h2>
      <SignupForm service={dummyService} onSuccess={handleSuccess} />
    </div>

    <div className='container model'>
      <h2>Signup - Can-Connect Model</h2>
      <SignupForm Model={DummyModel}
        onSuccess={handleSuccess}
        usernameField='username'
        usernamePlaceholder='username' />
    </div>

    <div className='container error'>
      <h2>Signup - Error</h2>
      <SignupForm Model={DummyModel}
        handleSubmit={() => Promise.reject('Invalid everything! No soup for you!')}
        onSuccess={handleSuccess}
        onError={error => { console.error(error); }} />
    </div>
  </div>,
  document.querySelector('[root=true]')
);
