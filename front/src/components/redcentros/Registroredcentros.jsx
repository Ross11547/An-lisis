import React, { useState, useEffect } from "react";
import {
  Divformulario,
  Form,
  Divh1,
  Divinput,
  Label,
  Input,
  Botonagregar,
} from "../../style/crud";
import { postRed, updateRed } from "../../services/red";
import { UseFech } from "../../hooks/useFech";
import { getPortada } from "../../services/portada";

const Registroredcentros = ({ getApi, actual, setActual }) => {
  const [red, setRed] = useState("");
  const [idProducto, setIdproducto] = useState();
  const [descripcion, setDescripcion] = useState("");
  const{res}=UseFech(getPortada);
  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      setRed(actual.red);
    }
  }, [actual]);
  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divinput>
          <Label htmlFor="">Descripcion</Label>
          <Input
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <Label htmlFor="">Producto</Label>
          <select onChange={(e)=>setIdproducto(e.target.value)}>
            <option >Seleccione un producto</option>
            {
              res?.map((v, i) => (
                <option key={i} value={v.id}>{v.nombre}</option>
              ))
            }
          </select>
        </Divinput>
        <Botonagregar
          onClick={() => {
            if (Object.keys(actual).length > 0) {
              updateRed(
                {
                  id: actual.id,
                  red: red,
                },
                () => {
                  setActual({});
                  setRed("");
                  getApi();
                }
              );
            } else {
              postRed(descripcion,idProducto, () => {
                setDescripcion("");              
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

export default Registroredcentros;
