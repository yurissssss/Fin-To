import React from 'react';
import { Chip } from '@heroui/react';
import DetailGrid from './DetailGrid';

const statusColorMap = {
  '수락 대기': 'warning',
  '수락 완료': 'success',
  거절: 'danger',
  취소: 'default',
  '멘토링 완료': 'primary',
};

export default function ApplicantUserDetail({ user, showStatusChip = false }) {
  if (!user) {
    return null;
  }

  const detailItems = [
    { label: '이름', value: user.applicant },
    { label: '이메일', value: user.email },
    { label: '날짜', value: user.date },
    { label: '시간', value: user.time },
  ];

  return (
    <div className="p-8 border rounded-2xl border-neutral-200">
      <div className="flex  mb-6">
        <div className="font-bold text-lg mr-6">신청자 정보</div>
        {showStatusChip && (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="md"
            variant="flat"
          >
            {user.status}
          </Chip>
        )}
      </div>
      <DetailGrid items={detailItems} />
    </div>
  );
}
