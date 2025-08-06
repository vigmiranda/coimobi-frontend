import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
    return (
        <div className="flex h-screen bg-blue-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header />
                <main className="p-4 overflow-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}