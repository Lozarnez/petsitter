import React, { useEffect } from 'react';
import { getCityById } from '../../api/city';
import { getStateByPetSitterId } from '../../api/state';
import './styles.css';

function PetSitterCard({ petSitter }) {

  const [city, setCity] = React.useState({});
  const [state, setState] = React.useState({});

  useEffect(() => {
    let stado = getStateByPetSitterId(petSitter.id);
    stado.then(data => {
      setState(data);
    });
    let ciudad = getCityById(petSitter.cityId);
    ciudad.then(data => {
      setCity(data);
    });

  }, []);

  return (
    <div className='infoCard'>
      <div className='infoCard-img'>
        <img src={petSitter.photoURL} alt='petSitter' />
      </div>
      <div className='infoCard-body'>
        <h3>{petSitter.name} {petSitter.lastName}</h3>
        <span>{city.name}, {state.name}</span>
      </div>
      <div className='infoCard-rating'>
        <span>Rating: 4</span>
      </div>
    </div>
  )
}

export default PetSitterCard;