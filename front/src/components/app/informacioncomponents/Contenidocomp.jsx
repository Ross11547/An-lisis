import React from 'react'
import styled from "styled-components";
const Contenidocomp = () => {
  return (
    <Contenedores>
  
    
    <Divnoticias>
      <Parafoo>
      Es una prueba sencilla a partir de una
        muestra de sangre obtenida del talón del recién nacido. Se debe
        realizar a todos los bebés antes de su egreso de la maternidad,
        preferentemente entre las 48hs-72hs de vida. Este análisis permite
        detectar de manera precoz alguna de las siguientes enfermedades
        congénitas:  
      </Parafoo>
      <Button>botones</Button> <Titulo>Titulo</Titulo>
      </Divnoticias>
      <Divnoticias>
      <Parafoo>
      Es una prueba sencilla a partir de una
        muestra de sangre obtenida del talón del recién nacido. Se debe
        realizar a todos los bebés antes de su egreso de la maternidad,
        preferentemente entre las 48hs-72hs de vida. Este análisis permite
        detectar de manera precoz alguna de las siguientes enfermedades
        congénitas:  
      </Parafoo>
      <Button>botones</Button> <Titulo>Titulo</Titulo>
      </Divnoticias>
      <Divnoticias>
      <Parafoo>
      Es una prueba sencilla a partir de una
        muestra de sangre obtenida del talón del recién nacido. Se debe
        realizar a todos los bebés antes de su egreso de la maternidad,
        preferentemente entre las 48hs-72hs de vida. Este análisis permite
        detectar de manera precoz alguna de las siguientes enfermedades
        congénitas:  
      </Parafoo>
      <Button>botones</Button> <Titulo>Titulo</Titulo>
      </Divnoticias>
      <Divnoticias>
      <Parafoo>
      Es una prueba sencilla a partir de una
        muestra de sangre obtenida del talón del recién nacido. Se debe
        realizar a todos los bebés antes de su egreso de la maternidad,
        preferentemente entre las 48hs-72hs de vida. Este análisis permite
        detectar de manera precoz alguna de las siguientes enfermedades
        congénitas:  
      </Parafoo>
      <Button>botones</Button> <Titulo>Titulo</Titulo>
      </Divnoticias>
      <Divnoticias>
      <Parafoo>
      Es una prueba sencilla a partir de una
        muestra de sangre obtenida del talón del recién nacido. Se debe
        realizar a todos los bebés antes de su egreso de la maternidad,
        preferentemente entre las 48hs-72hs de vida. Este análisis permite
        detectar de manera precoz alguna de las siguientes enfermedades
        congénitas:  
      </Parafoo>
      <Button>botones</Button> <Titulo>Titulo</Titulo>
      </Divnoticias>    <Divnoticias>
      <Parafoo>
      Es una prueba sencilla a partir de una
        muestra de sangre obtenida del talón del recién nacido. Se debe
        realizar a todos los bebés antes de su egreso de la maternidad,
        preferentemente entre las 48hs-72hs de vida. Este análisis permite
        detectar de manera precoz alguna de las siguientes enfermedadese entre las 48hs-72hs de vida. Este análisis permite
        detectar de manera precoz alguna de las siguientes enfermedadese entre las 48hs-72hs de vida. Este análisis permite
        detectar de manera precoz alguna de las siguientes enfermedades
        congénitas:  
      </Parafoo>
      <Button>botones</Button> <Titulo>Titulo</Titulo>
      </Divnoticias>     
    </Contenedores>
  )
}

export default Contenidocomp

// contenedores noticias
const Contenedores = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;
  padding:1em;


justify-content: center

`;
const Divnoticias = styled.div`
  width: 30%;
  height: calc(100% / 4);
  background-color: #bfccccca;
 max-width:400px;
 min-width:250px;
  display: flex;
  flex-direction: column;
  transition:all 1s;
  text-align:justify;
  gap: 2em;
  &:hover{
   transform:scale(1.08);

  }
`;

const Parafoo = styled.p`
padding:2em;
width:100%;
height: 35vh;
overflow:hidden;
`;


const Titulo = styled.h2`
text-align:center;
padding: 0.5em 0;
background-color:#A6445E;
color:#fff;
width:100%;
display:block;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8em 0;
  border: none;
  border-bottom: solid 1px;
  border-top: solid 1px;
  font-size: 1em;
  transition: all 1s;

  &:hover {
    background-color: #326bdd76;
    color: #fff;

    border-bottom: solid 1px;
  border-top: solid 1px;
  }
`;