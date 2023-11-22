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
} from "../../style/crud";
import { useState, useEffect } from "react";
import { update } from "../../services/portada";
import { postPortada } from "../../services/portada";
import { getBase64 } from "../../services/converter";
const Registroportada = ({ getApi, actual, setActual, can }) => {
  const [nombre, setNombre] = useState("");
  const [foto, setFoto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [peso_neto, setPeso_neto] = useState(0);
  const [descuento, setDescuento] = useState(0);


  const llenarImagen = (e) => {
    getBase64(e.target.files[0], (resultado) => {
      setFoto(resultado);
    });
  };

  useEffect(() => {
    if (Object.keys(actual).length > 0) {
      setNombre(actual.nombre);
      setDescripcion(actual.descripcion);
      setFoto(actual.foto);
      setCantidad(actual.cantidad);
      setPrecio(actual.precio);
      setPeso_neto(actual.peso_neto);
      setDescuento(actual.descuento);
    }
  }, [actual]);
  return (
    <Divformulario>
      <Form>
        <Divh1>
          <h1>Registro</h1>
        </Divh1>
        <Divinput>
          <Label htmlFor="">Nombre</Label>
          <Input
            type="text"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <Label htmlFor="">Descripcion</Label>
          <Textareaportada
            type="text"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Divinput>
        <Divinput>
          <Label>Foto</Label>
          <Inputfile type="file" onChange={llenarImagen} />
          <Imgfile src={foto} alt="" />
        </Divinput>
        <Divinput>
          <Label htmlFor="">Precio</Label>
          <Input
            type="number"
            name="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </Divinput> <Divinput>
          <Label htmlFor="">Cantidad</Label>
          <Input
            type="number"
            name="cantidad"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </Divinput> <Divinput>
          <Label htmlFor="">Peso neto</Label>
          <Input
            type="number"
            name="pero neto"
            value={peso_neto}
            onChange={(e) => setPeso_neto(e.target.value)}
          />
        </Divinput> <Divinput>
          <Label htmlFor="">Descuento</Label>
          <Input
            type="number"
            name="descuento"
            value={descuento}
            onChange={(e) => setDescuento(e.target.value)}
          />
        </Divinput>
        <Botonagregar
          onClick={() => {
            if (Object.keys(actual).length > 0) {
              update(
                {
                  id: actual.id,
                  nombre: nombre,
                  foto: foto,
                  descripcion: descripcion,
                },
                () => {
                  setActual({});
                  setNombre("");
                  setFoto("");
                  setDescripcion("");
                  getApi();
                }
              );
            } else {
              postPortada(nombre,foto,descripcion,cantidad,precio,peso_neto,descuento,() => {
                setNombre("");
                setFoto("");
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

export default Registroportada;
const Textareaportada = styled.textarea`
  width: 300px;
  height: 100px;
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
