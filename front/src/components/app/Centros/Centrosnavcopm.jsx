import React from 'react'
import styled from "styled-components";
import {
    H3,
    Contenidodiv,
  
  } from "../iniciocomponents/Superior";

const Centrosnavcopm = () => {
  return (
    <Titulodiv>
    <Imginicio
      src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
    />
    <Contenidodiv>
      <H3>Centros donde se realiza el tamizaje</H3>
    </Contenidodiv>
  </Titulodiv>
  )
}

export default Centrosnavcopm
export const Imginicio= styled.img`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  background-size: cover;
  box-shadow:  -12px -12px 24px #151616;
  clip-path: polygon(100% 0, 100% 100%, 42% 100%, 33% 50%, 42% 0);
 


`;
export const Titulodiv = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  @media (max-width: 520px) {
  height: 50vh;
  & img{
    display:none;
  }
   
  & h2{
    width:100%;
  }
}
`;
