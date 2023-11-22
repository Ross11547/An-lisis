import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MostrarInfo = ({ enviard }) => {
  const [titulo, setTitulo] = useState("Escoge una capsula");
  const [image, setImage] = useState();
  const [descripcion, setDescripcion] = useState("La vida es mejor si estas informado/a");

  useEffect(() => {
    if (Object.keys(enviard).length > 0) {
      setTitulo(enviard.titulo);
      setImage(enviard.foto);
      setDescripcion(enviard.descripcion);
    }
    else{
        console.log("no hay datos josh")
    }
  }, [enviard]);

  return (
    <>
      <Sectionp>
        <Titulo>{titulo}</Titulo>
        <Cuerpo>
          <Img src={image} alt="img" />
          <Divp>{descripcion}</Divp>
        </Cuerpo>
      </Sectionp>
    </>
  );
};
export default MostrarInfo;
const Sectionp = styled.div`
  width: 35%;
  height: 110vh;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(7.5px);
-webkit-backdrop-filter: blur(7.5px);
border: 1px solid rgba(0, 0, 0, 0.18);
  position: relative;
  margin:1em;
  box-shadow:0px 3px 5px #0005;
  justify-content: flex-start;
  @media (max-width: 520px) {
    width: 90%;
  
}
`;

const Cuerpo = styled.article`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  height: 80%;
  justify-content: flex-start;
  align-items: center;
  gap: 3em;
`;
const Img = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  box-shadow: 0px 1px 5px #0005;
`;
const Divp = styled.div`
  width: 100%;
  border-radius: 50%;
  text-align: justify;
`;

const Titulo = styled.h2`
  font-size: 2em;
  font-weight: 100;
  margin: 0 1em;
  text-align:center;
  &::first-letter {
    font-size: 1.5em;
    font-weight: 100;
    color: blue;
  }
`;
