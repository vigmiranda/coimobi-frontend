import { useParams } from 'react-router-dom';

export default function PropertyForm() {
    const { id } = useParams();
    return (
        <div>
            <h2 className="text-lg font-bold mb-4">
                {id ? 'Editar Imóvel' : 'Cadastrar Novo Imóvel'}
            </h2>
            <p>Formulário de cadastro/edição aqui...</p>
        </div>
    );
}