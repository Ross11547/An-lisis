import React, { useState, useEffect } from "react";
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
import Registroinformacion from "../components/informacion/Registroinformacion";
import { UseFech } from "../hooks/useFech";
import { deleteInformacion, getInformacion } from "../services/informacion";
import Noimagen from "../assets/crud/Noimagen1.jpg";
import { showImagen } from "../services/noimagen";
const Informacion = () => {
  const { loading, getApi, res } = UseFech(getInformacion);
  const [actual, setActual] = useState({});
  const [data, setData] = useState([]);

  const getProducto = async () => {
    const response = await fetch(`http://localhost:5000/usuario`);
    const js = await response.json();
    setData(js)
  }
  useEffect(() => {
    getProducto();
  }, [])
  console.log(data);
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
          <h1>Usuarios</h1>
        </Divtitulo>
        <Divcrudf>
          <Registroinformacion
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
                  <Th>Apellido</Th>
                  <Th>CI</Th>
                  <Th>Celular</Th>
                  <Th>Rol</Th>
                  <Th>Usuario </Th>
                  <Th>Contraseña</Th>
                  <Th>Correo</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>
              <tbody>
                {data?.map((v, i) => (
                  <Trbody className="row" key={i}>
                    <Td>{i+1}</Td>
                    <Td>{v.nombre}</Td>
                    <Td>{showImagen(v.foto)}</Td>
                    <Td>
                      <Pcon>{v.descripcion}</Pcon>
                    </Td>
                    <Td><p>{v.mision}</p></Td>
                    <Td>{showImagen(v.foto_m)}</Td>
                    <Td><p>{v.vision}</p></Td>
                    <Td>{showImagen(v.foto_v)}</Td>
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
                          deleteInformacion(v.id, getApi);
                        }}
                      >
                        <Imgeliminar src={Eliminar} alt="" />
                      </Botonesacciones>{" "}
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

export default Informacion;
