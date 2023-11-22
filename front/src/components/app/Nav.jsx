import React, { useState } from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";
import { UseFech } from "../../hooks/useFech";
import { getCapsulas } from "../../services/capsulas";
import { Divload, Divloading } from "../../style/crud";
const Nav = () => {
  const [mostrarDiv, setMostrarDiv] = useState(false);
  const { loading } = UseFech(getCapsulas);
  if (loading) {
    return (
      <Divloading>
        <Divload />
      </Divloading>
    );
  }
  function handleClick() {
    setMostrarDiv(!mostrarDiv);
  }
  return (
    <>
      <Abot onClick={handleClick}>
        <h2>Tamizaje neonatal</h2>
      </Abot>
     
    
      <Outlet />
    </>
  );
};

export default Nav;

const Abot = styled.div`
  background-color: #4870a4;
  padding: 0 1em;
  display: none;
  height: 30px;
  position: relative;
  box-shadow: 0px 2px 5px #0005;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & h2 {
    font-weight: 100;
    color: #fff;
    font-size: 1.1em;
  }
  &::before {
    position: absolute;
    width: 15px;
    height: 1.2px;
    background-color: #ffffff;
    content: "";
    top: 25%;
    right: 5%;
  }
  &::after {
    position: absolute;
    width: 15px;
    height: 1.2px;
    background-color: #ffffff;
    content: "";
    top: 50%;
    right: 5%;
  }

  @media (max-width: 520px) {
    display: flex;
    z-index: 100;
  }
`;
const Bodydiv = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;
  @media (max-width: 980px) {
    & section {
      margin-top: 15px;
      width: 80%;
      height: 40px;
    }
    & nav div {
      height: 40px;
    }
    & nav div li link {
      font-size: 1em;
    }
    & button {
      margin: 1em;
      padding: 0.5em 1em;
    }
  }
  @media (max-width: 720px) {
    & section {
      margin-top: 10px;
      width: 90%;
      height: 35px;
    }
    & nav div {
      height: 35px;
      width: 90%;
    }
    & button {
      margin: 0.5em;
      padding: 0.4em 0.8em;
    }
  }
  @media (max-width: 520px) {
    display: none;
    & nav div {
      display: flex;
      flex-direction: column;
    }
  }
`;
const Res = styled.article`
  position: absolute;
  display: none;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  list-style: none;
  z-index: 100;
`;

export const Linkss = styled(Link)`
  display: block;
  color: #222020eb;
  text-decoration: none;
  text-align: center;
  padding: 0.5em 0em 0 0.5em;
  border-bottom: solid 1px #1413136b;
  height: 2.2em;
  &:hover {
    background-color: #4870a4dc;
    color: #ffffff;
  }
`;

const Divnav = styled.div`
  display: flex;
  list-style: none;
  margin: 0;
  width: 70%;
  background: #5e636d9e;
  padding: 15px;
  justify-content: center;
  align-items: center;
`;
const Divlogo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Divlogos = styled.section`
  margin-top: 30px;
  width: 80%;
  height: 60px;
  background: #ffffff4b;
  opacity: 0.8;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Imglogo = styled.img`
  height: 55%;
  background-size: cover;
  transition: all 2s;
  &:hover {
    transform: scale(1.5);
  }
`;

export const Links = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 20px;
  transition: all 0.5s;
  @media (max-width: 980px) {
    padding: 10px;
    font-size: 0.6em;
  }
  @media (max-width: 720px) {
    padding: 10px;
    font-size: 0.7em;
  }
  @media (max-width: 520px) {
    padding: 10px;
    font-size: 0.5em;
  }
  &:hover {
    background-color: #ffffffea;
    color: #3c425c;
  }
`;
const Nava = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
