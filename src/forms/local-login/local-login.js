import React from 'react';
import { Text } from 'react-form';
import AuthForm from '../form/form.js';
import '../forms.less';
import FormError from '../form-error/form-error';

export default ({
  forgotClicked,
  usernameField = 'email',
  usernamePlaceholder = 'e-mail address',
  passwordField = 'password',
  passwordPlaceholder = 'password',
  buttonText,
  ...rest
}) => {
  return (
    <AuthForm {...rest}>
      {({error, clearError}) => {
        return ({values, submitForm}) => {
          return (
            <form onSubmit={submitForm} className='auth-component-form'>
              <FormError error={error} clearError={clearError} />

              <Text field={usernameField} placeholder={usernamePlaceholder} tabIndex='1' />
              <Text field={passwordField} type='password' placeholder={passwordPlaceholder} tabIndex='1' />

              <div className='forgot-password'>
                <a href='javascript://' onClick={forgotClicked} tabIndex='2'>forgot password</a>
              </div>

              <button type='submit' tabIndex='1'>{buttonText || 'Login'}</button>
            </form>
          );
        };
      }}
    </AuthForm>
  );
};
