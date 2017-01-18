import React from 'react';
import { Text } from 'react-form';
import AsyncValidator from '../async-validator/async-validator';
import AuthForm from '../form.js';

export default ({asyncValidation, forgotClicked, buttonText}) => {
  return (
    <AuthForm>
      {({values, submitForm}) => {
        let queryParams = {
          email: values.email
        };
        return (<form onSubmit={submitForm} className='auth-component-form'>
          <Text field='email' placeholder='e-mail address' tabIndex='1' />
          <Text field='password' type='password' placeholder='password' tabIndex='1' />
          {asyncValidation && <AsyncValidator field='emailError' params={queryParams} validate={asyncValidation} />}

          <div className='forgot-password'>
            {/* password strength meter will go here */}
          </div>

          <button type='submit' tabIndex='1'>{buttonText || 'Signup'}</button>
        </form>);
      }}
    </AuthForm>
  );
};
