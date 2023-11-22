import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Contenidocomp = () => {
  const [contenidos, setContenidos] = useState([]);

  async function mostrarcontenidos() {
    const response = await fetch(
      "https://informativalaravel-production.up.railway.app/api/programa",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const respuesta = await response?.json();
    setContenidos(respuesta);
  }

  useEffect(() => {
    mostrarcontenidos();
  }, []);

  return (
    <Divprogra>
      {contenidos.map((v, i) => (
        <Content key={i}>
          <Contendidouno>
            <Titulocn>{v.nombre}</Titulocn>
            <Parrafocn>{v.contenido_a}</Parrafocn>
          </Contendidouno>
          <Contendidodos>
            <Titulocn>{v.titulo}</Titulocn>
            <Parrafocn>{v.contenido_b}</Parrafocn>
          </Contendidodos>
        </Content>
      ))}
    </Divprogra>
  );
};

export default Contenidocomp;

const Divprogra = styled.section`
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 720px) {
    height: 120vh;
  }
  @media (max-width: 520px) {
    height: 100vh;
  }
`;

const Content = styled.div`
  width: 90vw;
  height: 45vh;
  z-index: 2;
  display: flex;
  margin-top: 3em;
  gap: 3em;
  @media (max-width: 720px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    position: relative;
    gap: 4em;
  }
`;
const Contendidouno = styled.div`
  width: 50%;
  height: 50vh;
  background-color: #f779d9;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  justify-content: space-evenly;
  transition: all 2s;
  @media (max-width: 520px) {
    width: 90%;
  }
  &::before {
    content: "";
    position: absolute;
    width: 42%;
    height: 50vh;
    transform: rotate(-8deg);
    z-index: -1;
    transition: all 3s;
    background-color: #22728b6c;
    @media (max-width: 520px) {
      width: 90%;
      height: 45vh;
      transform: rotate(-3deg);
    }
  }
  &:hover {
    width: calc(102% / 2);
    height: 50vh;
    &::before {
      transform: rotate(0deg);
    }
  }
`;
const Contendidodos = styled.div`
  width: calc(100% / 2);
  background-color: #74bacf;
  height: 50vh;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 520px) {
    width: 90%;
  }
  &::before {
    content: "";
    position: absolute;
    width: 42%;
    height: 50vh;
    transform: rotate(8deg);
    z-index: -1;
    background-color: #8b22226c;
    transition: all 3s;
    @media (max-width: 520px) {
      width: 90%;
      height: 45vh;
      transform: rotate(-3deg);
    }
  }
  &:hover {
    width: calc(102% / 2);
    height: 50vh;
    &::before {
      transform: rotate(0deg);
    }
  }
`;

const Parrafocn = styled.p`
  text-align: justify;
  padding: 0 3em;
  width: 100%;
  height: 30vh;
  overflow: hidden;
`;
const Titulocn = styled.h2`
  color: #fff;
  font-size: 30px;
`;
