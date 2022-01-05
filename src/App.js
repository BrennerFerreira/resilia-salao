import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Usuarios } from "./pages/Usuarios";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/resilia-salao" element={<Home />} />
        <Route path="/resilia-salao/usuarios" element={<Usuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
