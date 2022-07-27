import React from 'react';
import './styles.css';

function RisedButton(props) {
  return (
    <button className='btn' {...props}>{props.text}</button>
  )
}

export default RisedButton;