import React from 'react';
import Stars from './Stars';

import profileImg from '../../../assets/imgs/profiles/mentee1.png';

export default function ReviewItem({ name, reviewedAt, rating, content }) {
  return (
    <div className="py-4">
      <div className="flex items-start gap-3">
        <img
          src={profileImg}
          alt="img"
          className="size-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-medium text-neutral-700">{name}</span>
          <span className="text-xs text-neutral-500">{reviewedAt}</span>
        </div>
      </div>

      <div className="mt-2">
        <div className="flex items-center gap-2">
          <Stars value={rating} />
          <span className="text-sm text-neutral-600 font-medium">{rating}</span>
        </div>
        <p className="text-sm text-neutral-600 mt-1">{content}</p>
      </div>
    </div>
  );
}
