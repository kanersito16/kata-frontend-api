import { Routes, Route } from "react-router-dom";
import Artistas from "../pages/Artistas";
import Home from "../pages/Home";
import PaginaNoDisponible from "../pages/PaginaNoDisponible";

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/artistas" element={<Artistas />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PaginaNoDisponible/>} />
    </Routes>
  );
};

export default RoutesIndex;
