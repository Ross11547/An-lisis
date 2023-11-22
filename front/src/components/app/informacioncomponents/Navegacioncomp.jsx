import React from 'react'
import styled from "styled-components";
const Navegacioncomp = () => {
  return (
    <Navegacion>
    <Label htmlFor=""> Categorias</Label>
    <Input type="search" placeholder="buscador"/>
    <Navs>
    <Button>botones</Button>
      <Button>botones</Button>
      <Button>botones</Button>
      <Button>botones</Button>
      <Button>botones</Button> <Button>botones</Button>
      <Button>botones</Button>
      <Button>botones</Button>      <Button>botones</Button> <Button>botones</Button>
   
    </Navs>
  </Navegacion>
  )
}

export default Navegacioncomp
// navegacion
const Navegacion = styled.div`
  width: calc(100% - 950px);
  height: 100vh;
  max-height:125vh;
  overflow: auto; /* esto hace que aparezca una barra de desplazamiento si el contenido es más grande que el contenedor */

  background-color: #222f49;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  color: #fff;

`;
const Input = styled.input`
padding:0.8em;
border:none;
&:focus{
  border:none;
  background-color:#42455057;
  color:#fff;
};

`;

const Navs = styled.div`
  background-color: transparent;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  justify-content: center;
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
    transform: translateX(-10px);
    border-bottom: solid 1px;
  border-top: solid 1px;
  }
`;
const Label = styled.label`
  padding: 2em 0 0 0;
  font-size: 2em;
  border-left: 1em solid #fff;
`;