import React from "react";
import {
  Divformulario,
  Form,
  Divh1,
  Divinput,
  Label,
  Input,
  Botonagregar,
} from "../../style/crud";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { postCapsulas, updateCapsulas } from "../../services/capsulas";
import { getBase64 } from "../../services/converter";

const Registrocapsulas = ({ getApi, actual, setActual }) => {
  const [telefono, setTelefono] = useState();
  const [calles, setCalles] = useState("");
  const [numero, setNumero] = useState();
  const [zona, setZona] = useState("");
  const [foto, setFoto] = useState("");
  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      setTelefono(actual.telefono);
      setCalles(actual.calles);
      setNumero(actual.numero);
      setZona(actual.zona);
    }
  }, [actual]);
  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divinputotal>
          <Divinputtextp>
            <Divinput>
              <Label htmlFor="">Telefono</Label>
              <Input
                type="number"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Calles</Label>
              <Input
                type="text"
                value={calles}
                onChange={(e) => setCalles(e.target.value)}
              />
            </Divinput>
          </Divinputtextp>
          <Divtextarea>
            <Divinput>
              <Label>Numero</Label>
              <Input
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              ></Input>
            </Divinput>
            <Divinput>
              <Label>Zona</Label>
              <Input
                type="text"
                value={zona}
                onChange={(e) => setZona(e.target.value)}
              ></Input>
            </Divinput>
            <Divinput>
              <Label>Foto</Label>
              <Input
                type="text"
                value={foto}
                onChange={(e) => setFoto(e.target.value)}
              ></Input>
            </Divinput>
          </Divtextarea>
        </Divinputotal>
        <Botonagregar
          onClick={() => {
            if (Object.keys(actual).length > 0) {
              updateCapsulas(
                {
                  id_sucursal: actual.id_sucursal,
                  telefono: actual.telefono,
                  calles: actual.calles,
                  numero: actual.numero,
                  zona: actual.zona,
                },
                () => {
                  setActual({});
                  setTelefono("");
                  setCalles("");
                  setNumero("");
                  setZona("");
                  setFoto("");
                  getApi();
                }
              );
            } else {
              postCapsulas(telefono, calles, numero, zona,foto, () => {
                setTelefono("");
                setCalles("");
                setNumero("");
                setZona("");
                setFoto("");
                getApi();
              });
            }
          }}
        >
          {Object.keys(actual).length > 0 ? "Editar" : "Agregar"}
        </Botonagregar>
      </Form>
    </Divformulario>
  );
};

export default Registrocapsulas;

const Divtextarea = styled.div`
  margin: 5px;
`;
const Divinputtextp = styled.div`
  margin: 5px;
`;
const Divinputotal = styled.div`
  display: flex;
`;
const Tarearegistro = styled.textarea`
  height: 50px;
  outline: none;
  font-size: 17px;
  padding: 5px;
  border: 2px solid rgba(0, 0, 0, 0.3);
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
  height: 100px;
  width: 200px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5px;
`;
