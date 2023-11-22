import React from "react";
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
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getBase64 } from "../../services/converter";
import { postInformacion, updateInformacion } from "../../services/informacion";
const Registroinformacion = ({ getApi, actual, setActual, cant }) => {
  const [titulo, setTitulo] = useState("");
  const [foto, setFoto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mision, setMision] = useState("");
  const [fotomision, setFotomision] = useState("");
  const [vision, setVision] = useState("");
  const [fotovision, setFotovision] = useState("");
  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      setTitulo(actual.nombre);
      setFoto(actual.foto);
      setMision(actual.mision);
      setFotomision(actual.foto_m);
      setDescripcion(actual.descripcion);
      setVision(actual.vision);
      setFotovision(actual.foto_v);
    }
  }, [actual]);

  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divtotal>
          <Divinput1>
            <Divinput>
              <Label htmlFor="">Nombre</Label>
              <Input
                type="text"
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Apellidos</Label>
              <Input
                type="text"
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Password</Label>
             <Input type="text"/>
            </Divinput>
            <Divinput>
              <Label htmlFor="">correo</Label>
             <Input type="string"/>
            </Divinput>
          </Divinput1>
          <Divinput2>
            <Divinput>
              <Label htmlFor="">Ci</Label>
              <Input type="text"
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Celular</Label>
             <Input type="number"/>
            </Divinput>
            <Divinput>
              <Label htmlFor="">Celular</Label>
             <Input type="number"/>
            </Divinput>
            <Divinput>
              <Label htmlFor="">Usuario</Label>
             <Input type="text"/>
            </Divinput>
            
          </Divinput2>
          
        </Divtotal>
        <Botonagregar
          disabled={cant > 1 && Object.keys(actual).length === 0}
          onClick={() => {
            if (Object.keys(actual).length > 0) {
              updateInformacion(
                {
                  id: actual.id,
                  nombre: titulo,
                  foto: foto,
                  descripcion: descripcion,
                  mision: mision,
                  foto_m: fotomision,
                  vision: vision,
                  foto_v: fotovision,
                },
                () => {
                  setActual({});
                  setTitulo("");
                  setFoto("");
                  setMision("");
                  setFotomision("");
                  setDescripcion("");
                  setVision("");
                  setFotovision("");
                  getApi();
                }
              );
            } else {
              postInformacion(
                titulo,
                foto,
                mision,
                fotomision,
                descripcion,
                vision,
                fotovision,
                () => {
                  setTitulo("");
                  setFoto("");
                  setMision("");
                  setFotomision("");
                  setDescripcion("");
                  setVision("");
                  setFotovision("");
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

export default Registroinformacion;
const Imgfile = styled.img`
  border-radius: 10px;
  height: 100px;
  width: 200px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5px;
`;
const Divtotal = styled.div`
  display: flex;
`;
const Divinput1 = styled.div`
  margin: 5px;
`;
const Divinput2 = styled.div`
  margin: 5px;
`;
const Textarea5 = styled.textarea`
  height: 186px;
  outline: none;
  background: rgba(0, 0, 0, 0.1);
  border: none;
`;
