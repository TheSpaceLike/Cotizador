import './App.css';
import React, { useState } from 'react'
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

const Container = styled.div`
  max-width: auto;
  margin: 0 auto;
`;
const FormContainer = styled.div`
  background-color: #FFF;
  padding:3rem;
  max-width: 600px;
  align-items: center;
  margin: 0 auto;
  margin-top: 4rem;
  border-radius: 2rem;
`;

function App() {

  const [ resumen, setResumen ] = useState({
    cotizacion: 0,
    datos:{
      marca: '',
      year: '',
      plan: ''
    }
  });

  //Extraer datos
  const { cotizacion, datos } = resumen;

  return (
   <>
      <Container>
        <Header titulo='Cotizador de seguros'/>
      </Container>
      <FormContainer>
        <Formulario 
          setResumen={setResumen}
        />
        <Resumen 
          datos={datos}
        />
        <Resultado 
          cotizacion={cotizacion}
        />
      </FormContainer>
   </>
  );
}

export default App;
