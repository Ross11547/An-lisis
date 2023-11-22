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
  Textarea,
  Botonagregar,
  Textarea1,
  
} from "../../style/crud";
import { useState, useEffect } from "react";
import { getRed } from "../../services/red";
import { UseFech } from "../../hooks/useFech";
import {
  postDetallecentro,
  updateDetallecentro,
} from "../../services/detallecentro";
const Registrodetallecentro = ({ getApi, actual, setActual }) => {
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [horario_atencion, setHorario_atencion] = useState(0);
  const [mapa, setMapa] = useState("");
  const [red, setRed] = useState(1);
  const { loading, res } = UseFech(getRed);
  //var loadingredes = res ? false : true;
  console.log(loading);
  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      setNombre(actual.nombre);
      setDireccion(actual.direccion);
      setTelefono(actual.telefono);
      setHorario_atencion(actual.horario_atencion);
      setMapa(actual.mapa);
      setRed(actual.idred);
    }
  }, [actual]);

  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divinput>
          <Label htmlFor="">Nombre centro</Label>
          <Input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <Label htmlFor="">Direccion</Label>
          <Input
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <Label htmlFor="">Telefono</Label>
          <Input
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <Label htmlFor="">Horario de atencion</Label>
          <Input
            type="time"
            value={horario_atencion}
            onChange={(e) => setHorario_atencion(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <Label htmlFor="">Mapa</Label>
          <Inputmapa
            type="text"
            value={mapa}
            onChange={(e) => setMapa(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <Label htmlFor="">Detalle red</Label>
          <Select name="select" onChange={(e) => setRed(e.target.value)}>
            {res.map((v, i) => (
              <option key={i} value={v.id}>
                {v.red}
              </option>
            ))}
          </Select>
        </Divinput>
        <Botonagregar
          onClick={() => {
            if (Object.keys(actual).length > 0) {
              updateDetallecentro(
                {
                  id: actual.id,
                  nombre: nombre,
                  direccion: direccion,
                  telefono: telefono,
                  horario_atencion: horario_atencion,
                  mapa: mapa,
                  id_redcentros: red,
                },
                () => {
                  setActual({});
                  setNombre("");
                  setDireccion("");
                  setTelefono("");
                  setHorario_atencion("");
                  setMapa("");
                  getApi();
                }
              );
            } else {
              postDetallecentro(
                nombre,
                direccion,
                telefono,
                horario_atencion,
                mapa,
                red,

                () => {
                  setNombre("");
                  setDireccion("");
                  setTelefono("");
                  setHorario_atencion("");
                  setRed("");
                  setMapa("");
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

export default Registrodetallecentro;
const Inputmapa = styled.input`
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  outline: none;
  height: 25px;
  padding: 5px;
  font-size: 16px;
  width: 280px;
`;
const Select = styled.select`
  outline: none;
  font-size: 16px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;
