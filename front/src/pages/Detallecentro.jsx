import React from "react";
import {
  Containerdiv,
  Container,
  Tabla,
  Td,
  Botonesacciones,
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
import {
  deleteDetallecentro,
  getDetallecentro,
} from "../services/detallecentro";
import { UseFech } from "../hooks/useFech";
import { useState } from "react";
import Registrodetallecentro from "../components/detallecentro/Registrodetallecentro";
const Detallecentro = () => {
  const { loading, getApi, res: detallecentro } = UseFech(getDetallecentro);
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
          <h1>Detalle centro</h1>
        </Divtitulo>
        <Divcrudf>
          <Registrodetallecentro
            getApi={getApi}
            actual={actual}
            setActual={setActual}
          />
          <Divtabla>
            <Tabla className="table">
              <thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Nombre</Th>
                  <Th>Direccion</Th>
                  <Th>Telefono</Th>
                  <Th>Horario atencion</Th>
                  <Th>Mapa</Th>
                  <Td>red centros</Td>
                  <Th>Acciones</Th>
                </Tr>
              </thead>
              <tbody>
                {detallecentro?.map((v, i) => (
                  <Trbody className="row" key={i}>
                    <Td>{1 + i}</Td>
                    <Td>{v.nombre}</Td>
                    <Td><Pcon>{v.direccion}</Pcon></Td>
                    <Td>{v.telefono}</Td>
                    <Td>{v.horario_atencion}</Td>
                    <Td><p>{v.mapa}</p></Td>
                    <Td>{v.red}</Td>

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
                          deleteDetallecentro(v.id, getApi);
                        }}
                      >
                        <Imgeliminar src={Eliminar} alt="" />
                      </Botonesacciones>
                    </Td>
                  </Trbody>
                ))}
              </tbody>
            </Tabla>
          </Divtabla>
        </Divcrudf>
      </Containerdiv>
    </Container>
  );
};

export default Detallecentro;
