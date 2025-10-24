import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();


    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser) {
      alert("Nenhum usuário cadastrado! Faça o cadastro primeiro.");
      return;
    }

    
    if (email === storedUser.email && password === storedUser.senha) {
      alert("Login realizado com sucesso!");
      navigate("/dashboard");
    } else {
      alert("E-mail ou senha incorretos!");
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
      {/* Ícone de topo */}
      <div className="flex justify-center items-center mb-4">
        <div className="bg-purple-600 p-2 rounded-full">
          <FaLock className="text-white text-3xl" />
        </div>
      </div>

      {/* Título e descrição */}
      <h2 className="text-center text-2xl font-bold mb-1 text-gray-800">
        Bem-vindo de volta
      </h2>
      <p className="text-center text-sm text-gray-600 mb-6">
        Faça login na sua conta para continuar
      </p>

      {/* Formulário */}
      <form className="space-y-4" onSubmit={handleLogin}>
        {/* Campo de e-mail */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">E-mail</label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Campo de senha */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Senha</label>
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {/* Botão de login */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 rounded-md font-semibold hover:from-purple-600 hover:to-indigo-700 transition duration-300"
        >
          Entrar
        </button>

        {/* Link para cadastro */}
        <div className="text-center text-sm">
          <span className="text-gray-600">Não tem uma conta? </span>
          <a href="/" className="text-purple-600 hover:underline font-medium">
            Cadastre-se
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
