import React from 'react';
import './styles.css';

function InputText({id, label, type, value, onChange, placeholder}) {
  return (
    <div className='input-container'>
      {label && <label className='input-label' htmlFor={id}>{label}</label>}
      <input
        onChange={onChange}
        value={value}
        type={type}
        className='input-text'
        name={id}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputText;