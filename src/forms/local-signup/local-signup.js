import React from 'react';
import { Text } from 'react-form';
import AsyncValidator from '../async-validator/async-validator';
import AuthForm from '../form/form.js';
import '../forms.less';
import FormError from '../form-error/form-error';

export default ({
  asyncValidation,
  forgotClicked,
  buttonText,
  usernameField = 'email',
  usernamePlaceholder = 'e-mail address',
  passwordField = 'password',
  passwordPlaceholder = 'password',
  ...rest
}) => {
  return (
    <AuthForm {...rest}>
      {({error, clearError}) => {
        return ({values, submitForm}) => {
          let queryParams = {
            email: values.email
          };
          return (
            <form onSubmit={submitForm} className='auth-component-form'>
              <FormError error={error} clearError={clearError} />

              <Text field={usernameField} placeholder={usernamePlaceholder} tabIndex='1' />
              <Text field={passwordField} type='password' placeholder={passwordPlaceholder} tabIndex='1' />
              {asyncValidation && <AsyncValidator field='emailError' params={queryParams} validate={asyncValidation} />}

              <div className='forgot-password'>
                {/* password strength meter will go here */}
              </div>

              <button type='submit' tabIndex='1'>{buttonText || 'Signup'}</button>
            </form>
          );
        };
      }}
    </AuthForm>
  );
};
