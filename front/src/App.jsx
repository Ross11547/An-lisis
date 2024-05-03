import Navbar from "./components/navbar";
import Portada from "./pages/Portada";
import Capsulas from "./pages/Capsulas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Centros from "./pages/Centros";
import Detallecentro from "./pages/Detallecentro";
import Informacion from "./pages/Informacion";
import Programa from "./pages/Programa";
import Redcentros from "./pages/Redcentros";
import Nav from "./components/app/Nav";
import Programas from "./components/app/Programas";
import Inicio from "./components/app/Inicio";
import Informaciones from "./components/app/Informaciones";
import Centross from "./components/app/Centross";
import Quienlorealiza from "./components/app/Quienlorealiza";
import Colaboraciones from "./components/app/Colaboraciones";
import Contactanos from "./components/app/Contactanos";
import { SkeletonTheme } from 'react-loading-skeleton'
import Loadig2 from "./components/app/Pruevacarga";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Navbar/>}>
          <Route path="" element={<Portada />} />
          <Route path="capsulas" element={<Capsulas />} />
          <Route path="centros" element={<Centros />} />
          <Route path="detallecentro" element={<Detallecentro />} />
          <Route path="informacion" element={<Informacion />} />
          <Route path="programa" element={<Programa />} />
          <Route path="redcentro" element={<Redcentros />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
