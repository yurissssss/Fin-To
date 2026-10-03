import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function AuthenticationLayout() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        console.log('AuthenticationLayout token:', token);
        if (!token) {
            navigate('/login', { replace: true });
        }
    }, [token, navigate]);

    if (!token) {
        return null;
    }

    return <Outlet />;
}
