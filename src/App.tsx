import { ChakraProvider, Container } from '@chakra-ui/react'
import theme from './theme';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW='container.xl'>

      </Container>
    </ChakraProvider>
  );
};

export default App;
