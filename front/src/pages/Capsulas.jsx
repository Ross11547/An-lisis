import React from "react";
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
import Registrocapsulas from "../components/capsulas/Registrocapsulas";
import { UseFech } from "../hooks/useFech";
import { getCapsulas } from "../services/capsulas";
import { deleteCapsulas } from "../services/capsulas";
import { useEffect, useState } from "react";
import Noimagen from "../assets/crud/Noimagen1.jpg";
import { showImagen } from "../services/noimagen";
const Capsulas = () => {
  const { loading, getApi, res: capsula } = UseFech(getCapsulas);
  const [actual, setActual] = useState({});
  const [data,setData]=useState([]);
  const getProducto = async () => {
    const response = await fetch(`http://localhost:5000/sucursales`);
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
          <h1>Sucursales</h1>
        </Divtitulo>
        <Divcrudf>
          <Registrocapsulas
            getApi={getApi}
            actual={actual}
            setActual={setActual}
          />
          <Divtabla>
            <Tabla className="table">
              <thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Telefono</Th>
                  <Th>Calles</Th>
                  <Th>Numero</Th>
                  <Th>Zona</Th>
                  <Th>Acciones</Th>
                </Tr>
              </thead>
              <tbody>
                {data?.map((v, i) => (
                  <Trbody className="row" key={i}>
                    <Td>{1 + i}</Td>
                    <Td>{v.telefono}</Td>
                    <Td>{v.calles}</Td>
                    <Tddescripcion>
                      <Pcon>{v.numero}</Pcon>
                    </Tddescripcion>
                    <Tddescripcion>
                      <Pcon>{v.zona}</Pcon>
                    </Tddescripcion>
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
                          deleteCapsulas(v.id, getApi);
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

export default Capsulas;
