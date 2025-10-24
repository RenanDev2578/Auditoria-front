import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaMapMarkerAlt,
  FaIdCard,
  FaCalendarAlt,
} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    cidade: "",
    estado: "",
    cpf: "",
    dataNascimento: "",
  });

  // Função para atualizar 
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Função de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica se as senhas são iguais
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    // Armazena o cadastro no localStorage
    localStorage.setItem("userData", JSON.stringify(formData));

    alert("Cadastro realizado com sucesso!");
    navigate("/login");
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-[450px] overflow-y-auto max-h-[90vh]">
      {/* Ícone do topo */}
      <div className="flex justify-center items-center mb-4">
        <div className="bg-purple-600 p-2 rounded-full">
          <FaUser className="text-white text-3xl" />
        </div>
      </div>

      {/* Título */}
      <h2 className="text-center text-2xl font-bold mb-1 text-gray-800">
        Criar conta
      </h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        Preencha todos os campos para continuar
      </p>

      {/* Formulário */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {[
          {
            id: "nome",
            label: "Nome completo",
            icon: <FaUser />,
            type: "text",
          },
          { id: "email", label: "E-mail", icon: <FaEnvelope />, type: "email" },
          { id: "telefone", label: "Telefone", icon: <FaPhone />, type: "tel" },
          { id: "cpf", label: "CPF", icon: <FaIdCard />, type: "text" },
          {
            id: "cidade",
            label: "Cidade",
            icon: <FaMapMarkerAlt />,
            type: "text",
          },
        ].map((field) => (
          <div key={field.id} className="space-y-1">
            <label
              htmlFor={field.id}
              className="text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                {field.icon}
              </span>
              <input
                id={field.id}
                type={field.type}
                value={formData[field.id]}
                onChange={handleChange}
                required
                placeholder={field.label}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        ))}

        {/* Estado */}
        <div className="space-y-1">
          <label htmlFor="estado" className="text-sm font-medium text-gray-700">
            Estado
          </label>
          <input
            type="text"
            id="estado"
            placeholder="UF"
            value={formData.estado}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Data de nascimento */}
        <div className="space-y-1">
          <label
            htmlFor="dataNascimento"
            className="text-sm font-medium text-gray-700"
          >
            Data de nascimento
          </label>
          <div className="relative">
            <FaCalendarAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="date"
              id="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Senha */}
        <div className="space-y-1">
          <label htmlFor="senha" className="text-sm font-medium text-gray-700">
            Senha
          </label>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              id="senha"
              placeholder="********"
              value={formData.senha}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Confirmar senha */}
        <div className="space-y-1">
          <label
            htmlFor="confirmarSenha"
            className="text-sm font-medium text-gray-700"
          >
            Confirmar senha
          </label>
          <input
            type="password"
            id="confirmarSenha"
            placeholder="********"
            value={formData.confirmarSenha}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Botão de cadastro */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 rounded-md font-semibold hover:from-purple-600 hover:to-indigo-700 transition duration-300"
        >
          Cadastrar
        </button>

        {/* Link para login */}
        <div className="text-center text-sm">
          <span className="text-gray-600">Já tem uma conta? </span>
          <a
            href="/login"
            className="text-purple-600 hover:underline font-medium"
          >
            Faça login
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
