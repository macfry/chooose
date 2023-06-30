import React from 'react';
import { ChakraProvider, Container, Grid, GridItem } from '@chakra-ui/react'
import TripPanel from './components/TripPanel';

const App = () => {
  const test = {
    title: 'European Quest',
    countriesDesc: '8 countries',
    durationDesc: '21 Days',
    emissionOffset: '810kg',
    rating: 2.35,
    imageUrl: 'https://picsum.photos/600/800',
  };

  return (
    <ChakraProvider>
      <Container maxW='container.xl'>
        <Grid 
          gap={4}
          autoFlow="row dense"
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(3, 1fr)'
        >
          <GridItem w='100%' >
            <TripPanel 
              title={test.title}
              countriesDesc={test.countriesDesc}
              durationDesc={test.durationDesc}
              emissionOffset={test.emissionOffset}
              rating={test.rating}
              imageUrl={test.imageUrl}
            />
          </GridItem>

          <GridItem w='100%' >
            <TripPanel 
              title={test.title}
              countriesDesc={test.countriesDesc}
              durationDesc={test.durationDesc}
              emissionOffset={test.emissionOffset}
              rating={test.rating}
              imageUrl={test.imageUrl}
            />
          </GridItem>
        
          <GridItem w='100%' >
            <TripPanel 
              title={test.title}
              countriesDesc={test.countriesDesc}
              durationDesc={test.durationDesc}
              emissionOffset={test.emissionOffset}
              rating={test.rating}
              imageUrl={test.imageUrl}
            />
          </GridItem>

          <GridItem w='100%' >
            <TripPanel 
              title={test.title}
              countriesDesc={test.countriesDesc}
              durationDesc={test.durationDesc}
              emissionOffset={test.emissionOffset}
              rating={test.rating}
              imageUrl={test.imageUrl}
            />
          </GridItem>

          <GridItem w='100%' >
            <TripPanel 
              title={test.title}
              countriesDesc={test.countriesDesc}
              durationDesc={test.durationDesc}
              emissionOffset={test.emissionOffset}
              rating={test.rating}
              imageUrl={test.imageUrl}
            />
          </GridItem>

          <GridItem w='100%' >
            <TripPanel 
              title={test.title}
              countriesDesc={test.countriesDesc}
              durationDesc={test.durationDesc}
              emissionOffset={test.emissionOffset}
              rating={test.rating}
              imageUrl={test.imageUrl}
            />
          </GridItem>
        </Grid>
      </Container>
    </ChakraProvider>
  );
};

export default App;
