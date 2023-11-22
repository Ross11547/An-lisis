import React from "react";
import styled, { keyframes } from "styled-components";
import { getInformacion } from "../../../services/informacion";
import { UseFech } from "../../../hooks/useFech";
const Contenido = () => {
  const { res: informaciones } = UseFech(getInformacion);

  return (
    <>
      {informaciones.map((v, i) => (
        <Div>
          <Divuno>
            <Texto>{v.mision}</Texto>
          </Divuno>
          <Divdos>
            <Title>Mision</Title>
            <Img src={v.foto_m} alt="img" />
          </Divdos>

          <Divpa>
            <Divtres>
              <Titleb>Vision</Titleb>
              <Imgb src={v.foto_v} alt="img" />
            </Divtres>
            <Divcuatro>
              <Textob>{v.vision}</Textob>
            </Divcuatro>
          </Divpa>
        </Div>
      ))}
    </>
  );
};

export default Contenido;

const Div = styled.section`
  width: 100%;
  height: 130vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 2em;
  overflow: hidden;
  @media (max-width: 520px) {
    flex-direction: column-reverse;
    height: 100%;
    & > div {
      display: block;
      & > h2 {
        height: auto;
        border-left: 0;
      }
      & > img {
        width: 100px;
        height: 100px;
        display: none;
        border-radius: 50%;
      }
    }
  }
`;

const Divpa = styled.div`
  display: flex;
  @media (max-width: 520px) {
    height: auto;
  }
`;
const Divuno = styled.div`
  width: 50%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: -2;
  @media (max-width: 520px) {
    display: block;
    width: 90%;
  }
`;
const animation = keyframes`
 0% {
    transform:translateX(30%);
  }
  50% {
    transform:translateX(-30%);
    border-radius:1em;
  }
  100% {
    transform:translateX(0%);
    border-radius:1.5em;

  }
`;
const animationb = keyframes`
 0% {
    transform:translateX(-30%);
  }
  50% {
    transform:translateX(30%);
    border-radius:1em;
  }
  100% {
    transform:translateX(0%);
    border-radius:1.5em;

  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
  animation: ${animation} 2s ease-in;
  border-radius: 1.5em;
  top: 0;
`;
const Imgb = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  display: none;
  animation: ${animationb} 2s ease-in;
  border-radius: 1.5em;
  top: 0;
`;
const Divdos = styled.div`
  width: 50%;
  height: 55vh;
  display: flex;
  position: relative;
  align-items: center;
  @media (max-width: 520px) {
    height: 15vh;
  }
  &:hover {
    & h2 {
      border-left: none;
      color: transparent;
      background-size: cover;
    }
    & img {
      display: flex;
      z-index: -1;
    }
  }
`;

const Title = styled.h2`
  background-color: transparent;
  width: 80vh;
  height: 10vh;
  text-align: center;
  padding: 2vh 0;
  color: #000000;
  border-left: solid 10px;
  transition: all 2s linear;
`;
const Titleb = styled.h2`
  background-color: transparent;
  width: 80vh;
  height: 10vh;
  text-align: center;
  padding: 2vh 0;
  color: #000000;
  border-left: solid 10px;
  transition: all 2s linear;
`;

const Texto = styled.div`
  background-color: #222f49;
  width: 48vh;
  height: 48vh;
  border-radius: 2em;
  color: #fff;
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  overflow: hidden;
  &::before {
    background-color: #3e239e93;
    position: absolute;
    padding: 0px;
    width: 48vh;
    height: 48vh;
    content: "";
    /* top:10vh;
    left:30vh; */
    z-index: -1;
    border-radius: 2em;
    transform: rotate(-7deg);
  }
`;

const Divtres = styled.div`
  width: 50%;
  height: 55vh;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 520px) {
    height: 15vh;
    & h2 {
      text-align: center;
    }
  }

  &:hover {
    & h2 {
      border-left: none;
      color: transparent;
      background-size: cover;
    }
    & img {
      @media (max-width: 520px) {
        display: none;
      }
      display: flex;
      z-index: -1;
    }
  }
`;
const Divcuatro = styled.div`
  width: 50%;
  height: 55vh;
  align-items: center;
  display: flex;
  justify-content: center;
  @media (max-width: 520px) {
    height: 110%;
    margin: 1em 0;
    width: 80%;
  }
`;
const Textob = styled.div`
  background-color: #222f49;
  width: 48vh;
  height: 48vh;
  border-radius: 2em;
  color: #fff;
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2em;
  overflow: hidden;
  &::before {
    background-color: #3e239e93;
    position: absolute;
    padding: 0px;
    width: 48vh;
    height: 48vh;
    content: "";
    z-index: -1;
    border-radius: 2em;
    transform: rotate(7deg);
  }
`;
