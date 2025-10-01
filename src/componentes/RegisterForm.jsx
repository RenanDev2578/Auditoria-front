
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
      {/*  ícone do topo */}
      <div className="flex justify-center items-center mb-4">
        <div className="bg-purple-600 p-2 rounded-full">
          <FaUser className="text-white text-3xl" />
        </div>
      </div>

      <h2 className="text-center text-2xl font-bold mb-1 text-gray-800">
        Criar conta
      </h2>
      <p className="text-center text-sm text-gray-800 mb-6">
        Junte-se à nossa plataforma de doações
      </p>

      <form className="space-y-4">
        {/* Campo Nome completo */}
        <div className="space-y-1">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-gray-700"
          >
            Nome completo
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="fullName"
              placeholder="Seu nome completo"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* E-mail */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            E-mail
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              id="email"
              placeholder="seu@email.com"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/*  Tipo de usuário */}
        <div className="space-y-1">
          <label
            htmlFor="userType"
            className="text-sm font-medium text-gray-700"
          >
            Tipo de usuário
          </label>
          <select
            id="userType"
            className="w-full px-4 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option>Selecione o tipo de usuário</option>
            <option>Doador</option>
            <option>Instituição</option>
          </select>
        </div>

        {/*  Senha */}
        <div className="space-y-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Senha
          </label>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full pl-10 pr-10 py-2 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {/* olho */}
            <FaEyeSlash className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Campo Confirmar senha */}
        <div className="space-y-1">
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-gray-700"
          >
            Confirmar senha
          </label>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="password"
              id="confirmPassword"
              placeholder="********"
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <FaEye className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Link para login */}
        <div className="text-center text-sm">
          <span className="text-gray-500">Já tem uma conta? </span>
          <a href="#" className="text-purple-600 hover:underline">
            Faça login
          </a>
        </div>

        {/* Botão de cadastro */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 rounded-md font-semibold hover:from-purple-600 hover:to-indigo-700 transition duration-300"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
