import React, { useState,useEffect } from "react";

import {
  Containerdiv,
  Container,
  Tabla,
  Td,
  Botonesacciones,
  Img,
} from "../style/crud";
import {
  Divtitulo,
  Divcrudf,
  Divtabla,
  Tr,
  Th,
  Trbody,
  Imgeditar,
  Imgeliminar,
  Divloading,
  Divload,
  Pcon,
} from "../style/crud";
import Editaricons from "../assets/crud/Editar.jpg";
import Eliminar from "../assets/crud/Eliminar.jpg";
import Registroprogramas from "../components/programas/Registroprogramas";
import { UseFech } from "../hooks/useFech";
import { getPrograma } from "../services/programa";
import styled from "styled-components";
import { deletePrograma } from "../services/programa";
import { showImagen } from "../services/noimagen";
const Programa = () => {
  const { loading, getApi, res: promociones } = UseFech(getPrograma);
  console.log(promociones);
   const [actual, setActual] = useState({});
  if (loading) {
    return (
      <Divloading>
        <Divload />
      </Divloading>
    );
  }
  return (
    <Container>
      <Containerdiv>
        <Divtitulo>
          <h1>Promociones</h1>
        </Divtitulo>
        <Divcrudf>
          <Registroprogramas
            getApi={getApi}
            actual={actual}
            setActual={setActual}
          />
          <Divtabla1>
            <Tabla className="table">
              <thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Nombre</Th>
                  <Th>Fecha inicio </Th>
                  <Th>Fecha final </Th>
                  <Th>Descuento</Th>
                  <Th>Sucursal</Th>
                  <Th>Producto</Th>
                  <Th>Acciones</Th>
               
                </Tr>
              </thead>

              <tbody>
                {promociones?.map((v, i) => (
                  <Trbody className="row" key={i}>
                    <Td>{i+1}</Td>
                    <Td>Roxaa</Td>
                    <Td>13-11-2023</Td>
                    <Td>
                      13-12-2023
                    </Td>
                    <Td>10bs</Td>
                    <Td>
                      <Pcon>sacaba</Pcon>
                    </Td>
                    <Td>chocolate dulce</Td>
                 
                    <Td>
                      <Botonesacciones
                        onClick={() => {
                          setActual(v);
                        }}
                      >
                        <Imgeditar src={Editaricons} alt="" />
                      </Botonesacciones>
                      <Botonesacciones
                        onClick={() => {
                          deletePrograma(v.id_promociones, getApi);
                        }}
                      >
                        <Imgeliminar src={Eliminar} alt="" />
                      </Botonesacciones>
                    </Td>
                  </Trbody>
                ))}
              </tbody>
            </Tabla>
          </Divtabla1>
        </Divcrudf>
      </Containerdiv>
    </Container>
  );
};

export default Programa;

const Divtabla1 = styled.div`
  display: flex;
  width: 50%;
  margin-right: 20px;
  overflow-x: scroll;
  max-height: 40%;
`;
