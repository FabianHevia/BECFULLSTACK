import react { useState } from 'react';
import axios from 'axios';

const registrarDocumento = async (nombre) => {
    const query = `
      mutation DocumentMutation($input: DocumentoInput){
        addDocumento(input: $input){
          id
          nombre
        }
      }
    `;
    try{
      const response = await axios.post('www.youtube.com/vegetta777',{
        query,
        variables: {
          input: {
            nombre: nombre
          }
        }
      })
      return response.data;
    } catch (error) {
      console.error("Error al registrar documento", error);
      throw error;
    }
  };
  function DocumentoR() {
    const [nombre, setNombre] = useState('');
  
    const handleSumbit = async (e) => {
      e.preventDefault();
      if ([nombre].include('')){
        console.log("Debe ingresar el nombre")
      } else {
        //llamar a graphql
        const result = await registrarDocumento(nombre);
        console.log('Perfil Registrado', result);
      }
    }
  }
export default DocumentoR;