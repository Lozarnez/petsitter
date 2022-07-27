import React from 'react';
import './styles.css';

function DescriptionModule(props) {
  return (
    <div className='description-container'>
      <div className='description-img'>
        <img src={props.imgURL} alt='description' />
      </div>
      <div className='description-text-container'>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default DescriptionModule;