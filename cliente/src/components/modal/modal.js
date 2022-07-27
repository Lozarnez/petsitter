import React from 'react';
import RisedButton from '../risedButton/risedButton';
import './styles.css';

function Modal(props) {



  return (
    <>
      {props.modal.show && (
      <div className='overlay'>
        <div className='modal-container'>
          <div className='modal-header'>
            <h3>{props.modal.title}</h3>
          </div>
          <div className='modal-body'>
            <h4>{props.modal.text}</h4>
            <div>
              <RisedButton text={props.modal.textButton} onClick={() => props.setModal(false)} />
            </div>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default Modal;