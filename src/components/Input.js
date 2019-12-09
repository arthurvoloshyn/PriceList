import React from 'react';

const Input = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className='form'>
    <input
      className='input'
      type='number'
      min='1'
      max='90'
      value={value}
      onChange={onChange}
    />
  </form>
);

export default Input;
