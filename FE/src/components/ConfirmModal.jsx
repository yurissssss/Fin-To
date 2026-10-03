import React, { useState } from 'react';
import Button from './Button';

const BasicModal = ({
  title,
  onClick,
  bgOpacity = 100, // 배경 투명도 조절
}) => {
  // 모달 open 상태
  const [isOpen] = useState(true);
  if (!isOpen) return null;

  return (
    // 반투명 배경
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/50 z-50">
      {/* 모달 박스 */}
      <div
        className="relative w-full max-w-md rounded-xl p-6 bg-white"
        style={{ backgroundColor: `rgba(255, 255, 255, ${bgOpacity / 100})` }}
      >
        {/* 제목 */}
        <div className="flex justify-between pb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>

        {/* 하단 버튼 세트 */}
        <div className="flex pt-4">
          <Button size="large" className="w-full" onClick={onClick}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BasicModal;
