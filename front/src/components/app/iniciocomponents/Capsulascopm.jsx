import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Divload, Divloading } from "../../../style/crud";

const Capsulascopm = () => {
  const [capsula, setCapsula] = useState([]);
  const [loading, setLoading] = useState(true);

  async function mostrarcapsula() {
    const response = await fetch(
      "https://informativalaravel-production.up.railway.app/api/capsula",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    const respuesta = await response?.json();
    setCapsula(respuesta);
    setLoading(false);
  }

  useEffect(() => {
    mostrarcapsula();
  }, []);

  if (loading) {
    return (
      <Divloading>
        <Divload />
      </Divloading>
    );
  }

  return (
    <Container>
      <Title>Capsulas informativas</Title>
      <CapsuleList>
        {capsula.slice(0, 4).map((v, i) => (
          <CapsuleCard key={i}>
            <CapsuleImage src={v.foto} alt="Imagen de la cápsula" />
            <CapsuleTitle>{v.titulo}</CapsuleTitle>
            <ViewMoreLink to="/informaciones">Ver más</ViewMoreLink>
          </CapsuleCard>
        ))}
      </CapsuleList>
    </Container>
  );
};

export default Capsulascopm;

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  list-style: none;
  overflow: hidden;

  @media (max-width: 980px) {
    height: 100%;
  }
`;

const Title = styled.h2`
  border-left: 10px solid #b0d3c7;
  font-size: 2em;
  letter-spacing: 1px;
  color: #7793bd;
  transition: all 1s;
  display: flex;
  align-items: flex-start;
  width: 85%;
  margin: 2em auto;

  &:hover {
    transform: scale(0.9);
    border-left: 20px solid #39725e;
  }
`;

const CapsuleList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  background-color: #284c5c;
`;

const CapsuleCard = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.545);
`;

const CapsuleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CapsuleTitle = styled.h2`
  margin: 0;
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-weight: 100;
  font-size: 1.2em;
  background-color: #284c5c96;
  border-bottom: solid 1px #ffffff60;
  color: #fff;
`;

const ViewMoreLink = styled(Link)`
  padding: 1rem 2rem;
  margin-top: auto;
  cursor: pointer;
  text-decoration: none;
  border-radius: 1em;
  background-color: #7793bd;
  transition: all 1.5s;
  color: #e8ebf2;

  &:hover {
    background-color: #dbdce75e;
    color: #222f49;
    padding: 1rem 3rem;
  }
`;
