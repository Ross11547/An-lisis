import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Diagnosticocomp = () => {
  const [centrosdiagnostico, setCentrosdiagnostico] = useState([]);

  async function mostrardiagnostico() {
    const response = await fetch("https://informativalaravel-production.up.railway.app/api/centros", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    const respuesta = await response?.json();
    setCentrosdiagnostico(respuesta);
  }

  useEffect(() => {
    mostrardiagnostico();
  }, []);

  return (
    <Diagnostico>
      {centrosdiagnostico.slice(0, 3).map((v, i) => (
        <Car key={i}>
          <Img src={v.foto} alt="img" />
          <Descripcion>
            <Sede>{v.sede}</Sede>
            <Telefono>{v.telefono}</Telefono>
            <Direccion>{v.direccion}</Direccion>
            <Button>Maps</Button>
          </Descripcion>
        </Car>
      ))}
    </Diagnostico>
  );
};

export default Diagnosticocomp;

const Diagnostico = styled.section`
  width: 100%;
  height: 65vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 120%;
  gap: 2em;

  @media (max-width: 520px) {
    height: 150%;
    font-size: 1.4em;
  }
`;

const Car = styled.div`
  background-color: #f2f5f9;
  width: 50vh;
  height: 40vh;
  position: relative;
  transition: all 2s;
  border-radius: 20px;

  &:hover {
    img {
      margin-top: -15vh;
    }
  }

  @media (max-width: 520px) {
    width: 100%;
    height: 100%;
    margin: 1em 0;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  transition: all 2s;
  border-radius: 20px;
  background-size: cover;
`;

const Descripcion = styled.div`
  position: absolute;
  background-color: #eef2f7;
  width: 50vh;
  height: 40vh;
  transition: all 400ms cubic-bezier(0.5, 0, 0, 1);
  border-radius: 20px;
  display: flex;
  padding: 2em;
  align-items: stretch;
  text-align: center;
  justify-content: flex-end;
  flex-direction: column;
  color: #333333;

  &:hover {
    margin-top: 10vh;
  }

  @media (max-width: 520px) {
    width: 100%;
    height: 100%;
    padding: 1em;
    margin: 0.5em 0;
  }
`;

const Button = styled.button`
  display: block;
  padding: 1em;
  border: none;
  cursor: pointer;
  background-color: #b5c7d3;
  color: #333333;
  transition: background-color 1s, color 2s;
  border-radius: 5px;

  &:hover {
    background-color: #333333;
    color: #b5c7d3;
  }

  @media (max-width: 520px) {
    padding: 0.5em;
  }
`;

const Sede = styled.h2`
  font-size: 1em;
`;

const Telefono = styled.h3`
  font-size: 0.8em;
`;

const Direccion = styled.p`
  font-size: 0.8em;
`;
