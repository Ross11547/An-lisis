import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Portadaicons from "../assets/navbar/icons8-producto-50.png";
import Capsulasicons from "../assets/navbar/icons8-tienda-50.png";
import Centroicons from "../assets/navbar/Centros1.jpg";
import Detallecentroicons from "../assets/navbar/Detallecentros.jpg";
import Informacionicons from "../assets/navbar/icons8-grupo-de-usuarios-de-la-nube-64.png";
import Programaicons from "../assets/navbar/icons8-descuento-50.png";
import Redcentrosicons from "../assets/navbar/icons8-blog-50.png";
const Navbar = () => {
  return (
    <Navbarnav>
      <Nav>
        <Navlink>
          <Logo>
            <h1>LOGO</h1>
          </Logo>
          <Linkes to="/">
            <Imgicons src={Portadaicons} alt="" /> Formularios
          </Linkes>
          <Linkes to="capsulas">
            <Imgicons src={Informacionicons} alt="" /> Usuario
          </Linkes>
          <Linkes to="redcentro">
            <Imgicons src={Redcentrosicons} alt="" /> Licitaciones
          </Linkes>
          <Linkes to="programa">
            <Imgicons src={Programaicons} alt="" /> Convocatorias
          </Linkes>
          <Linkes to="redcentro">
            <Imgicons src={Redcentrosicons} alt="" /> Empresas
          </Linkes>
          <Linkes to="http://localhost:3000/">
             Salir
          </Linkes>
        </Navlink>
      </Nav>
      <Datos>
        <Outlet />
      </Datos>
    </Navbarnav>
  );
};

export default Navbar;
const Navbarnav = styled.div`
  min-width: 100vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  overflow: hidden;
`;
const Datos = styled.div`
  width: 100%;
  background: transparent;
  border-radius: 50px;
`;
const Nav = styled.div`
  width: 100%;
  height: 10vh;
  background: #20293b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  box-shadow:0px 5px 10px #4b464654;
  position:fixed;
 
`;
const Navlink = styled.div`
  display: flex;
  flex-direction: row;
  height: 80%;
  width: 100%;
  font-size: 17px;
  gap:1.5cm;
  @media (max-width: 500px) {
    flex-direction:column;
    height:auto;
    background-color:#000000;
    position:absolute;
  }
`;
const Imgicons = styled.img`
  width: 30px;
  margin-right: 15px;

  filter: invert(10%) sepia(57%) saturate(759%) hue-rotate(214deg)
    brightness(103%) contrast(86%);
`;
const Linkes = styled(Link)`
  display: flex;
  align-items: center;
  margin: 10px 10px 0px 10px;
  padding: 20px;
  text-decoration: none;
  color: #ffffff;
  transition: 0.5s;
  border-bottom: solid 1px #fff5;
  gap:1em;
 
  &:hover {
transform:translateY(0.5em);

    background: #8f8b86;
    color: #fff;
    transition: 0.5s;
  }
  &:hover img {
    filter: invert(100%) sepia(1%) saturate(0%) hue-rotate(131deg)
      brightness(101%) contrast(102%);
  }
`;
const Logo = styled.div`
  cursor: default;
  display: flex;
  background-color:transparent;
  height:100%;
  width:200px;
  justify-content: center;
  border-radius: 20px;
  & h1 {
    margin-left:0.2em;
    color: #fff;
    font-size: 2em;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
    &::first-letter {
      font-size: 2em;
    }
  }
`;
