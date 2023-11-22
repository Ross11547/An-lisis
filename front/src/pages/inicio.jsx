import React from "react";
import styled from "styled-components";
import Secion1 from "./seccions/secion1";
import Capsulascopm from "./iniciocomponents/Capsulascopm"
import Nosotroscopm from "./iniciocomponents/Nosotroscopm"
import Programcopm from "./iniciocomponents/Programcopm"
import Superior from "./iniciocomponents/Superior"
import Footer from "../footer";
const Inicio = ()=>{
  return (
    <Divpadre>
      <Superior></Superior>
      <Programcopm></Programcopm>
      <Nosotroscopm></Nosotroscopm>
     <Capsulascopm></Capsulascopm>
     <Footer></Footer>
    </Divpadre>
  );
}

export default Inicio;

const Divpadre = styled.div``;