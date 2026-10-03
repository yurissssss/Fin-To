import React, { useState, useEffect } from 'react';
import ApplicationHistoryTable from './components/ApplicationHistoryTable';
import ApplicantUserDetailPage from './PG10_ApplicantUserDetailPage';
import { getRegisterHistory } from '../../../api/mentor/RegisterHistory';

// const initialRows = [
//   {
//     key: '1',
//     applicant: '박사은',
//     email: 'ajsklaoao@naver.com',
//     mentoring_title: '이체 멘토링',
//     status: '수락 대기',
//     date: '2025.09.11',
//     time: '13:00~14:00',
//   },
//   {
//     key: '2',
//     applicant: '신유리',
//     email: 'ajsklaoao@naver.com',
//     mentoring_title: '이체 멘토링',
//     status: '수락 완료',
//     date: '2025.09.11',
//     time: '14:00~15:00',
//   },
//   {
//     key: '3',
//     applicant: '정동혁',
//     email: 'ajsklaoao@naver.com',
//     mentoring_title: '이체 멘토링',
//     status: '거절',
//     date: '2025.09.11',
//     time: '15:00~16:00',
//   },
//   {
//     key: '4',
//     applicant: '박계현',
//     email: 'ajsklaoao@naver.com',
//     mentoring_title: '이체 멘토링',
//     status: '취소',
//     date: '2025.09.11',
//     time: '16:00~17:00',
//   },
//   {
//     key: '5',
//     applicant: '김재균',
//     email: 'ajsklaoao@naver.com',
//     mentoring_title: '이체 멘토링',
//     status: '멘토링 완료',
//     date: '2025.09.11',
//     time: '17:00~18:00',
//   },
//   {
//     key: '6',
//     applicant: '김동연',
//     email: 'ajsklaoao@naver.com',
//     mentoring_title: '이체 멘토링',
//     status: '멘토링 완료',
//     date: '2025.09.11',
//     time: '17:00~18:00',
//   },
// ];
const STATUS_MAPPING = {
  PENDING: '수락 대기',
  APPROVED: '수락 완료',
  REJECTED: '거절',
  CANCELLED: '취소',
  COMPLETED: '멘토링 완료',
};

export default function RegisterHistoryPage() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setIsLoading(true);
        const data = await getRegisterHistory();

        const formattedData = data.map((item) => ({
          key: item.meetingId,
          applicant: item.name,
          email: item.email,
          mentoring_title: item.title,
          status: STATUS_MAPPING[item.status] || item.status,
          date: 'N/A',
          time: 'N/A',
        }));

        setApplications(formattedData);
      } catch (err) {
        setError('신청 내역을 불러오는 데 실패했습니다.');
        console.error('신청 내역을 불러오는 데 실패했습니다.', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleUpdateStatus = (key, status) => {
    setApplications((prev) =>
      prev.map((app) => (app.key === key ? { ...app, status } : app))
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>신청 내역을 불러오는 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  if (selectedRow) {
    const user = applications.find((app) => app.key === selectedRow.key);
    return (
      <ApplicantUserDetailPage
        user={user}
        onBack={() => setSelectedRow(null)}
        onUpdateStatus={handleUpdateStatus}
      />
    );
  }

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">신청 내역</h1>
      <ApplicationHistoryTable
        rows={applications}
        onRowClick={setSelectedRow}
      />
    </div>
  );
}
