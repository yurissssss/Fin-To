import api from '../api';

// 내 프로필 정보 조회 API
export const getMyProfile = async () => {
  try {
    const response = await api.get('/members/me');
    return response.data;
  } catch (error) {
    console.error(
      '내 프로필 정보 조회 실패:',
      error.response?.data || error.message
    );
    throw error;
  }
};

// 내가 구사 가능한 언어 추가 API
export const addMyLanguage = async (languageId) => {
  try {
    const response = await api.post(`/languages/me/${languageId}`);
    return response.data;
  } catch (error) {
    console.error('언어 추가 실패:', error.response?.data || error.message);
    throw error;
  }
};

// 내가 구사 가능한 언어 삭제 API
export const deleteMyLanguage = async (languageId) => {
  try {
    const response = await api.delete(`/languages/me/${languageId}`);
    return response.data;
  } catch (error) {
    console.error('언어 삭제 실패:', error.response?.data || error.message);
    throw error;
  }
};

// 내가 구사 가능한 언어 조회 API
export const getMyLanguages = async () => {
  try {
    const response = await api.get('/languages/me');
    return response.data;
  } catch (error) {
    console.error('언어 조회 실패:', error.response?.data || error.message);
    throw error;
  }
};
