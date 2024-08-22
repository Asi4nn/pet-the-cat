import './App.css';
import { Container } from '@mui/material';
import CatDisplay from './components/CatDisplay';
import PetButton from './components/PetButton';
import PetDisplay from './components/PetDisplay';
import { useEffect, useState } from 'react';
import { getNewCat, getNumPets, incrementPets } from './api';


function App() {
  const [catId, setCatId] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [petCount, setPetCount] = useState(0);

  const getSetNewCat = () => {
    getNewCat().then((response) => {
      setImgSrc(response.data[0].url);
      setCatId(response.data[0].id);
      getNumPets(response.data[0].id).then((response) => {
        setPetCount(response.data.pets);
      });
    })
  }

  const onPetClick = () => {
    incrementPets(catId).then((response) => {
      setPetCount(response.data.pets);
    });
  }

  useEffect(() => {
    getSetNewCat();
  }, []);

  return (
    <Container className='App' maxWidth='md' sx={{marginTop: '2em', display: 'flex', flexDirection: 'column'}}>
      <h1>Pet the Cat</h1>
      <h2>Click the image to get more cat pics!</h2>
      <PetButton onPetClick={onPetClick} />
      <PetDisplay catId={catId} petCount={petCount} />
      <CatDisplay imgSrc={imgSrc} onImgClick={getSetNewCat} />
    </Container>
  );
}

export default App;
