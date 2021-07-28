import './App.css';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const FormContainer = styled.div`
  background-color: #FFF;
  padding:3rem;
`;

function App() {
  return (
   <>
      <Container>
        <Header titulo='Cotizador de seguros'/>
      </Container>
      <FormContainer>
        <Formulario />
      </FormContainer>
   </>
  );
}

export default App;
