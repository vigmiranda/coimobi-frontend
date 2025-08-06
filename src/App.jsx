import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import PropertyList from './components/PropertyList';
import PropertyForm from './components/PropertyForm';
import Login from './pages/Login';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />}>
                <Route index element={<Navigate to="properties" replace />} />
                <Route path="properties" element={<PropertyList />} />
                <Route path="properties/new" element={<PropertyForm />} />
                <Route path="properties/:id/edit" element={<PropertyForm />} />
            </Route>
        </Routes>
    );
}

export default App;