import React, { useState } from 'react';
import ButtonSet from './ButtonSet';

const BasicModal = ({
  title,
  children,
  onClick1,
  onClick2,
  leftText = 'Cancel',
  rightText = 'Confirm',
  bgOpacity = 100, // 배경 투명도 조절
}) => {
  // 모달 open 상태
  const [isOpen, setIsOpen] = useState(true);
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
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl font-semibold"
          >
            ×
          </button>
        </div>

        {/* 본문 */}
        <div className="py-4">{children}</div>

        {/* 하단 버튼 세트 */}
        <div className="flex pt-4">
          <ButtonSet
            size="large"
            className="w-full"
            leftText={leftText}
            rightText={rightText}
            onClick1={onClick1}
            onClick2={onClick2}
          />
        </div>
      </div>
    </div>
  );
};

export default BasicModal;
