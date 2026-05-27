import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface PrivateProps {
  children: ReactNode;
}

function Private({ children }: PrivateProps) {
    const { signed, loading } = useAuth();

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!signed) {
        return <Navigate to='/' replace />;
    }

    return <>{children}</>;
}

export default Private;