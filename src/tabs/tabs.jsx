import React from 'react';

export default ({activeTab, setTab}) => {
  let signupActive = activeTab === 'signup' ? 'active' : '';
  let loginActive = activeTab === 'login' ? 'active' : '';

  return (
    <ul className='auth-component-tabs'>
      <li className={`signup ${signupActive}`} onClick={setTab('signup')}>
        <a href='javascript://'>Signup</a>
      </li>
      <li className={`login ${loginActive}`} onClick={setTab('login')}>
        <a href='javascript://'>Login</a>
      </li>
    </ul>
  );
};
