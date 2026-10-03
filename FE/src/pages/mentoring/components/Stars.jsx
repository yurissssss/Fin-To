import React from 'react';
import star from '../../../assets/imgs/icons/icon_star.png';

export default function Stars({ value = 0, size = 16 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <img
          key={i}
          src={star}
          alt="star"
          style={{ width: size, height: size }}
          className={i < Math.floor(value) ? 'opacity-100' : 'opacity-30'}
        />
      ))}
    </div>
  );
}
