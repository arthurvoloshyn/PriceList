import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="form">
    <input id={id} className="input" type="number" min="1" max="99" value={value} onChange={onChange} required />
  </form>
);

Input.propTypes = {
  id: PropTypes.string,
  value: PropTypes.node,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

Input.defaultProps = {
  id: 'days',
  value: 7,
  onChange: () => {},
  onSubmit: () => {}
};

export default Input;
