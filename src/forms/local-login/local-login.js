import React from 'react';
import { Text } from 'react-form';
import AuthForm from '../form.js';

export default ({asyncValidation, forgotClicked, buttonText}) => {
  return (
    <AuthForm>
      {({values, submitForm}) => {
        return (<form onSubmit={submitForm} className='auth-component-form'>
          <Text field='email' placeholder='e-mail address' tabIndex='1' />
          <Text field='password' type='password' placeholder='password' tabIndex='1' />

          <div className='forgot-password'>
            <a href='javascript://' onClick={forgotClicked} tabIndex='2'>forgot password</a>
          </div>

          <button type='submit' tabIndex='1'>{buttonText || 'Login'}</button>
        </form>);
      }}
    </AuthForm>
  );
};
