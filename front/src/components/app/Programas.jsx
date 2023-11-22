import React from "react";
import Footer from "../footer";
import styled from "styled-components";
import Superiorcomp from "./programacomponents/superiorcomp";
import Contenidocomp from "./programacomponents/contenidocomp";
import Complementocomp from "./programacomponents/Complementocomp";
import Loading from "../loading";
import { Divloading, Divload } from "../../style/crud";
import { UseFech } from "../../hooks/useFech";
import { getCapsulas } from "../../services/capsulas";

const Programas = () => {
  const { loading } = UseFech(getCapsulas);

  if (loading) {
    return (
      <Divloading>
        <Divload />
      </Divloading>
    )
  }
  return (
    <Pad>
      <Superiorcomp />
      <Contenidocomp />
      <Titulo1>
        Objetivo Programa Tamizaje
      </Titulo1>
      <Complementocomp></Complementocomp>
      <Footer></Footer>
    </Pad>
  );
};

export default Programas;
const Titulo1 = styled.div`
text-align:left;
margin: 2em 3em ;
border-left: solid 10px #222f49;
font-size:35px;
`;

const Pad = styled.div`
overflow:hidden;
`;