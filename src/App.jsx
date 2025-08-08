import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './components/PrivateRoute';
import PropertyList from './components/PropertyList';
import PropertyForm from './components/PropertyForm';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={
                <PrivateRoute>
                    <Layout />
                </PrivateRoute>
            }>
                <Route index element={<Navigate to="properties" replace />} />
                <Route path="properties" element={<PropertyList />} />
                <Route path="properties/new" element={<PropertyForm />} />
                <Route path="properties/:ID/edit" element={<PropertyForm />} />
            </Route>
        </Routes>
    );
}

export default App;