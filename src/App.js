import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Agendamentos } from "./pages/Agendamentos";
import { Home } from "./pages/Home";
import { Servicos } from "./pages/Servicos";
import { Usuarios } from "./pages/Usuarios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
