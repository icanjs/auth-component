import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './login';
import Input from './input';
import DefineMap from 'can-define/map/map';

const dummyService = {
  create (data) {
    return Promise.resolve(data);
  }
};

// Render the DOM
ReactDOM.render(
  <div>
    <div className='container'>
      <h2>Login - React Standalone</h2>
      <Input type='email'
        placeholder='e-mail address'
        value={value}
        required
        tabIndex='1'
        onChange={handleValueChange} />
    </div>
  </div>,
  document.querySelector('[root=true]')
);
