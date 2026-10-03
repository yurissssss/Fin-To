import api from '../api';

export const fetchMentorList = async () => {
  try {
    const response = await api.get('/mentoring');
    return response.data;
  } catch (error) {
    console.error('멘토링 목록 불러오기 실패:', error);
    throw error;
  }
};
