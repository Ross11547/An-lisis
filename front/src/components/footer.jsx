import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import face from "../assets/redes/facebook.png";
import twi from "../assets/redes/gorjeo.png";
import insta from "../assets/redes/instagram.png";

const Footer = () => {
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
    <>
      <Footerr>
        <Divredes>
          <a href="#">
            <img src={face} alt="Facebook" />
          </a>
          <a href="#">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="#">
            <img src={twi} alt="Twitter" />
          </a>
          <a href="#">LinkedIn</a>
        </Divredes>
        <Diva>
          {centrosdiagnostico.slice(0, 3).map((v, i) => (
            <Info key={i}>
              <Titulo>{v.sede}</Titulo>
              <Direcciones>{v.dirreccion}</Direcciones>
              <Cel>{v.telefono}</Cel>
            </Info>
          ))}
          <Navegacion>
            <li>
              <Links to="/">Inicio</Links>
            </li>
            <li>
              <Links to="/programas">Programas</Links>
            </li>
            <li>
              <Links to="/informaciones">Informaciones</Links>
            </li>
            <li>
              <Links to="/centross">Centros</Links>
            </li>
            <li>
              <Links to="/quienlorealiza">Nosotros</Links>
            </li>
            <li>
              <Links to="/colaboraciones">Colaboración</Links>
            </li>
            <li>
              <Links to="/contactanos">Contáctanos</Links>
            </li>
          </Navegacion>
          <Formulario>
            <Titulo>Contactate con nosotros</Titulo>
            <Direcciones>info@biotech.com.bo</Direcciones>
            <Ingreso placeholder="Escríbenos" />
            <Divboton>
              <Buton type="submit" value="Enviar" />
            </Divboton>
          </Formulario>
        </Diva>
      </Footerr>
    </>
  );
};

export default Footer;

const Footerr = styled.div`
  margin-top: 0 auto;
  width: 100%;
  height: 400px;
  max-height: 450px;
  background-color: #616469;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const Divredes = styled.div`
  width: 100%;
  height: 10vh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 1em;

  & > a {
    background-color: #fff;
    z-index: 2;
    color: #39725e;
    text-decoration: none;
    padding: 5px;
    border-radius: 10px;

    &:hover {
      color: #065c3e;
    }

    & > img {
      width: 20px;
      height: 20px;
    }
  }

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #ffffff87;
    z-index: 1;
  }
`;

const Diva = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

const Navegacion = styled.div`
  width: calc(100% / 3);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  list-style: none;
  overflow: hidden;
  justify-content: center;

  @media (max-width: 520px) {
    display: none;
  }

  @media (max-width: 980px) {
    display: none;
    overflow: hidden;
  }
`;

const Formulario = styled.section`
  width: calc(100% / 3);
  height: 100%;
  background-color: #b0d3c785;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-left: 2em;
`;

const Links = styled(Link)`
  padding: 0.4em 5vh;
  color: #fff;
  text-decoration: none;
  display: block;
  transition: 0.5s;

  &:hover {
    border-bottom: 0.5px solid #fff;
    transition: 0.5s;
  }

  @media (max-width: 520px) {
    display: none;
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

const Info = styled.article`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  color: #ffffff;
  padding: 0 0 0 3em;
  height: 80%;

  @media (max-width: 520px) {
    width: 100%;
    padding: 0;
    height: auto;
  }
`;

const Titulo = styled.h2`
  font-size: 0.9em;
  border-bottom: solid 3px #ffffff33;
  margin: 0.5em 0;
  padding-left: 25%;
  font-weight: 100;
  width: 100%;

  &::first-line {
    font-size: 1.5em;
    font-weight: 100;
  }
`;

const Direcciones = styled.h2`
  font-size: 0.9em;
  margin: 0 0 1em 1em;
  font-weight: 100;
  text-align: justify;
  width: 100%;
  overflow: hidden;
  max-width: 80%;
`;

const Cel = styled.h2`
  font-size: 0.9em;
  margin: 1em;
`;

const Ingreso = styled.input`
  font-size: 15px;
  border: none;
  margin: 1em;
  border-radius: 4px;
  padding: 5px;
  transition: 1.5s;
  color: #fff;
  border-bottom: 1px solid #fff;

  &:focus {
    background-color: #ffffff;
    color: #000000;
    outline: none;
  }

  @media (max-width: 520px) {
    display: none;
  }
`;

const Buton = styled.input`
  width: 100px;
  outline: none;
  border-radius: 5px;
  border: none;

  &:hover {
    background: #0e4f7ad3;
    color: #fff;
  }
`;

const Divboton = styled.div`
  display: flex;
  justify-content: center;
`;
