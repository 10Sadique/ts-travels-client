import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext, AuthContextInterface } from '../contexts/AuthProvider';

type Props = {
    children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props): any => {
    const { user, isLoading } = React.useContext(
        AuthContext
    ) as AuthContextInterface;

    const location = useLocation();

    if (isLoading) {
        return (
            <div className="text-4xl text-center font-bebas">Loading...</div>
        );
    }

    if (!user) {
        return (
            <Navigate
                to={`/signin`}
                state={{ from: location }}
                replace={true}
            />
        );
    }

    return children;
};

export default PrivateRoute;
