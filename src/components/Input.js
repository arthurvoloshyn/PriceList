import React from 'react';

const Input = ({ value, onChange, onSubmit, onKeyPress }) => (
  <form onSubmit={onSubmit} className='form'>
    <input
      className='input'
      type='number'
      min='1'
      max='99'
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      required
    />
  </form>
);

export default Input;
