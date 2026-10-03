import api from '../api';

// 멘토 등록 API
export const MentorRegistration = async (mentorData) => {
  try {
    const response = await api.post('/members/mentors', mentorData);
    return response.data;
  } catch (error) {
    console.error('멘토 등록 실패:', error.response?.data || error.message);
    throw error;
  }
};
