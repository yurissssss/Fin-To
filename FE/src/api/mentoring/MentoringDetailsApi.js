import api from '../api';

export const fetchMentorDetails = async (mentoringId) => {
  try {
    const response = await api.get(`/mentoring/${mentoringId}`);
    return response.data;
  } catch (error) {
    console.error('멘토링 상세 불러오기 실패:', error);
    throw error;
  }
};

export const fetchReviewInfo = async (mentoringId) => {
  try {
    const response = await api.get(`/reviews/${mentoringId}/info`);
    return response.data;
  } catch (error) {
    console.error('멘토링 상세 불러오기 실패:', error);
    throw error;
  }
};

export const fetchReviews = async (
  mentoringId,
  { page = 0, size = 4 } = {}
) => {
  if (mentoringId == null) {
    throw new Error("fetchReviews: 'mentoringId' is required");
  }
  try {
    const response = await api.get(`/reviews/${mentoringId}/list`, {
      params: { page, size },
    });
    return response.data;
  } catch (error) {
    console.error('리뷰 불러오기 실패:', error);
    throw error;
  }
};
