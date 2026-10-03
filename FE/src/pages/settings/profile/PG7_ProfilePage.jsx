import React, { useState } from 'react';
import Profile from '../../../assets/imgs/profiles/mentee1.png';
import Button from '../../../components/Button';
import UserProfileForm from '../../../components/UserProfileForm';
import ConfirmModal from '../../../components/ConfirmModal';

// To-Do : 백엔드에서 받을 프로필 데이터
const profileData = {
  profileImg: Profile,
  name: 'Saeun Park',
  nation: 'Korea',
  languages: ['Korean', 'English'],
};

export default function ProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModify = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-6 text-gray-800">내 프로필</h1>

      <UserProfileForm profileData={profileData} />

      <div className="flex justify-end mt-4">
        <Button onClick={handleModify}>수정</Button>
      </div>

      {isModalOpen && (
        <ConfirmModal
          title="프로필 수정이 완료되었습니다."
          onClick={handleModalClose}
        />
      )}
    </div>
  );
}
