import api from './api';

export const getGoogleAuthURL = async () => {
    return (await api.get('/auth/login/google/url')).data;
};

export const loginWithGoogle = async (code) => {
    return (
        await api.post(`/auth/login/google`, {
            code,
        })
    ).data;
};
