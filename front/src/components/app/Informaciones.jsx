import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import Headercomp from "./informacioncomponents/Headercomp";
import Footer from "../footer";

import MostrarInfo from "../MostrarInfo";
import { Divloading,Divload } from "../../style/crud";
const Informaciones = () => {
  // traemos datos
  const [capsula, setCapsula] = useState([]);
  const [enviar, setEnviar] = useState({});
  const [loading, setloading] = useState(true);

  async function mostrarcapsula() {
    const response = await fetch(
      "https://informativalaravel-production.up.railway.app/api/capsula",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const respuesta = await response?.json();
    setCapsula(respuesta);
    setloading(false);
  }

  useEffect(() => {
    mostrarcapsula();
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
      <Pad>
        <Headercomp />
        <Contenidos>
          <Encerar>
            <Divpadrecap>
              {capsula.map((v, i) => (
                <Divcapsula key={i}>
                  <Img src={v.foto} alt="" />
                  <Titulocapsula>{v.titulo}</Titulocapsula>
                  <Abutton
                    onClick={() => {
                      setEnviar(v);
                    }}
                  >
                    Leer
                  </Abutton>
                </Divcapsula>
              ))}
            </Divpadrecap>
          </Encerar>
          <MostrarInfo enviard={enviar} />
        </Contenidos>

        <Footer></Footer>
      </Pad>
    </>
  );
};

export default Informaciones;

const Contenidos = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  margin: 0 auto;
  @media (max-width: 520px) {
    flex-direction: column;
  }
`;
// buscador
export const Pad = styled.div`
  background-color: #fff;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Divpadrecap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3em;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120vh;
  overflow-y: scroll;
  @media (max-width: 520px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100%;
  }
`;

const Encerar = styled.section`
  width: 70%;
  @media (max-width: 520px) {
    width: auto;
    overflow-x: scroll;
  }
`;

const Divcapsula = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  overflow: hidden;
  color: #fff;
  flex-direction: column;
  text-align: justify;
  list-style: none;
  align-items: center;
  position: relative;
  justify-content: flex-start;
  box-shadow: 0px 2px 5px #0000006a;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: #000;
  }
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background: #003cff9b;
    border-radius: 50%;
    top: -50%;
    left: -50%;
    display: none;
  }
  transition: all 0.5s ease-out;
  &:hover {
    &::after {
      display: flex;
      transition: all 0.5s ease-out;
    }
    &::before {
      opacity: 0.5;
      z-index: 2;
    }
    transform: scale(1.02);
    & button {
      z-index: 3;
      background-color: #003cff9b;
      color: #ffffff;
      font-size: 1.2em;
      bottom: -20%;
      right: -12%;
    }
    & h3 {
      z-index: 3;
      display: flex;
    }
  }
  @media (max-width: 520px) {
    width: 300px;
    height: 300px;
    margin: 0 0 0 2em;
  }
`;
export const Abutton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4em 2em;
  color: #fff;
  text-decoration: none;
  width: 60%;
  border-radius: 90% 0em 0 0;
  background-color: #333f7291;
  border: none;
  box-shadow: 0px 1px 5px #0005;
  cursor: pointer;
  position: absolute;
  bottom: -10%;
  right: -10%;
`;

const Titulocapsula = styled.h3`
  display: none;
  font-size: 1.3em;
  font-weight: 100;
  text-align: center;
  height: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding: 0.2em 0;
  z-index: 10;
`;
