import Noimagen from "../assets/crud/Noimagen1.jpg";
import {
  Img
} from "../style/crud";

export function showImagen(imagen) {
  const foto = imagen ? imagen : Noimagen;

  return <Img src = {
    foto
  }
  alt = "" /> ;
};