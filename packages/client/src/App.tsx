import { ChakraProvider } from '@chakra-ui/react';
import { DataView } from './components/DataView';
import { Layout } from './components/Layout';

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <DataView />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
