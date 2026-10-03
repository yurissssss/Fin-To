import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { loginWithGoogle } from '../../api/auth.api';

export default function GoogleCallbackPage() {
    const [searchParams] = useSearchParams();
    const code = searchParams.get('code');
    const navigate = useNavigate();

    useEffect(() => {
        const attemptLogin = async () => {
            try {
                const data = await loginWithGoogle(code);
                localStorage.setItem('token', data.accessToken);
                navigate('/');
            } catch (e) {
                console.error('Google login failed:', e);
                navigate('/login');
            }
        };

        // 리다이렉트시 넘어온 code를 백엔드로 보내서 토큰 발급
        if (!code) {
            navigate('/login');
            return;
        }

        attemptLogin();
    }, [code, navigate]);

    return <></>;
}
