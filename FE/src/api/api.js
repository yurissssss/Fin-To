import axios from 'axios';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzU3NjAyMTcxLCJleHAiOjE3NTc2ODg1NzF9.D6wWWzx9LdRmXyYqLxkCcs5DFnNvrOJGqkKVDmp0Lxk`,
  },
  withCredentials: true,
});

// 요청 인터셉터 (요청 전 처리)
api.interceptors.request.use(
  (config) => {
    // 테스트용 하드코딩
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzU3NjAyMTcxLCJleHAiOjE3NTc2ODg1NzF9.D6wWWzx9LdRmXyYqLxkCcs5DFnNvrOJGqkKVDmp0Lxk';

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 응답 인터셉터 (응답 후 처리)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
