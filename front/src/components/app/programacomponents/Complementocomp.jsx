import React, { useState, useEffect } from "react";
import Loading from "../../loading";
import styled, { keyframes } from "styled-components";
import Skeleton from "react-loading-skeleton";
import { Divload, Divloading } from "../../../style/crud";

const Complementocomp = () => {
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
    console.log(loading);
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
    <Ayuda>
      {contenidos.map((v, i) => (
        <Cteneniendo key={i}>
          <Title>{v.titulo_desc || <Skeleton />}</Title>
          <Contenidoa>{v.compemento || <Skeleton />}</Contenidoa>
        </Cteneniendo>
      ))}
    </Ayuda>
  );
};

export default Complementocomp;

const Ayuda = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: start;
`;

const Cteneniendo = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222f49;
  color: #fff;
  overflow: hidden;
  @media (max-width: 520px) {
    width: 70%;
    &::before {
      top: 0;
    }
    &::after {
      display: none;
    }
  }
  @media (max-width: 720px) {
    width: 70%;
    &::after {
      display: none;
    }
  }
  &::before {
    content: "";
    width: 450px;
    height: 430px;
    background-color: #2ea6caa7;
    position: absolute;
    z-index: -1;
    left: 10em;
    border-radius: 50% 0;
    transform: translatey(-3em);
    transition: all 2s;
    @media (max-width: 720px) {
      width: 330px;
      height: 330px;
      left: 2em;
    }
    @media (max-width: 520px) {
      width: 230px;
      height: 230px;
      left: 2em;
    }
  }
  &:hover {
    &::before {
      border-radius: 50% 0;
      transform: translatey(-2em);

      box-shadow: -12px -12px 24px #3a5e67;
    }
    &::after {
      box-shadow: 5px 5px 14px #2c2b2b;
      background-color: #918d8d99;
    }
  }
  &::after {
    content: "";
    width: 7%;
    height: 25%;
    background-color: #ffffff;
    position: absolute;

    transition: all 1s;

    left: 25%;
    border-radius: 0 50% 50% 0;
  }
  border-radius: 2em;
`;
const Title = styled.h2`
  font-size: 30px;
`;
const Contenidoa = styled.h4`
  font-size: 15px;
  text-align: justify;
  padding: 1em 5rem 1em 10em;
  height: 70%;
  overflow: hidden;
  @media (max-width: 520px) {
    width: 100%;
    padding: 1em;
  }
  @media (max-width: 720px) {
    width: 100%;
    padding: 2em;
  }
`;
