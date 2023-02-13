import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Index from "./Components/Index/Index";
import Servicios from "./Components/Servicios/Servicios"
import Nosotros from "./Components/Nosotros/Nosotros"
import Cliente from "./Components/Clientes/Cliente"
import Contacto from "./Components/Contacto/Contacto"
import NavbarComponent from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"
import './App.scss';

function App() {
  return (
    <HashRouter>
      <div className="app">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Cliente" element={<Cliente />} />
        <Route path="/Contacto" element={<Contacto />} />
      </Routes>
      <Footer/>
      </div>
    </HashRouter>
  );
}

export default App;
