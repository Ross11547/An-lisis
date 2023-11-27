import React from "react";
import styled from "styled-components";
import {
  Divformulario,
  Form,
  Divh1,
  Divinput,
  Label,
  Input,
  Inputfile,
  Botonagregar,
} from "../../style/crud";
import { useState, useEffect } from "react";
import { getBase64 } from "../../services/converter";
import { postPrograma, updatePrograma } from "../../services/programa";
import { getPortada } from "../../services/portada";
import { UseFech } from "../../hooks/useFech";
import { getCapsulas } from "../../services/capsulas";
const Registroprogramas = ({ getApi, actual, setActual, can }) => {
  const [nombre, setNombre] = useState("");
  const [fechaini, setFechaini] = useState("");
  const [fechafin, setFechafin] = useState("");
  const [descuento, setDescuento] = useState();
  const [idsucu, setIducu] = useState();
  const [idprod, setIdprod] = useState();

  const { res: sucursales } = UseFech(getCapsulas);
  const { res: producto } = UseFech(getPortada);
  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      setNombre(actual.nombre);
      setFechaini(actual.fecha_inicio);
      setFechafin(actual.fecha_fin);
      setDescuento(actual.descuento);
    }
  }, [actual]);
  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divtotal>
          <Divtext1>
            <Divinput>
              <Label htmlFor="">Nombre</Label>
              <Input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Fecha inicio</Label>
              <Input
                type="date"
                value={fechaini}
                onChange={(e) => setFechaini(e.target.value)}
              />
            </Divinput>
          </Divtext1>
          <Divtext2>
            <Divinput>
              <Label htmlFor="">Fecha fin</Label>
              <Input
                type="date"
                value={fechafin}
                onChange={(e) => setFechafin(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Descuento</Label>
              <Input
                type="number"
                value={descuento}
                onChange={(e) => setDescuento(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Sucusal</Label>
              <select onChange={(e) => setIducu(e.target.value)}>
                <option value="">Seleccione una sucursal</option>
                {
                  sucursales?.map((v, i) => (
                    <option value={v.id_sucursal} key={i}>
                      {v.zona}
                    </option>
                  ))
                }
              </select>
            </Divinput>
            <Divinput>
              <Label htmlFor="">Producto</Label>
              <select onChange={(e) => setIdprod(e.target.value)} >
                <option value="">Seleccione una programacion</option>
                {
                  producto?.map((v, i) => (
                    <option value={v.id} key={i}>
                      {v.nombre}
                    </option>
                  ))
                }
              </select>
            </Divinput>
          </Divtext2>
        </Divtotal>
        <Botonagregar
          disabled={can > 0 && Object.keys(actual).length === 0}
          onClick={() => {
            if (Object.keys(actual).length > 0) {
              updatePrograma(
                {
                  id: actual.id,
                  nombre: nombre,
                  foto: foto,
                  contenido_a: contenido_a,
                  contenido_b: contenido_b,
                  titulo: titulo,
                  titulo_desc: titulo_desc,
                  compemento: compemento,
                },
                () => {
                  setActual({});
                  setNombre("");
                  setFoto("");
                  setContenido_a("");
                  setContenido_b("");
                  setTitulo("");
                  setTitulo_desc("");
                  setCompemento("");
                  getApi();
                }
              );
            } else {
              postPrograma(
                nombre,
                fechaini,
                fechafin,
                descuento,
                idsucu,
                idprod,
                () => {
                  setNombre("");
                  setFechaini("");
                  setFechafin("");
                  setDescuento("");
                  getApi();
                }
              );
            }
          }}
        >
          {Object.keys(actual).length > 0 ? "Editar" : "Agregar"}
        </Botonagregar>
      </Form>
    </Divformulario>
  );
};

export default Registroprogramas;

const Divtotal = styled.div`
  display: flex;
`;
const Divtext1 = styled.div`
  margin: 5px;
`;
const Divtext2 = styled.div`
  margin: 5px;
`;
const Tarearegistro1 = styled.textarea`
  height: 80px;
  width: 250px;
  outline: none;
  font-size: 17px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
`;
const Imgfile = styled.img`
  border-radius: 10px;
  height: 104px;
  width: 200px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5px;
`;
