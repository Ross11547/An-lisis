import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Divload, Divloading } from "../../../style/crud";
const Nosotroscopm = () => {
  const [Anosotros, setAnosotros] = useState([]);
  const [loading, setLoading] = useState(true);
  async function mostrarnosotros() {
    const response = await fetch(
      "https://informativalaravel-production.up.railway.app/api/informacion",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const respuesta = await response?.json();
    setAnosotros(respuesta);
    setLoading(false);
  }

  useEffect(() => {
    mostrarnosotros();
  }, []);
  if (loading) {
    return (
      <Divloading>
        <Divload />
      </Divloading>
    );
  }

  return (
    <Nosotrosdiv>
      <Supdiv>
        <Titulo>Sobre Nosotros</Titulo>
      </Supdiv>
      {Anosotros.map((v, i) => (
        <Infediv key={i}>
          <Divimg>
            <Imginfe src={v.foto_m} />
          </Divimg>
          <Divbiotech>
            <H3>{v.nombre}</H3>
            <Parrafo>{v.descripcion}</Parrafo>
            <Button>Leer mas </Button>
          </Divbiotech>
        </Infediv>
      ))}
    </Nosotrosdiv>
  );
};

export default Nosotroscopm;
const Nosotrosdiv = styled.div`
  margin: 0 auto;
  height: 80vh;
  position: relative;
  gap: 1em;
  z-index: 1;
  padding: 1em;
  &::after {
    content: "";
    position: absolute;
    width: 51%;
    height: 62%;
    background-color: #f7c9b5;
    left: -5%;
    bottom: 11%;
    z-index: -1;
    border-radius: 0 5em 5em 0;
  }

  @media (max-width: 768px) {
    & h2 {
      width: 100%;
      font-size: 1.5em;
    }
    & img {
      display: none;
    }
  }
  @media (max-width: 420px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & section {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
      width: 80%;
      height: 450px;
    }
    & h2 {
      width: 100%;
      font-size: 1em;
    }
    & img {
      width: 150px;
      height: 150px;
    }
  }
`;

const H3 = styled.h3`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 2em;
  color: #222352;
`;
const Divimg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Supdiv = styled.div`
  width: 45%;
  text-align: justify;
`;

const Titulo = styled.h2`
  border-left: 10px solid #46628d;
  font-size: 2em;
  letter-spacing: 1px;
  color: #7793bd;
  transition: all 1s;
  display: flex;
  align-items: flex-start;
  width: 70%;
  margin: 0 auto;
  &:hover {
    scale: (0.9);
    border-left: 20px solid #39725e;
  }
`;

const Parrafo = styled.p`
  margin: 2rem;
  text-align: justify;
  line-height: 1.6;
  color: #46628d;
  max-height: 400px;
  overflow: hidden;
`;

const Divbiotech = styled.section`
  padding: 2.2rem;
  display: flex;
  width: 600px;
  height: 380px;
  flex-direction: column;
  align-items: stretch;
  background-color: #c1d7db;
  position: relative;
`;

const animation = keyframes`
  0% {
    transform:translateX(-25em);
    left:0;
   
  }
  50% {
    transform:rotate(180deg);
  }
  100% {
    transform:translateX(0);
    transform:rotate(360deg);
  }
`;
const Imginfe = styled.img`
  display: flex;
  flex-direction: row;
  width: 400px;
  height: 400px;
  border-radius: 3em 0 0 3em;
  size: cover;
  border-radius: 50%;
  animation: ${animation} 2s ease-in-out;
  position: relative;
  top: 0;
`;
const Infediv = styled.section`
  display: flex;
  gap: 2em;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 30%;
  margin: 0.5em 0;
  padding: 0.5em;
  border: solid 1px #fff;
  background-color: #405d89;
  position: absolute;
  right: 1.5em;
  bottom: 1em;
  color: #fff;
  transition: all 1.5s;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    color: #405d89;
  }
`;
