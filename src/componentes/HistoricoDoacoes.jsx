import { FaArrowLeft, FaSearch, FaFilter, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HistoricoDoacoes = () => {
  const navigate = useNavigate();

  const doacoes = [
    {
      id: 1,
      projeto: "Projeto Educação",
      valor: "R$ 500,00",
      data: "15/10/2025",
      status: "Confirmada",
    },
    {
      id: 2,
      projeto: "Saúde Comunitária",
      valor: "R$ 750,00",
      data: "10/10/2025",
      status: "Confirmada",
    },
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-purple-50 overflow-y-auto">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-purple-600 hover:text-purple-700 transition"
          >
            <FaArrowLeft className="text-2xl" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">
            Histórico de Doações
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Projeto</th>
                <th className="px-6 py-4 text-left">Valor</th>
                <th className="px-6 py-4 text-left">Data</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {doacoes.map((d) => (
                <tr key={d.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">{d.projeto}</td>
                  <td className="px-6 py-4">{d.valor}</td>
                  <td className="px-6 py-4">{d.data}</td>
                  <td className="px-6 py-4 text-green-600">{d.status}</td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => navigate("/detalhes-doacoes")}
                      className="text-purple-600 hover:text-purple-700"
                    >
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default HistoricoDoacoes;
