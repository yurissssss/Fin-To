import React from 'react';
import ProfileImgModify from './ProfileImgModify';
import DetailGrid from './DetailGrid';
import LanguageSection from './LanguageSection';

export default function UserProfileForm({ profileData }) {
  const { profileImg, name, nation, languages } = profileData;

  const profileItems = [
    { label: '이름', value: name },
    { label: '국적', value: nation },
    {
      label: '언어',
      value: <LanguageSection languages={languages} />,
    },
  ];

  return (
    <>
      {/* 프로필 이미지 및 수정 버튼 */}
      <ProfileImgModify initialImg={profileImg} />

      {/* 프로필 정보 */}
      <div className="space-y-4 mb-8">
        <DetailGrid items={profileItems} />
      </div>
    </>
  );
}
