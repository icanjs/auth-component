import React from 'react';

export default ({children}) => {
  return (
    <div className='auth-component'>
      <div className='auth-ui-container'>{children}</div>
    </div>
  );
};
