import React, { useEffect } from 'react';
import { getPetSitters } from '../api/petSitter';
import Container from '../components/container';
import PetSitterCard from '../components/petSitterCard/petSitterCard';

function PetSitters() {

  const [petSitters, setPetSitters] = React.useState([]);

  useEffect(() => {
    let response = getPetSitters();
    response.then(data => {
      setPetSitters(data);
    });
  }, []);

  return (
    <Container>
      <h1>PetSitters</h1>
      {petSitters !== 0 &&
        petSitters.map((petSitter) => (
          <PetSitterCard key={petSitter.id} petSitter={petSitter} />
        ))}
    </Container>
  );
}

export default PetSitters;