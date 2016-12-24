import React from 'react';

export default ({
  usernameField,
  usernamePlaceholder,
  username,
  usernameChanged,
  password,
  passwordPlaceholder,
  passwordChanged,
  submitClicked,
  forgotClicked,
  buttonText
}) => {
  return (
    <form className='auth-component-form' onSubmit={submitClicked}>
      <div className='messages' />

      <input className='auth-component-input'
        type={usernameField === 'email' ? 'email' : 'text'}
        placeholder={usernamePlaceholder}
        value={username}
        required
        tabIndex='1'
        onChange={usernameChanged} />

      <input className='auth-component-input'
        type='password'
        placeholder='password'
        value={password}
        required
        tabIndex='1'
        onChange={passwordChanged} />

      <div className='forgot-password'>
        <a href='javascript://' onClick={forgotClicked} tabIndex='2'>forgot password</a>
      </div>

      <button type='submit' tabIndex='1'>{buttonText}</button>
    </form>
  );
};
