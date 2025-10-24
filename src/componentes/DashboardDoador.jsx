import {
  FaHeart,
  FaChartLine,
  FaGift,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DashboardDoador = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-purple-50 overflow-y-auto">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-purple-600 p-2 rounded-lg">
              <FaHeart className="text-white text-2xl" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              Plataforma de Doações
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/perfil")}
              className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition"
            >
              <FaUser className="text-xl" />
              <span>Perfil</span>
            </button>
            <button
              onClick={() => navigate("/login")}
              className="text-gray-700 hover:text-red-600 transition"
            >
              <FaSignOutAlt className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo principal omitido por espaço */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/historico-doacoes")}
            className="text-purple-600 hover:text-purple-700 font-semibold"
          >
            Ver todas as doações →
          </button>
        </div>
      </main>
    </div>
  );
};

export default DashboardDoador;
