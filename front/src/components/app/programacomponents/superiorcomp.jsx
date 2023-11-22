import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Divload, Divloading } from "../../../style/crud";
const Superiorcomp = () => {
  const [contenidos, setContenidos] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  }

  useEffect(() => {
    mostrarcontenidos();
  }, []);

  if (loading) {
    return (
      <Divloading>
        <Divload />
      </Divloading>
    );
  }
  return (
    <>
      {contenidos.map((v, i) => (
        <Superiror key={i}>
          <Imginicio src={v.foto} />
          <Contenidodiv>
            <H3>{v.nombre}</H3>
          </Contenidodiv>
        </Superiror>
      ))}
      
    </>
  );
};

export default Superiorcomp;

const Superiror = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  position: relative;
  @media (max-width: 720px) {
    height: 100%;
    & img {
      display: none;
    }
    & h1 {
      width: 100%;
    }
  }
`;
const Imginicio = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  clip-path: polygon(100% 0, 100% 100%, 42% 100%, 33% 50%, 24% 0);
`;

const Contenidodiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 3rem;
  text-align: center;
  background-color: #222f49;
`;

const H3 = styled.h1`
  margin-top: 4em;
  width: 30%;
  font-family: "Poppins", sans-serif;
  color: #e0e0e0;
  font-size: 2em;
  display: flex;
  padding: 10px;
  text-align: left;
  border-left: 10px solid #ffffff;
`;
