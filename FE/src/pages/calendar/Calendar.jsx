import { Calendar } from "@heroui/react";
import CalendarCard from "./components/CalendarCard";
import { useState } from "react";

export default function CalendarP() {
  // mock 데이터를 state로 관리
  const [mentoringData, setMentoringData] = useState([
    {
      mentoringId: 1,
      time: "10:00~11:00",
      title: "내가 알려줄게",
      status: "pending",
      name: "John Doe",
    },
    {
      mentoringId: 2,
      time: "12:00~13:00",
      title: "내가 알려줄게2",
      status: "approved",
      name: "John Doe",
    },
    {
      mentoringId: 3,
      time: "15:00~16:00",
      title: "내가 알려줄게3",
      status: "completed",
      name: "John Doe",
    },
  ]);

  // 선택된 날짜 관리
  const [date, setDate] = useState(null);

  // 카드 삭제 함수
  const handleDeleteCard = (mentoringId) => {
    setMentoringData(prev =>
      prev.filter(user => user.mentoringId !== mentoringId)
    );
  };

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold mb-4">멘토링 일정</h3>

      <div className="flex gap-4 items-start justify-center">
        {/* 왼쪽 캘린더 */}
        <div className="h-[400px] flex-shrink-0">
          <Calendar
            value={date ?? undefined}
            onChange={(newDate) => setDate(newDate)}
          />
        </div>

        {/* 오른쪽 카드 영역 */}
        <div className="flex flex-col gap-3 max-h-[400px] overflow-y-auto w-full max-w-[500px]">
          {date === null ? (
            <div className="flex justify-center items-center h-full text-gray-500 text-lg">
              날짜를 선택하세요
            </div>
          ) : (
            mentoringData.map(user => (
              <CalendarCard
                key={user.mentoringId}
                name={user.name}
                title={user.title}
                status={user.status}
                time={user.time}
                onClickFunction={() => handleDeleteCard(user.mentoringId)}
                className="h-[80px] text-sm w-full"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}







