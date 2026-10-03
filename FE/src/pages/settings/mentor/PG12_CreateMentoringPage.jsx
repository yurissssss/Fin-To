import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScheduleTable from './components/ScheduleTable';
import TwoInputBox from './components/TwoInputBox';
import ButtonSet from '../../../components/ButtonSet';

export default function CreateMentoringPage() {
  const navigate = useNavigate();

  const handleSave = () => {
    navigate('/settings/my-mentoring');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <TwoInputBox
        pageTitle="새 멘토링 만들기"
        title="멘토링 제목"
        content="멘토링 상세 정보"
        onBack={handleCancel}
        className="mb-8"
      />
      <div className="mt-8">
        <div className="mb-2">스케줄 설정</div>
        <ScheduleTable />
      </div>
      <ButtonSet
        size="large"
        leftText="취소"
        rightText="저장"
        onCancel={handleCancel}
        onConfirm={handleSave}
        className="mt-8"
      ></ButtonSet>
    </div>
  );
}
