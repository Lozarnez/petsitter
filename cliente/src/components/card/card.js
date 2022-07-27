import React from 'react';
import './styles.css';

function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{props.cardTitle}</h3>
      </div>
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}

export default Card;