import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/api';

export default function PropertyList() {

  const [properties, setProperties] = useState([]);

  const fetchData = () => {
    api.get('/property')
      .then(res => setProperties(res.data))
      .catch(err => console.error('Erro ao buscar propriedades', err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = (ID) => {
      api.delete('/property/'+ID)
      .then(() => fetchData())
      .catch(err => console.error('Erro ao deletar propriedades', err));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Imóveis Disponiveis</h1>
      <Link to="/properties/new" className="bg-green-500 text-white p-2 rounded">Adicionar Imóvel</Link>
      <ul className="mt-4 space-y-4">
        {properties.map(p => (
          <li key={p.ID} className="border p-4 rounded shadow flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">{p.title}</h2>
                <p> <b> Tipo:</b> {p.property_type} - <b> Valor:</b>  R$ {p.purpose}</p>
              <p><b> Endereço: </b>  {p.full_address}</p>
            </div>
            <div className="space-x-2">
              <Link to={`${p.ID}/edit/`} className="bg-blue-500 text-white px-3 py-1 rounded">Edit</Link>
              <button onClick={() => handleDelete(p.ID)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}