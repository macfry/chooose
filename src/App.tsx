import React from 'react';
import { ChakraProvider, Container, SimpleGrid } from '@chakra-ui/react'
import TripPanel from './components/TripPanel';

const App = () => {
  const test = {
    title: 'European Quest',
    countriesDesc: '8 countries',
    durationDesc: '21 Days',
    emissionOffset: '810kg',
    rating: 4.5,
    imageUrl: '',
    imageAlt: 'some alt',
  };

  return (
    <ChakraProvider>
      <Container maxW='2xl'>
        <SimpleGrid minChildWidth='120px' spacing='40px'>
          <TripPanel 
            title={test.title}
            countriesDesc={test.countriesDesc}
            durationDesc={test.durationDesc}
            emissionOffset={test.emissionOffset}
            rating={test.rating}
            imageUrl={test.imageUrl}
            imageAlt={test.imageAlt}
          />
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
};

export default App;
