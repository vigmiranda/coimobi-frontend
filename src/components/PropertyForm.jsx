import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api';

const initialState = {
  title: '',
  property_type: '',
  purpose: '',
  description: '',
  usable_area_m2: '',
  total_area_m2: '',
  bedrooms: '',
  bathrooms: '',
  garage_spaces: '',
  full_address: '',
  latitude: '',
  longitude: ''
};

export default function PropertyForm({  }) {
  const [property, setProperty] = useState(initialState);
  const navigate = useNavigate();
  const { ID } = useParams();
  const isEdit = !!ID;
  const fieldLabels = {
    title: 'Título',
    property_type: 'Tipo do Imóvel',
    purpose: 'Valor',
    description: 'Descrição',
    usable_area_m2: 'Área Útil (m²)',
    total_area_m2: 'Área Total (m²)',
    bedrooms: 'Quartos',
    bathrooms: 'Banheiros',
    garage_spaces: 'Vagas de Garagem',
    full_address: 'Endereço Completo',
    latitude: 'Latitude',
    longitude: 'Longitude'
  };


  useEffect(() => {
    if (ID) {
      api.get(`/property/all`)
        .then(res => {
          const found = res.data.find(p => p.ID == ID);
          if (found) setProperty(found);
        });
    }
  }, [isEdit, ID]);

  const handleChange = e => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    const data = {
      ...property,
      usable_area_m2: parseFloat(property.usable_area_m2),
      total_area_m2: parseFloat(property.total_area_m2),
      bedrooms: parseInt(property.bedrooms),
      bathrooms: parseInt(property.bathrooms),
      garage_spaces: parseInt(property.garage_spaces),
      latitude: parseFloat(property.latitude),
      longitude: parseFloat(property.longitude),
      purpose: parseFloat(property.purpose?.toString().replace(',', '.')),
    };


    const method = isEdit ? api.put : api.post;
    const url = isEdit ? '/property/'+ID : '/property';
    method(url, data)
        .then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl mx-auto">
      {Object.keys(initialState).map((field) => (
        <input
          key={field}
          name={field}
          value={property[field]}
          onChange={handleChange}
          placeholder={fieldLabels[field] || field}
          className="border p-2 rounded"
        />
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {isEdit ? 'Update' : 'Create'} Property
      </button>
    </form>
  );
}