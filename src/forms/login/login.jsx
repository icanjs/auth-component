import React from 'react';

export default ({
  loginFn,
  usernameField,
  usernamePlaceholder,
  username,
  password,
  usernameChanged,
  passwordChanged
}) => {
  return (
    <form className='auth-component-form' onSubmit={loginFn}>
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
        <a href='/forgot' tabIndex='2'>forgot password</a>
      </div>
      <button type='submit' tabIndex='1'>Login</button>
    </form>
  );
};
