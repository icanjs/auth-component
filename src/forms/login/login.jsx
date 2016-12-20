import React from 'react';

export default ({login, email, password}) => {
  return (
    <form id='local-auth' onSubmit={login}>
      <div className='messages' />

      <input type='email' placeholder='e-mail address' value={email} />
      <input type='password' placeholder='password' value={password} />

      <div className='forgot-password'>
        <a href='/forgot'>forgot password</a>
      </div>
      <button type='submit'>Login</button>
    </form>
  );
};
