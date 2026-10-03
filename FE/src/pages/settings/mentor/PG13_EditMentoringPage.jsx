import React from 'react';
import TwoInputBox from './components/TwoInputBox';
import Button from '../../../components/Button';

export default function EditMentoringPage({ mentoringId, onBack }) {
  // mock data
  const mockMentoring = {
    code: 'S200',
    message: 'Success',
    data: {
      mentoringId: 1,
      title: '예금 생성 내가 알려줄게',
      content: '현재 KB 국민은행원으로 재직중, 한국 온지 3년차',
      profileImg: 'asdf',
      name: 'MentorName',
      nation: 'United States',
      languages: ['English', 'Korean'],
      mentees: 100,
    },
    errors: null,
    timestamp: '2025-07-20T15:05:49.475',
  };

  return (
    <div>
      <TwoInputBox
        title="제목"
        originTitle={mockMentoring.data.title}
        content="본문"
        originContent={mockMentoring.data.content}
        onBack={onBack}
      />

      <div className="mt-8 flex justify-end">
        <Button onClick={onBack}>수정하기</Button>
      </div>
    </div>
  );
}
