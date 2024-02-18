import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Login from './Login';
import { Navigate } from 'react-router-dom';

const ProtectedLoginRoute = () => {

    const context = useContext(AuthContext);
    const { user } = context;

    return (
        user ? <Navigate to={'/'} />  : <Login />
    )
}

export default ProtectedLoginRoute;