import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Signup from './Signup';
import { Navigate } from 'react-router-dom';

const ProtectedSignupRoute = () => {

    const context = useContext(AuthContext);
    const { user } = context;

    return (
        user ? <Navigate to={'/'} />  : <Signup />
    )
}

export default ProtectedSignupRoute;