import { ChakraProvider, Container } from '@chakra-ui/react'
import theme from './theme';
import Trips from './components/Trips';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW='container.xl'>
        <Trips/>
      </Container>
    </ChakraProvider>
  );
};

export default App;
