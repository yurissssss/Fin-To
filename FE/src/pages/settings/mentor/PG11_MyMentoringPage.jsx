import React, { useEffect, useState } from 'react';
import MentoringCard from '../../mentoring/components/MentoringCard';
import Button from '../../../components/Button';
import EditMentoringPage from './PG13_EditMentoringPage';

export default function MyMentoringPage() {
  const navigate = useNavigate();
  const currentUser = 'Saeun Park';
  const [allMentoringsState, setAllMentoringsState] = useState([]);

  useEffect(() => {
    // Dummy API call to fetch mentorings
    getAllMentorings().then(setAllMentoringsState);
  }, []);

  const myMentorings = allMentoringsState.filter(
    (mentoring) => mentoring.name === currentUser
  );

  const [page, setPage] = useState(0);
  const pageSize = 3;
  const hasMore = (page + 1) * pageSize < myMentorings.length;

  const displayedMentorings = myMentorings.slice(0, (page + 1) * pageSize);

  const handleLoadMore = () => {
    // To-Do: 실제 백엔드 API 호출 로직으로 대체
    setPage((prevPage) => prevPage + 1);
  };


  const handleCreateNew = () => {
    navigate('/settings/create-mentoring');
  };

  const [selectedRow, setSelectedRow] = React.useState(null);

  if (selectedRow) {
    return (
      <EditMentoringPage
        mentoringId={selectedRow.mentoringId}
        onBack={() => setSelectedRow(null)}
      />
    );
  }


  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-semibold text-gray-800">나의 멘토링</h1>
        <Button size="medium" onClick={handleCreateNew}>
          새로 만들기
        </Button>
      </div>
      {myMentorings.length > 0 ? (
        <div className="space-y-4">
          {displayedMentorings.map((mentoring) => (
            <button
              key={mentoring.mentoringId}
              type="button"
              className="block w-full text-left"
              onClick={() => setSelectedRow(mentoring)}
            >
              <MentoringCard
                title={mentoring.title}
                name={mentoring.name}
                languages={mentoring.languages}
                rating={mentoring.ratings}
                mentees={mentoring.mentees}
              />
            </button>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">아직 등록된 나의 멘토링이 없습니다.</p>
      )}
      {hasMore && (
        <div className="mt-6 flex justify-center">
          <Button size="large" color="white" onClick={handleLoadMore}>
            더보기
          </Button>
        </div>
      )}
    </div>
  );
}
// Dummy API replacement for fetching mentorings
export const getAllMentorings = async () => allMentorings;
const allMentorings = [
  {
    mentoringId: 1,
    title: '내가 알려줄게',
    name: 'Tom',
    languages: ['Japanese', 'English', 'Chinese'],
    ratings: 4.9,
    mentees: 100,
  },
  {
    mentoringId: 2,
    title: '내가 다른거도 알려줄게',
    name: 'Tom',
    languages: ['Japanese', 'English', 'Chinese'],
    ratings: 4.8,
    mentees: 50,
  },
  {
    mentoringId: 3,
    title: '내가 이것도 알려줄게',
    name: 'Tom',
    languages: ['Japanese', 'English', 'Chinese'],
    ratings: 4.1,
    mentees: 30,
  },
  {
    mentoringId: 4,
    title: '내가 알려줄게',
    name: 'Saeun Park',
    languages: ['Japanese', 'English', 'Chinese'],
    ratings: 4.9,
    mentees: 100,
  },
  {
    mentoringId: 5,
    title: '내가 다른거도 알려줄게',
    name: 'Saeun Park',
    languages: ['Japanese', 'English'],
    ratings: 4.8,
    mentees: 50,
  },
  {
    mentoringId: 6,
    title: '내가 이것도 알려줄게',
    name: 'Saeun Park',
    languages: ['Japanese', 'English', 'Hungarian'],
    ratings: 4.1,
    mentees: 30,
  },
  {
    mentoringId: 7,
    title: '내가 알려줄게',
    name: 'Saeun Park',
    languages: ['Japanese', 'English', 'Chinese'],
    ratings: 4.9,
    mentees: 100,
  },
  {
    mentoringId: 8,
    title: '내가 다른거도 알려줄게',
    name: 'Saeun Park',
    languages: ['Japanese', 'English'],
    ratings: 4.8,
    mentees: 50,
  },
  {
    mentoringId: 9,
    title: '내가 이것도 알려줄게',
    name: 'Saeun Park',
    languages: ['Japanese', 'English', 'Hungarian'],
    ratings: 4.1,
    mentees: 30,
  },
  {
    mentoringId: 10,
    title: '내가 알려줄게',
    name: 'Saeun Park',
    languages: ['Japanese', 'English', 'Chinese'],
    ratings: 4.9,
    mentees: 100,
  },
];
