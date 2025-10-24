import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// Telas de acesso
import Login from "./componentes/Login";
import RegisterForm from "./componentes/RegisterForm";

// Telas do doador
import DashboardDoador from "./componentes/DashboardDoador";
import DetalhesDoacoes from "./componentes/DetalhesDoacoes";
import HistoricoDoacoes from "./componentes/HistoricoDoacoes";
import PerfilDoador from "./componentes/PerfilDoador";

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center">
      <BrowserRouter>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />

          {/* Rotas do doador */}
          <Route path="/dashboard" element={<DashboardDoador />} />
          <Route path="/historico-doacoes" element={<HistoricoDoacoes />} />
          <Route path="/detalhes-doacoes" element={<DetalhesDoacoes />} />
          <Route path="/perfil" element={<PerfilDoador />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
