import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 8vh);
  margin-top: 4vh;
`;
export const Containerdiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const Divtitulo = styled.div`
  display: flex;
  margin: 3em 0 0 2em;
  align-content: center;
  font-size: 1em;
  & h1 {
    font-weight: 500;
    &::first-letter {
      color: #CC9544;
      font-size: 1.5em;
      font-weight: 600;
    }
  }
`;
export const Divcrudf = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 980px) {
    flex-direction: column;
  }
`;
export const Divformulario = styled.div`
  width: auto;
  margin: 0 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1em;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;
export const Divinput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px 10px 0px;
`;
export const Input = styled.input`
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  outline: none;
  height: 25px;
  padding: 5px;
  font-size: 16px;
`;
export const Textarea = styled.textarea`
  height: 200px;
  outline: none;
  background: rgba(0, 0, 0, 0.1);
  border: none;
`;
export const Textarea1 = styled.textarea`
  height: 100px;
  outline: none;
  background: rgba(0, 0, 0, 0.1);
  border: none;
`;
export const Botonagregar = styled.button`
  padding: 10px;
  border-radius: 12px;
  border: none;
  background: #533710;
  color: #fff;
  transition: 0.5s;
  &:hover {
    transition: 0.5s;
    background: #98651E;
  }
  &:disabled {
    pointer-events: none;
    filter: grayscale(1);
  }
`;
export const Botonfile = styled.button`
  display: inline-block;
  position: relative;
  background-color: #7b90a6;
  color: #fff;
  border: 0;
  padding: 12px 20px;
  border-radius: 8px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: ease-out 120ms background-color;
  &:active {
    background-color: #889db4;
  }
  &:hover {
    background-color: #16579b;
  }
`;
export const Inputfile = styled.input`
  border: none;
  width: 135px;
`;
export const Label = styled.label`
  font-size: 17px;
  color: #290001;
`;
export const Divh1 = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border-bottom: 2px solid #3C2A21;
  & h1 {
    font-size: 1em;
    font-weight: 400;

    &::first-letter {
      color: #CC9544;
      font-size: 1.5em;
      font-weight: 400;
    }
  }
`;
export const Divtabla = styled.div`
  width: 50vw;
  height: 70vh;
  margin: 0 1em;
  overflow-x: scroll;
  box-shadow: 0 5px 5px #0005;
  padding: 0.5em;
  @media (max-width: 500px) {
    width: 100%;
    overflow-x: scroll;
  }
`;
export const Tabla = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  text-align: left;
`;
export const Tr = styled.tr`
  background-color: #87431D;
  color: #ffff;
  text-align: left;
`;
export const Trbody = styled.tr`
  border-bottom: 1px solid #F0D394;
  font-weight: bold;
  color: #000000;

  &:nth-of-type(even) {
    background-color: #F0D394;
  }
  &:last-of-type {
    border-bottom: 2px solid #005998;
  }
`;
export const Tablahead = styled.thead``;
export const Td = styled.td`
  text-align: center;
  padding: 10px;
  & > p {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
export const Th = styled.th`
  text-align: center;
  padding: 0.5em 0px;
  font-weight: 400;
  &:last-child {
    padding: 1em;
  }
`;
export const Tddescripcion = styled.td`
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Pcon = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding: 5px;
`;
export const Botonesacciones = styled.button`
  padding: 0px;
  margin-left: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
export const Imgeditar = styled.img`
  filter: invert(22%) sepia(99%) saturate(2159%) hue-rotate(170deg)
    brightness(96%) contrast(104%);
`;
export const Imgeliminar = styled.img`
  filter: invert(42%) sepia(36%) saturate(1237%) hue-rotate(307deg)
    brightness(89%) contrast(86%);
`;
export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 5px;
`;
export const Divloading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Divload = styled.div`
  width: 69px;
  height: 36px;
  --c: radial-gradient(farthest-side, #603601 90%, #0000);
  background: var(--c), var(--c), var(--c), var(--c);
  background-size: 12px 12px;
  background-repeat: no-repeat;
  animation: d3 1.5s infinite linear;

  @keyframes d3 {
    0% {
      background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 50%;
    }
    16.67% {
      background-position: calc(0 * 100% / 3) 0, calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 50%;
    }
    33.33% {
      background-position: calc(0 * 100% / 3) 100%, calc(1 * 100% / 3) 0,
        calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 50%;
    }
    50% {
      background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 100%,
        calc(2 * 100% / 3) 0, calc(3 * 100% / 3) 50%;
    }
    66.67% {
      background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 100%, calc(3 * 100% / 3) 0;
    }
    83.33% {
      background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 100%;
    }
    100% {
      background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 50%,
        calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 50%;
    }
  }
`;
