import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Agendamentos } from "./pages/Agendamentos";
import { Home } from "./pages/Home";
import { Usuarios } from "./pages/Usuarios";
import { Contato } from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
