import React from 'react';
import { useNavigate } from 'react-router-dom';
import ApplicantUserDetail from '../../../components/ApplicantUserDetail';
import ButtonSet from '../../../components/ButtonSet';

export default function ApplicantUserDetailPage({
  user,
  onBack,
  onUpdateStatus,
}) {
  const navigate = useNavigate();

  if (!user) {
    return null;
  }

  const handleAccept = () => {
    onUpdateStatus(user.key, '수락 완료');
    navigate('/settings/register-history');
  };

  const handleReject = () => {
    onUpdateStatus(user.key, '거절');
    navigate('/settings/register-history');
  };

  return (
    <div>
      <div className="flex mb-4">
        <button onClick={onBack} className="mr-2 text-xl">
          &larr;
        </button>
        <h1 className="text-xl font-semibold">신청 내역</h1>
      </div>

      <ApplicantUserDetail user={user} showStatusChip={true} />

      {user.status === '수락 대기' && (
        <ButtonSet
          className="mt-8"
          size="large"
          leftText="거절"
          rightText="수락"
          onCancel={handleReject}
          onConfirm={handleAccept}
        />
      )}
    </div>
  );
}
