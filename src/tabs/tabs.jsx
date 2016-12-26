import React from 'react';

export default ({activeTab, signupClicked, loginClicked}) => {
  let signupActive = activeTab === 'signup' ? 'active' : '';
  let loginActive = activeTab === 'login' ? 'active' : '';

  return (
    <ul className='auth-component-tabs'>
      <li className={`signup ${signupActive}`} onClick={signupClicked}>
        <a href='javascript://'>Signup</a>
      </li>
      <li className={`login ${loginActive}`} onClick={loginClicked}>
        <a href='javascript://'>Login</a>
      </li>
    </ul>
  );
};
