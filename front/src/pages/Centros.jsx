import React, { useState } from "react";
import {
  Containerdiv,
  Container,
  Tabla,
  Td,
  Botonesacciones,
  Img,
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
} from "../style/crud";
import Editaricons from "../assets/crud/Editar.jpg";
import Eliminar from "../assets/crud/Eliminar.jpg";
import Registrocentros from "../components/centros/Registrocentros";
import { getCentros } from "../services/centros";
import { UseFech } from "../hooks/useFech";
import { deleteCentros } from "../services/centros";
import { showImagen } from "../services/noimagen";
const Centros = () => {
  const { loading, getApi, res: centro } = UseFech(getCentros);
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
          <h1>Centros</h1>
        </Divtitulo>
        <Divcrudf>
          <Registrocentros
            getApi={getApi}
            actual={actual}
            setActual={setActual}
          />
          <Divtabla>
            <Tabla className="table">
              <thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Centro diagnostico </Th>
                  <Th>Sede</Th>
                  <Th>centro</Th>
                  <Th>Foto</Th>
                  <Th>Telefono</Th>
                  <Th>Direccion</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>

              {centro?.map((v, i) => (
                <Trbody className="row" key={i}>
                  <Td>{1 + i}</Td>
                  <Td>{v.centro_diagnostico}</Td>
                  <Td>{v.sede}</Td>
                  <Td>{v.centro}</Td>
                  <Td>{showImagen(v.foto)}</Td>
                  <Td>{v.telefono}</Td>
                  <Td>{v.dirreccion}</Td>
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
                        deleteCentros(v.id, getApi);
                      }}
                    >
                      <Imgeliminar src={Eliminar} alt="" />
                    </Botonesacciones>
                  </Td>
                </Trbody>
              ))}
            </Tabla>
          </Divtabla>
        </Divcrudf>
      </Containerdiv>
    </Container>
  );
};

export default Centros;
