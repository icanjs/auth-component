import React from 'react';

export default ({type,
  placeholder,
  value,
  tabIndex,
  required,
  handleValueChange,
  error
}) => {
  let wrapperClass = `auth-component-input-wrapper ${error && 'error'}`;
  return (
    <div className={wrapperClass}>
      <input className='auth-component-input'
        type={type || 'text'}
        placeholder={placeholder}
        value={value}
        required={required}
        tabIndex={tabIndex}
        onChange={handleValueChange} />

      {error && <p className='message'>{error.message}</p>}
    </div>
  );
};
