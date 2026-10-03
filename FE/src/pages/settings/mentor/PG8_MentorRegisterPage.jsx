import React, { useState } from 'react';
import Profile from '../../../assets/imgs/profiles/mentee1.png';
import UserProfileForm from '../../../components/UserProfileForm';
import { Checkbox } from '@heroui/react';
import Button from '../../../components/Button';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../../../components/ConfirmModal';

// To-Do : 백엔드에서 받을 프로필 데이터
const profileData = {
  profileImg: Profile,
  name: 'Saeun Park',
  nation: 'Korea',
  languages: ['Korean', 'English'],
};

export default function MentorRegisterPage() {
  const [agreed, setAgreed] = useState(false); // 체크박스 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!agreed) return; // 동의 안 하면 버튼 동작 안 함
    setIsModalOpen(true);
  };

  const onClick = () => {
    setIsModalOpen(false);
    navigate('/settings/my-mentoring');
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6 ">멘토 신청</h1>
      <UserProfileForm profileData={profileData} />

      {/* 자기소개 */}
      <div className="mt-6">
        <div className="text-neutral-500 mb-2">자기소개</div>
        <textarea
          className="w-full h-24 p-4 text-sm border border-neutral-300 rounded-xl resize-none"
          placeholder="자기소개를 입력해주세요"
        ></textarea>
      </div>

      {/* 주의사항 */}
      <div className="my-8">
        <div className="text-neutral-500 mb-2">주의사항</div>
        <div className="bg-neutral-100 w-full p-4 rounded-xl text-sm text-neutral-700 leading-relaxed">
          멘토 활동 시 지켜야 할 사항입니다.
          <br />
          1. 신청자에게 신뢰할 수 있는 정보를 제공해야 합니다.
          <br />
          2. 허위 정보 제공, 무단 지각/결석은 활동 제한 사유가 됩니다.
          <br />
          3. 멘토링 중 알게 된 개인정보는 외부에 공유할 수 없습니다.
          <br />
          4. 모든 멘토링은 상호 존중과 예의를 바탕으로 진행되어야 합니다.
          <br />
          5. 위의 내용을 숙지하고 동의하셔야만 멘토 신청이 가능합니다.
        </div>
        <div className="mt-3 flex justify-end">
          <Checkbox
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
          >
            위 내용을 숙지하였으며, 이에 동의합니다.
          </Checkbox>
        </div>
      </div>

      {/* 버튼 */}
      <Button
        size="large"
        color={agreed ? 'blue' : 'gray'} // 체크 상태에 따라 색상 변경
        onClick={handleSubmit}
      >
        신청하기
      </Button>

      {isModalOpen && (
        <ConfirmModal
          title="멘토 신청에 성공하였습니다."
          onClick={onClick}
        ></ConfirmModal>
      )}
    </div>
  );
}
