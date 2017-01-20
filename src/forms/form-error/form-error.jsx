import React from 'react';

export default ({error, clearError}) => {
  return (
    error && <div className='FormError'>{error}</div> || null
  );
};
