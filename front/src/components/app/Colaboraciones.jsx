import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../footer";
const Colaboraciones = () => {
  const [superior, setSuperior] = useState([]);

  async function mostrarsuperior() {
    const response = await fetch("https://informativalaravel-production.up.railway.app/api/principales", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
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
            <H3>Con la ayuda de:</H3>
          </Contenidodiv>
        </Titulodiv>
      ))}

      <Tech>
        <Parrent>
     
          <Div1>
          
            <div>
              <h2>nombre</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita dignissimos quis corrupti, quibusdam totam aperiam
                debitis quo sit iste sapiente?
              </p>
            </div>
            <div>
              <h2>nombre</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita dignissimos quis corrupti, quibusdam totam aperiam
                debitis quo sit iste sapiente?
              </p>
            </div>
            <div>
              <h2>nombre</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita dignissimos quis corrupti, quibusdam totam aperiam
                debitis quo sit iste sapiente?
              </p>
            </div>
          </Div1>
          <Div2>
            {" "}
            <Imgdats src="https://conviertemas.com/wp-content/uploads/2022/09/colaboraciones-de-Instagram-Convierte-Mas.png" />
          </Div2>
        </Parrent>
      </Tech>
      <Footer></Footer>
    </>
  );
};

export default Colaboraciones;

// inicio
export const Imginicio = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  background-size: cover;
  box-shadow: -12px -12px 24px #151616;
  clip-path: polygon(100% 0, 100% 100%, 42% 100%, 33% 50%, 42% 0);

  &::after {
    content: "";
    position: relative;
    width: 100%;
    height: 80vh;
    background-color: #2014525f;
  }
`;
export const Parrafotip = styled.p`
  width: 30%;
  color: #fff;
  height: 40px;
  text-align: left;
  margin-left: 2em;
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
  height: 80vh;
`;
export const Butontitulo = styled.button`
  z-index: 1;
  background-color: #ffffff;
  color: #2e3049;
  border: none;
  margin: 3em;
  padding: 1em 5em;
  transition: all 1s;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #2bb0b4;
    color: #000000;
  }
`;
export const H3 = styled.h2`
  margin-top: 4em;
  max-width: 30%;
  min-width: 20%;
  color: #e0e0e0;
  font-size: 2.5em;
  display: flex;
  padding: 10px;
  text-align: left;
  border-left: 10px solid #ffffff;
`;
// inicio
// body

export const Tech = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #e7e7e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Parrent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  width: 80%;
  height: 80%;

  background-color: transparent;
`;


export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  width: 100%;
  height: 100%;
  background-color: #3540a1;
  display:flex;
  flex-direction:row;
  gap:2em;
  padding:2em;
  justify-content:center;
  align-items:center  ;
  
`;
const Ht = styled.h1`
grid-column: 1 / -1;
width:100%;
color:#3a2b2b;
`;
export const Div2 = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
 
  &::before {
    content: "";
    position: absolute;
    display: block;
    width:80%;
    height:80%;
   border:solid 2px #afa2a2;
    left:1em;
    top:1em;
    z-index:1;
  }
`;

export const Imgdats = styled.img`
 z-index:2;
  width: 80%;
  height: 80%;
  background-size: cover;


`;
