import {NavLink} from 'react-router-dom';
import {Home, Plus, LogOut} from 'lucide-react';
import logo from '../assets/images/logo.png';

export default function Sidebar() {
    return (
        <div className="w-64 bg-blue-700 text-white p-4 hidden md:block">
            <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="CoImobi Logo" className="h-20"/>
                <span className="text-lg font-light leading-tight">
                    Conectando<br/>imóveis com<br/>tecnologia
                </span>
            </div>
            <nav className="flex flex-col gap-4">
                <NavLink to="/properties" className="flex items-center gap-2 hover:text-blue-200">
                    <Home size={18}/> Listar Imóveis
                </NavLink>
                <NavLink to="/properties/new" className="flex items-center gap-2 hover:text-blue-200">
                    <Plus size={18}/> Cadastrar Imóvel
                </NavLink>
                <NavLink to="/login" className="flex items-center gap-2 hover:text-blue-200 mt-10">
                    <LogOut size={18}/> Sair
                </NavLink>
            </nav>
        </div>
    );
}