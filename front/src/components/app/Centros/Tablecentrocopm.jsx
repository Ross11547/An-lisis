import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Tablecentrocopm = () => {
  const [tablacentros, setTablacentros] = useState([]);
  const [loading, setLoading] = useState(true);

  async function mostrartablacentros() {
    const response = await fetch(
      "https://informativalaravel-production.up.railway.app/api/detallecentros",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const respuesta = await response?.json();
    setTablacentros(respuesta);
  }

  useEffect(() => {
    mostrartablacentros();
  }, []);

  const [redescetros, setRedescetros] = useState([]);

  async function mostrarredescentro() {
    const response = await fetch(
      "https://informativalaravel-production.up.railway.app/api/red",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const respuesta = await response?.json();
    setRedescetros(respuesta);
    setLoading(false);
  }

  useEffect(() => {
    mostrarredescentro();
  }, []);

  if (loading) {
    return (
      <Divloading>
        <Divload />
      </Divloading>
    );
  }

  return (
    <>
      {redescetros.map((v, i) => (
        <Section key={i}>
          <Title>{v.red}</Title>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Nombre</TableHeader>
                <TableHeader>Dirección</TableHeader>
                <TableHeader>Teléfono</TableHeader>
                <TableHeader>Horario de atención</TableHeader>
                <TableHeader>Mapa</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {tablacentros
                .filter((centro) => centro.red.includes(v.red))
                .map((centro, index) => (
                  <TableRow key={index}>
                    <TableData>{centro.nombre}</TableData>
                    <TableData>{centro.direccion}</TableData>
                    <TableData>{centro.telefono}</TableData>
                    <TableData>{centro.horario_atencion}</TableData>
                    <TableData>
                      <Link href={centro.mapa}>Mapa</Link>
                    </TableData>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Section>
      ))}
    </>
  );
};

export default Tablecentrocopm;

const Section = styled.section`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  border-left: 0.5em solid #b2b2b2;
  margin: 2rem 0 0 2rem;
`;

const Table = styled.table`
  width: 85%;
  border-collapse: collapse;
  margin: 2rem 0;
  font-size: 0.9rem;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (max-width: 520px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

const TableHead = styled.thead`
  background-color: #e5e5f7;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2fd;
  }

  &:hover {
    background-color: #e9e9f2;
  }
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  color: #555555;
`;

const TableBody = styled.tbody`
  background-color: #ffffff;
  color: #333333;
`;

const TableData = styled.td`
  padding: 1rem;
`;

const Link = styled.a`
  color: #0037ff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #0037ff;
    text-decoration: underline;
  }
`;

const Divloading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Divload = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #0037ff;
    border-color: #0037ff transparent #0037ff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
