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
} from "../style/crud";
import Editaricons from "../assets/crud/Editar.jpg";
import Eliminar from "../assets/crud/Eliminar.jpg";
import Registroredcentros from "../components/redcentros/Registroredcentros";
import { getRed } from "../services/red";
import { UseFech } from "../hooks/useFech";
import { deleteRed } from "../services/red";
import { useState,useEffect } from "react";
const Redcentros = () => {
  const { loading, getApi, res: red } = UseFech(getRed);
  const [actual, setActual] = useState({});
const [data,setData]=useState([]);
  const getProducto = async () => {
    const response = await fetch(`http://localhost:5000/blog`);
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
          <h1>Blog</h1>
        </Divtitulo>
        <Divcrudf>
          <Registroredcentros
            getApi={getApi}
            actual={actual}
            setActual={setActual}
          />
          <Divtabla>
            <Tabla className="table">
              <thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Producto</Th>
                  <Th>Descripcion</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>

              <tbody>
                {data?.map((v, i) => (
                  <Trbody className="row" key={i}>
                    <Td>{1 + i}</Td>
                    <Td>{v.productos.nombre}</Td>
                    <Td>{v.descripcion}</Td>
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
                          deleteRed(v.id, getApi);
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

export default Redcentros;
