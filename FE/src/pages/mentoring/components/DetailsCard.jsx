import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  fetchReviewInfo,
  fetchReviews,
} from '../../../api/mentoring/MentoringDetailsApi';

import ReviewSortSelect from './ReviewSortSelect';
import Stars from './Stars';

import star from '../../../assets/imgs/icons/icon_star.png';
import { ArrowLeft } from 'lucide-react';
import { ReviewSection } from './ReviewSection';

export default function DetailsCard({ data }) {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(new Set(['top']));

  // 리뷰 요약 정보
  const [info, setInfo] = React.useState(null);

  React.useEffect(() => {
    const id = data?.mentoringId;
    if (!id) return;
    fetchReviewInfo(id)
      .then(setInfo)
      .catch(() => setInfo(null));
  }, [data?.mentoringId]);

  // 리뷰 리스트 (페이지네이션 응답에서 content 배열을 사용)
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    const id = data?.mentoringId;
    if (!id) return;
    fetchReviews(id, { page: 0, size: 4 })
      .then((res) => {
        // 서버 응답: { content: [...], ... }
        setReviews(res?.content || []);
      })
      .catch(() => setReviews([]));
  }, [data?.mentoringId]);

  const selectedKey = React.useMemo(() => Array.from(value)[0], [value]);

  const sortedReviews = React.useMemo(() => {
    const list = reviews ? [...reviews] : [];
    switch (selectedKey) {
      case 'top':
        return list.sort((a, b) => b.rating - a.rating);
      case 'low':
        return list.sort((a, b) => a.rating - b.rating);
      case 'new':
        return list.sort(
          (a, b) =>
            Date.parse(b.reviewedAt || 0) - Date.parse(a.reviewedAt || 0)
        );
      default:
        return list;
    }
  }, [reviews, selectedKey]);

  const sortedReviewsData = React.useMemo(
    () => ({ reviews: sortedReviews }),
    [sortedReviews]
  );

  const avgRaw = Number(info?.averageRatings ?? 0);
  const avg = Math.floor(Number.isFinite(avgRaw) ? avgRaw : 0);
  const count = Number(info?.reviewCounts ?? 0) || 0;

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 lg:p-6 shadow-sm">
      {/* 뒤로가기 버튼 */}
      <div className="flex items-center gap-2 text-sm text-neutral-500">
        <button
          type="button"
          aria-label="back"
          onClick={() => navigate(-1)}
          className="cursor-pointer transition hover:transform hover:scale-110"
        >
          <ArrowLeft className="size-4" />
        </button>
      </div>

      <h1 className="mt-5 text-xl font-semibold text-neutral-900">
        {data?.title || ''}
      </h1>

      <div className="mt-3 text-sm text-neutral-600 space-y-2">
        <div className="flex items-center gap-2 text-yellow-500">
          <img src={star} alt="star" className="size-5" />
          <span className="text-neutral-700 font-medium">{avg} </span>
          <span className="text-neutral-500">({count})</span>
          <span className="text-neutral-700">
            멘티
            <span className="text-neutral-700 font-bold">
              {' '}
              {data?.mentees ?? 0}
            </span>
            명
          </span>
        </div>

        <p className=" mt-2 leading-6">{data?.content || ''}</p>
      </div>

      {/* 리뷰 요약 */}
      <div className="mt-6 rounded-xl border border-neutral-200">
        <div className="p-4 flex items-center justify-center">
          <div>
            <div className="text-2xl font-bold text-neutral-900 text-center">
              {avg}
            </div>
            <div className="flex items-center justify-center mt-1 text-yellow-500">
              <Stars value={avg} />
            </div>
            <div className="mt-1 text-center text-sm text-neutral-500">
              {count} Reviews
            </div>
          </div>
          <div />
        </div>
      </div>

      {/* 정렬 드롭다운 (오른쪽 정렬) */}
      <div className="flex justify-end mt-4">
        <ReviewSortSelect value={value} onChange={setValue} />
      </div>

      {/* 리뷰 리스트 */}
      <ReviewSection data={sortedReviewsData} />
    </div>
  );
}
