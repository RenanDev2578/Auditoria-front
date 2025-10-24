import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaClock,
  FaDownload,
  FaShare,
} from "react-icons/fa";


const DetalhesDoacoes = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-white shadow-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/historico-doacoes")}
            className="text-purple-600 hover:text-purple-700"
          >
            <FaArrowLeft className="text-2xl" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">
            Detalhes da Doação
          </h1>
        </div>
      </header>

      {/* Conteúdo original omitido para espaço */}
    </div>
  );
};

export default DetalhesDoacoes;
