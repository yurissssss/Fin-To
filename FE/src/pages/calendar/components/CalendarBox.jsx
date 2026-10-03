import React, { useState, useRef, useEffect } from "react";
import { Calendar } from "@heroui/react";
import TimeBox from "./TimeBox";
import RegisterBox from './RegisterBox';

export default function CalendarBox() {
  const [selectedDate, setSelectedDate] = useState(null);
  const calendarRef = useRef(null);
  const [calendarSize, setCalendarSize] = useState({ width: 0, height: 0 });

  const availableWeekdays = [2, 4, 6];

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const checkUnavailable = (date) => {
    const jsDate = new Date(date.toString());
    const weekday = (jsDate.getDay() + 6) % 7;
    return !availableWeekdays.includes(weekday);
  };

  // 캘린더 크기 측정
  useEffect(() => {
    if (calendarRef.current) {
      const rect = calendarRef.current.getBoundingClientRect();
      setCalendarSize({ width: rect.width, height: rect.height });
    }
  }, []);

  return (
    <>
    <div className="flex gap-6">
      <div ref={calendarRef}>
        <Calendar
          value={selectedDate ?? undefined}
          onChange={handleDateChange}
          isDateUnavailable={checkUnavailable}
        />
      </div>

      {selectedDate && (
  <div style={{ width: calendarSize.width, height: calendarSize.height }}>
    <div className="flex flex-col gap-4">
      <TimeBox strattime="10:00" endtime="11:00" />
      <RegisterBox />
    </div>
  </div>
)}

      {!selectedDate && (
        <div style={{ width: calendarSize.width, height: calendarSize.height }}>
          <div className="mt-2 text-sm text-gray-700">
          날짜를 선택하세요
        </div>
        </div>
      )}
    </div></>
  );
}






