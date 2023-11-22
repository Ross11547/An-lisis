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
import { postCentros, updateCentros } from "../../services/centros";
import { getBase64 } from "../../services/converter";
const Registrocentros = ({ getApi, actual, setActual }) => {
  const [centrodi, setCentrodi] = useState("");
  const [sede, setSede] = useState("");
  const [centro, setCentro] = useState("");
  const [foto, setFoto] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [dirreccion, setDirreccion] = useState("");

  const llenarimagen = (e) => {
    getBase64(e.target.files[0], (resultado) => {
      setFoto(resultado);
    });
  };
  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      {
        setCentrodi(actual.centro_diagnostico);
        setSede(actual.sede);
        setCentro(actual.centro);
        setFoto(actual.foto);
        setTelefono(actual.telefono);
        setDirreccion(actual.dirreccion);
      }
    }
  }, [actual]);
  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divformall>
          <Divinputext>
            <Divinput>
              <Label htmlFor="">Centro diagnostico</Label>
              <Input
                type="text"
                value={centrodi}
                onChange={(e) => setCentrodi(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Sede</Label>
              <Input
                type="text"
                value={sede}
                onChange={(e) => setSede(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Centro</Label>
              <Input
                type="text"
                value={centro}
                onChange={(e) => setCentro(e.target.value)}
              />
            </Divinput>
            <Divinput>
              <Label htmlFor="">Telefono</Label>
              <Input
                type="Number"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </Divinput>
          </Divinputext>
          <Divimg>
            <Divinput>
              <Label>Foto</Label>
              <Inputfile type="file" onChange={llenarimagen} />
              <Imgfile src={foto} alt="" />
            </Divinput>

            <Divinput>
              <Label htmlFor="">Direccion</Label>
              <Input
                type="text"
                value={dirreccion}
                onChange={(e) => setDirreccion(e.target.value)}
              />
            </Divinput>
          </Divimg>
        </Divformall>

        <Botonagregar
          onClick={() => {
            if (Object.keys(actual).length > 0) {
              updateCentros(
                {
                  id: actual.id,
                  centro_diagnostico: centrodi,
                  sede: sede,
                  foto:foto,
                  centro: centro,
                  telefono: telefono,
                  dirreccion: dirreccion,
                },
                () => {
                  setCentrodi("");
                  setSede("");
                  setCentro("");
                  setFoto("");
                  setTelefono("");
                  setDirreccion("");
                  getApi();
                }
              );
            } else {
              postCentros(
                centrodi,
                sede,
                centro,
                telefono,
                foto,
                dirreccion,
                () => {
                  setActual({});
                  setCentrodi("");
                  setSede("");
                  setCentro("");
                  setFoto("");
                  setTelefono("");
                  setDirreccion("");
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

export default Registrocentros;
const Divformall = styled.div`
  display: flex;
`;
const Divinputext = styled.div`
  margin: 5px;
  width: 250px;
`;
const Divimg = styled.div`
  margin: 5px;
  width: 250px;
`;
const Imgfile = styled.img`
  border-radius: 10px;
  height: 100px;
  width: 200px;
  background: rgba(0, 0, 0, 0.2);
  margin: 5px;
`;
