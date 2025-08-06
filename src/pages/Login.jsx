export default function Login() {
    return (
        <div className="h-screen flex items-center justify-center bg-blue-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h2 className="text-xl font-bold text-blue-800 mb-4">Entrar no CoImobi</h2>
                <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                    Entrar com Google
                </button>
            </div>
        </div>
    );
}