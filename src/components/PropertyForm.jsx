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

export default function PropertyForm({ isEdit }) {
  const [property, setProperty] = useState(initialState);
  const navigate = useNavigate();
  const { ID } = useParams();

  useEffect(() => {
    if (isEdit && ID) {
      api.get(`/property`)
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
    method('/property', data)
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
          placeholder={field}
          className="border p-2 rounded"
        />
      ))}
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {isEdit ? 'Update' : 'Create'} Property
      </button>
    </form>
  );
}