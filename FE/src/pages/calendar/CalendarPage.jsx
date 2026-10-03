import CalendarBox from './components/CalendarBox';
import ApplicantUserDetail from '../../components/ApplicantUserDetail';

export default function CalendarPage() {
  const user = {
    key: "1",
    applicant: "박사은",
    email: "ajsklaoao@naver.com",
    mentoring_title: "이체 멘토링",
    status: "수락 대기",
    date: "2025.09.11",
    time: "13:00~14:00",
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">멘토링 이름</h1>

      <div className="flex gap-6">
        <CalendarBox />
        <div className="h-fit max-h-[300px] overflow-y-auto">
          <ApplicantUserDetail user={user} />
        </div>
      </div>
    </div>
  );
}



