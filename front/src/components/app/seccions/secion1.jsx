import React from "react";
import styled from "styled-components";

const Secion1 = () => {
  return (
    <Titulodiv>
      <Imginicio
        src="https://images.pexels.com/photos/3875225/pexels-photo-3875225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
      />
      <Contenidodiv>
        <H3>Cuida el Futuro de tu BEBE HANZ</H3>
        <p>INFORMATE CON NUESTRAS CAPSULAS INFORMATIVAS</p>
        <Butontitulo> MÁS INFORMACION</Butontitulo>
      </Contenidodiv>
    </Titulodiv>
  );
};

export default Secion1;
const Titulodiv = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
const Imginicio = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  clip-path: polygon(100% 0, 100% 100%, 42% 100%, 33% 50%, 42% 0);
`;
const Contenidodiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 3rem;
  text-align: center;
`;
const Butontitulo = styled.button`
  z-index: 1;
  background-color: #484d7ec8;
  color: #fff;
  border: none;
  margin: 3em;
  padding: 1em;
  transition: all 1s;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #fff;
    color: #484d7ec8;
  }
`;
const H3 = styled.h2`
  color: black;
  font-size: 2em;
  display: flex;
  padding: 10px;
  border-left: 10px solid #001a49;
`;
