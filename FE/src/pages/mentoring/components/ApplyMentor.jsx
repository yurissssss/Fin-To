import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../../../assets/imgs/system/system_background.png';
import Button from '../../../components/Button';

export default function ApplyMentor({ className = '' }) {
  const navigate = useNavigate();

  return (
    <div
      className={`rounded-2xl flex justify-between items-center pl-5 pr-4 py-3.5 ${className}`}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="text-left text-sm leading-4">
        <p className="font-bold text-black">직접 멘토가 되어</p>
        <p className="font-bold text-black">멘티를 도와주세요!</p>
      </div>
      <Button
        size="small"
        className="font-semibold text-xs"
        onClick={() => navigate('/settings/mentor-register')}
      >
        멘토 신청
      </Button>
    </div>
  );
}
