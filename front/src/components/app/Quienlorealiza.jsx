import React from "react";
import styled, { keyframes } from "styled-components";

import Footer from "../footer";
import Contenido from "./quienrealiza/Contenido";
import Supcopm from "./quienrealiza/Supcopm";
const Quienlorealiza = () => {
  return (
    <Contenedorpadre>
      <Supcopm />
      <Contenido />
      <Footer></Footer>
    </Contenedorpadre>
  );
};

export default Quienlorealiza;
const Contenedorpadre = styled.div`
  width: 100%;
  height: 100%;
`;
