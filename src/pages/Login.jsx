import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api/api';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            navigate("/properties");
        } catch (err) {
            setError("Usuário ou senha inválidos");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
            <img src={logo} alt="CoImobi Logo" className="h-20"/>
            <h2 className="text-xl font-bold mb-4">Login</h2>
            {error && <div className="text-red-500 mb-2">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 p-2 border rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-4 p-2 border rounded"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Entrar
                </button>

                <Link
                    to="/register"
                    className="block text-center w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 mt-2"
                >
                    Registrar
                </Link>
            </form>
        </div>
    );
}