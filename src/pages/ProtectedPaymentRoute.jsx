import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import Payment from './Payment';

const ProtectedPaymentRoute = ({ initialSelectedPlan, onPlanChange }) => {

    const context = useContext(AuthContext);
    const { user } = context;

    return (
        user ? <Payment initialSelectedPlan={initialSelectedPlan} onPlanChange={onPlanChange} /> : <Navigate to={'/login'} />
    )
}

export default ProtectedPaymentRoute;