import React from 'react';
import { Chip } from '@heroui/react';
import { Clock, UserRound } from 'lucide-react';
import Button from '../../../components/Button';
import profileImg from '../../../assets/imgs/profiles/mentee1.png';

export const MentorSummaryCard = ({ data }) => (
  <aside className="sticky top-6 w-full">
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      <div className="flex items-start gap-4">
        {/* 왼쪽: 프로필 이미지 */}
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="profile"
            className="size-13 rounded-full object-cover"
          />
        </div>
        {/* 오른쪽: 이름 / 국기 / 언어 칩 */}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-900">{data.name}</span>
            <span>{data.emoji}</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {data.languages.map((lang, index) => (
              <Chip
                key={index}
                size="sm"
                className="bg-neutral-200 text-neutral-900 text-xs px-3 py-1"
              >
                {lang}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 메타 정보 */}
      <div className="mt-3 flex flex-col gap-2 text-sm text-neutral-600">
        <div className="flex items-center gap-2">
          <Clock className="size-4" />
          <span>1시간</span>
        </div>
        <div className="flex items-center gap-2">
          <UserRound className="size-4" />
          <span>1회 최대 1인</span>
        </div>
      </div>
      <Button className="w-full mt-3 font-semibold">신청하기</Button>
    </div>
  </aside>
);
