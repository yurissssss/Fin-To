import React, { useState } from 'react';

const ScheduleTable = () => {
  // 요일 배열 (API 형식에 맞게 영문 요일도 포함)
  const days = ['월', '화', '수', '목', '금', '토', '일'];

  // 시간 배열 (0시부터 23시까지)
  const hours = Array.from({ length: 24 }, (_, i) => i);

  // 선택된 시간 슬롯을 저장하는 state (Set 사용으로 중복 방지)
  const [selectedSlots, setSelectedSlots] = useState(new Set());

  // 시간 슬롯 토글 함수
  const toggleSlot = (day, hour) => {
    const slotKey = `${day}-${hour}`;
    const newSelectedSlots = new Set(selectedSlots);

    if (selectedSlots.has(slotKey)) {
      newSelectedSlots.delete(slotKey);
    } else {
      newSelectedSlots.add(slotKey);
    }

    setSelectedSlots(newSelectedSlots);
  };

  // 선택된 슬롯을 날짜별로 그룹화하고 시간 순으로 정렬하는 로직
  const sortedSlots = Array.from(selectedSlots).sort();
  const groupedSlots = {};

  sortedSlots.forEach((slotKey) => {
    const [day, hour] = slotKey.split('-');
    if (!groupedSlots[day]) {
      groupedSlots[day] = [];
    }
    groupedSlots[day].push(parseInt(hour, 10));
  });

  return (
    <div className="max-w-4xl mx-auto">
      {/* 헤더 - 요일 */}
      <div className="grid grid-cols-8 border border-neutral-200 rounded-t-xl pr-4">
        <div className="h-8"></div> {/* 시간 컬럼을 위한 빈 공간 */}
        {days.map((day) => (
          <div
            key={day}
            className="text-center font-light text-neutral-500 py-2"
          >
            {day}
          </div>
        ))}
      </div>

      {/* 시간표 그리드 - 24x8 */}
      <div className="pt-4 pr-4 grid grid-cols-8 gap-1 border border-neutral-200 rounded-b-xl max-h-96 overflow-y-auto">
        {hours.map((hour) => (
          <React.Fragment key={hour}>
            {/* 첫 번째 열 - 시간 표시 */}
            <div className="relative h-12 border border-white">
              <span className="absolute top-1 right-1 font-light text-neutral-500">
                {hour}:00
              </span>
            </div>

            {/* 각 요일별 시간 슬롯 */}
            {days.map((day) => {
              const slotKey = `${day}-${hour}`;
              const isSelected = selectedSlots.has(slotKey);

              return (
                <button
                  key={`${day}-${hour}`}
                  onClick={() => toggleSlot(day, hour)}
                  className="h-12 border-white border-2 transition-colors duration-150 hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-inset"
                >
                  <div
                    className={`
                      w-full h-full rounded-xl transition-colors duration-150
                      ${
                        isSelected
                          ? 'bg-secondary border-neutral-700'
                          : 'bg-neutral-100'
                      }
                    `}
                  />
                </button>
              );
            })}
          </React.Fragment>
        ))}
      </div>

      {/* 선택된 시간 슬롯 표시 */}
      {selectedSlots.size > 0 && (
        <div className="mt-4 p-4 bg-neutral-50 rounded-lg">
          <h3 className="font-medium mb-2">선택된 시간</h3>
          <div className="text-sm ">
            {days.map((day) => {
              const hours = groupedSlots[day];
              if (!hours || hours.length === 0) return null;

              return (
                <div key={day} className="mb-1 flex items-center flex-wrap">
                  <span className="font-semibold text-neutral-700 mr-2">
                    {day}요일:
                  </span>
                  {hours.map((hour, index) => (
                    <span
                      key={index}
                      className="inline-block bg-white px-2 py-1 rounded mr-2 mb-1"
                    >
                      {hour}:00 - {hour + 1}:00
                    </span>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleTable;
