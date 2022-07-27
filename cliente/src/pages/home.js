import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../components/container';
import DescriptionModule from '../components/description/description';
import { DESCRIPTIONS } from '../constants/descriptions';
import RaisedButton from '../components/risedButton/risedButton';
import './styles.css';

function Home() {

  const navigate = useNavigate();

  return (
    <Container>
      <div className='presentation'>
        <div className='presentation-card'>
          <h1>Nos hacemos responsables de tu mascota</h1>
          <p>Encuentra el mejor cuidador para tu mascota, mientras no estás en casa.</p>
          <RaisedButton text='Encontrar cuidadores' onClick={() => navigate('/petSitters')} />
        </div>
      </div>
        <div>
          <h1>¿Qué es?</h1>
        </div>
        <div className='site-description'>
          {DESCRIPTIONS.map((description, index) => (
            <DescriptionModule
              key={index}
              title={description.title}
              text={description.text}
              imgURL={description.imgURL}
            />
          ))}
        </div>
    </Container>
  )
}

export default Home;