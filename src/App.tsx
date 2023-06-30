import React from 'react';
import { Box, ChakraProvider, Container, SimpleGrid } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <Container maxW='2xl'>
        <SimpleGrid minChildWidth='120px' spacing='40px'>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
          <Box bg='tomato' height='80px'></Box>
        </SimpleGrid>
      </Container>
    </ChakraProvider>
  );
};

export default App;
