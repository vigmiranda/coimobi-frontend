import { NavLink } from 'react-router-dom';
import { Home, Plus, LogOut } from 'lucide-react';

export default function Sidebar() {
    return (
        <div className="w-64 bg-blue-700 text-white p-4 hidden md:block">
            <h2 className="text-2xl font-bold mb-6">CoImobi</h2>
            <nav className="flex flex-col gap-4">
                <NavLink to="/properties" className="flex items-center gap-2 hover:text-blue-200">
                    <Home size={18} /> Listar Imóveis
                </NavLink>
                <NavLink to="/properties/new" className="flex items-center gap-2 hover:text-blue-200">
                    <Plus size={18} /> Cadastrar Imóvel
                </NavLink>
                <NavLink to="/login" className="flex items-center gap-2 hover:text-blue-200 mt-10">
                    <LogOut size={18} /> Sair
                </NavLink>
            </nav>
        </div>
    );
}