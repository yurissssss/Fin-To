import api from '../api';

export const getRegisterHistory = async (page = 0, size = 10) => {
  try {
    const response = await api.get('/mentoring/me/requests', {
      params: { page, size },
    });
    return response.data.content;
  } catch (error) {
    console.error('데이터를 불러오는 데 실패했습니다', error);
    throw error;
  }
};

export const getRegisterHistoryDetails = async (mentoringId) => {
  try {
    const response = await api.get(`/mentoring/${mentoringId}/apply`);
    return response.data;
  } catch (error) {
    console.error(
      `상세 데이터를 불러오는 데 실패했습니다 (ID: ${mentoringId})`,
      error
    );
    throw error;
  }
};
