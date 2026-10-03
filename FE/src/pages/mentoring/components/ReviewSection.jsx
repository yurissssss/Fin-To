import React from 'react';

import ReviewItem from './ReviewItem';

import { Divider } from '@heroui/divider';

export function ReviewSection({ data, onLoadMore }) {
  const items = React.useMemo(() => {
    if (!data) return [];
    if (Array.isArray(data.reviews)) return data.reviews;
    if (Array.isArray(data.content)) return data.content;
    return [];
  }, [data]);

  const PAGE_SIZE = 4;
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);

  React.useEffect(() => {
    setVisibleCount((prev) => (prev < PAGE_SIZE ? PAGE_SIZE : prev));
  }, [items.length]);

  const visibleReviews = React.useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount]
  );

  const hasMoreLocal = visibleCount < items.length;
  const isPageResponse =
    data && (Array.isArray(data.content) || Number.isInteger(data?.number));
  const notLastRemote =
    isPageResponse &&
    (data?.last === false ||
      (Number.isInteger(data?.totalPages) &&
        Number.isInteger(data?.number) &&
        data.number < data.totalPages - 1));

  const showMoreButton =
    hasMoreLocal || (notLastRemote && typeof onLoadMore === 'function');

  const handleSeeMore = () => {
    if (hasMoreLocal) {
      setVisibleCount((c) => Math.min(c + PAGE_SIZE, items.length));
      return;
    }

    if (notLastRemote && typeof onLoadMore === 'function') {
      const nextPage = Number.isInteger(data?.number) ? data.number + 1 : 1;
      onLoadMore(nextPage);
    }
  };

  return (
    <div>
      <div className="mt-2">
        {visibleReviews.map((r) => (
          <React.Fragment key={r.reviewId ?? `${r.memberId}-${r.reviewedAt}`}>
            <ReviewItem {...r} />
            <Divider className="my-4" />
          </React.Fragment>
        ))}
        {items.length === 0 && (
          <p className="text-sm text-neutral-500 py-6 text-center">
            아직 리뷰가 없습니다.
          </p>
        )}
      </div>
      {showMoreButton && (
        <div className="mt-3">
          <button
            type="button"
            className="w-full text-center text-xs text-neutral-500 border border-neutral-300 rounded-lg py-2 hover:bg-neutral-50"
            onClick={handleSeeMore}
            aria-label={
              hasMoreLocal ? '리뷰 더 보기' : '다음 리뷰 페이지 불러오기'
            }
          >
            {hasMoreLocal ? 'See More +' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
}
