import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

const Superior = () => {
  const [superior, setSuperior] = useState([]);

  async function mostrarsuperior() {
    const response = await fetch(
      "https://informativalaravel-production.up.railway.app/api/principales",
      
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const respuesta = await response?.json();
    setSuperior(respuesta);
  }

  useEffect(() => {
    mostrarsuperior();
  }, []);

  return (
    <>
      {superior.map((v, i) => (
        <Titulodiv key={i}>
          <Imginicio src={v.foto} />
          <Contenidodiv>
            <H3>
              <Typewriter
                options={{
                  strings: [v.titulo, "Informate!!!"],
                  autoStart: true,
                  loop: true,
                }}
                className="typewriter"
              />
            </H3>
            <Parrafotip>{v.descripcion}</Parrafotip>
            <Butontitulo>
              {" "}
              <Links to="/informaciones">Informaciones</Links>
            </Butontitulo>
          </Contenidodiv>
        </Titulodiv>
      ))}
    </>
  );
};

export default Superior;

export const Links = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 100%;
`;
export const Imginicio = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  background-size: cover;
  clip-path: polygon(100% 0, 100% 100%, 42% 100%, 33% 50%, 42% 0);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  filter: opacity(80%);
  &::after {
    content: "";
    position: relative;
    width: 100%;
    height: 80vh;
    background-color: #ffffff;
  }
`;
export const Parrafotip = styled.p`
  width: 30%;
  color: #fff;
  height: 40px;
  text-align: left;
  margin-left: 2em;
  @media (max-width: 768px) {
    width: 20%;
    font-size: 1em;
  }
  @media (max-width: 420px) {
    width: 100%;
    margin: 5em 0 0 0;
  }
`;
export const Contenidodiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 3rem;
  text-align: center;
  background-color: #092255e6;
`;
export const Titulodiv = styled.div`
  position: relative;
  width: 100%;
  height: 79.9vh;
  @media (max-width: 980px) {
    height: 65vh;
    & img {
      height: 65vh;
    }
    & button {
      margin: 1em;
      padding: 0.5em 1em;
    }
    & h1 {
      font-size: 1.5em;
    }
  }

  @media (max-width: 720px) {
    height: 50vh;
    & img {
      height: 50vh;
    }
    & h1 {
      width: 100%;
      margin-top: 4em;
      font-size: 1em;
    }
    & button {
      margin: 0em 1em;
      padding: 0.5em 1em;
    }
  }
  @media (max-width: 520px) {
    height: 50vh;
    & img {
      display: none;
    }
    & button {
      margin: 0.6em;
      padding: 0.3em 0.8em;
    }
  }
`;
export const Butontitulo = styled.button`
  z-index: 1;
  background-color: #ffffff;
  color: #0d0d0d;
  border: none;
  border-bottom: solid 1px #ffffff;
  margin: 3em;
  padding: 1em 2em;
  transition: all 1s;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;
export const H3 = styled.h1`
  margin-top: 4em;
  width: 30%;
  color: #e0e0e0;
  font-size: 2.5em;
  display: flex;
  padding: 10px;
  text-align: left;
  border-left: 10px solid #f8f8f8;
  @media (max-width: 520px) {
    width: 100%;
    font-size: 1.4em;
  }
`;
