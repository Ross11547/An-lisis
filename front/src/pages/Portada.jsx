import React, { useEffect, useState } from "react";
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
  Tddescripcion,
  Divloading,
  Divload,
  Pcon,
} from "../style/crud";
import Editaricons from "../assets/crud/Editar.jpg";
import Eliminar from "../assets/crud/Eliminar.jpg";
import Registroportada from "../components/portada/Registroportada";
import { getPortada } from "../services/portada";
import { UseFech } from "../hooks/useFech";
import { deletePortada } from "../services/portada";
import { showImagen } from "../services/noimagen";
const Portada = () => {
  const { loading, getApi, res: portad } = UseFech(getPortada);
  const [data, setData] = useState([]);
  const [actual, setActual] = useState({});

  const getProducto = async () => {
    const response = await fetch(`http://localhost:5000/productos`);
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
          <h1>Productos</h1>
        </Divtitulo>
        <Divcrudf>
          <Registroportada
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
                  <Th>Foto</Th>
                  <Th>Descripcion</Th>
                  <Th>Precio</Th>
                  <Th>Peso_neto</Th>
                  <Th>Descuento</Th>
                  <Th>Precio</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>
              <tbody>
                {data?.map((v, i) => (
                  <Trbody className="row" key={i}>
                    <Td>{1 + i}</Td>
                    <Tddescripcion>{v.nombre}</Tddescripcion>
                    <Td>{showImagen(v.foto)}</Td>
                    <Tddescripcion>
                      <Pcon>{v.descripcion}</Pcon>
                    </Tddescripcion>
                    <Tddescripcion>
                      <Pcon>{v.precio} Bs</Pcon>
                    </Tddescripcion>
                    <Tddescripcion>
                      <Pcon>{v.peso_neto} gr</Pcon>
                    </Tddescripcion>
                    <Tddescripcion>
                      <Pcon>{v.descuento} Bs</Pcon>
                    </Tddescripcion>
                    <Tddescripcion>
                      <Pcon>{v.cantidad}</Pcon>
                    </Tddescripcion>
                    <Td>
                      <Botonesacciones onClick={() => setActual(v)}>
                        <Imgeditar src={Editaricons} alt="" />
                      </Botonesacciones>
                      <Botonesacciones
                        onClick={() => deletePortada(v.id_producto, getApi)}
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

export default Portada;
