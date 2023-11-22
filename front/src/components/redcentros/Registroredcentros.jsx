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

const Registroredcentros = ({ getApi, actual, setActual }) => {
  const [red, setRed] = useState("");
  const [idProducto, setIdproducto] = useState();
  const [descripcion, setDescripcion] = useState("");
  const [data, setData] = useState([]);
  const getProducto = async () => {
    const response = await fetch(`http://localhost:5000/productos`);
    const js = await response.json();
    setData(js.data)
  }
  useEffect(() => {
    getProducto();
  }, [])
  console.log(data);
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
          <select name="" id="">
            <option value="">Seleccione un producto</option>
            {
              data.map((v, i) => (
                <option key={i}>{v.nombre}</option>
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
              postRed(red, () => {
                setRed("");
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
