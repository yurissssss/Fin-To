import { useEffect, useState } from 'react';
import { getGoogleAuthURL } from '../../api/auth.api';
import { Button } from '@heroui/react';

export default function LoginPage() {
    const [googleAuthUrl, setGoogleAuthUrl] = useState('');

    useEffect(() => {
        // Google OAuth URL을 백엔드에서 받아와서 상태 저장
        const fetchGoogleAuthUrl = async () => {
            try {
                const data = await getGoogleAuthURL();
                setGoogleAuthUrl(data.url);
            } catch (e) {
                console.error('Failed to fetch Google auth URL:', e);
            }
        };

        fetchGoogleAuthUrl();
    }, []);

    const handleGoogleLogin = () => {
        // Google 로그인 페이지로 이동
        if (googleAuthUrl) {
            window.location.href = googleAuthUrl;
        }
    };

    return (
        <Button onPress={handleGoogleLogin} disabled={!googleAuthUrl}>
            Login with Google
        </Button>
    );
}
