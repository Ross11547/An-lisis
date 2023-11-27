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
  const [nombres,setNombres]=useState("");
  const [apellidos,setApellidos]=useState("");
  const [CI,setCi]=useState();
  const [celular,setCelular]=useState();
  const [rol,setRol]=useState("");
  const [password,setPassword]=useState("");
  const [user,setUser]=useState("");
  const [correo,setCorreo]=useState("");
  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      setNombres(actual.nombres);
      setApellidos(actual.apellidos);
      setCi(actual.CI);
      setCelular(actual.celular);
      setRol(actual.rol);
      setUser(actual.user);
      setPassword(actual.password);
      setCorreo(actual.correo);
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
                value={nombres}
                onChange={(e)=>setNombres(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Apellidos</Label>
              <Input
                type="text"
                value={apellidos}
                onChange={(e)=>setApellidos(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Password</Label>
             <Input type="text"  value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
            </Divinput>
            <Divinput>
              <Label htmlFor="">correo</Label>
             <Input type="text"  value={correo}
                onChange={(e)=>setCorreo(e.target.value)}/>
            </Divinput>
          </Divinput1>
          <Divinput2>
            <Divinput>
              <Label htmlFor="">Ci</Label>
              <Input type="text"  value={CI}
                onChange={(e)=>setCi(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Celular</Label>
             <Input type="number"  value={celular}
                onChange={(e)=>setCelular(e.target.value)}/>
            </Divinput>
            <Divinput>
              <Label htmlFor="">Rol</Label>
             <Input type="text"  value={rol}
                onChange={(e)=>setRol(e.target.value)}/>
            </Divinput>
            <Divinput>
              <Label htmlFor="">Usuario</Label>
             <Input type="text"  value={user}
                onChange={(e)=>setUser(e.target.value)}/>
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
                  setNombres("");
                  setApellidos("");
                  setPassword("");
                  setCorreo("");
                  setCi("");
                  setCelular("");
                  setRol("");
                  setUser("");
                  getApi();
                }
              );
            } else {
              postInformacion(
                nombres, apellidos, CI, celular, rol, user, password,correo,
                () => {
                  setNombres("");
                  setApellidos("");
                  setPassword("");
                  setCorreo("");
                  setCi("");
                  setCelular("");
                  setRol("");
                  setUser("");
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
