import React from 'react';
import { useParams } from 'react-router-dom';

import { fetchMentorDetails } from '../../api/mentoring/MentoringDetailsApi';

import DetailsCard from './components/DetailsCard';
import { MentorSummaryCard } from './components/MentorSummaryCard';

export default function MentoringDetailsPage() {
  const { mentoringId } = useParams();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (mentoringId) {
      fetchMentorDetails(mentoringId).then(setData);
    }
  }, [mentoringId]);

  if (!data) return <div>로딩 중...</div>;

  return (
    <div className="min-h-screen w-full">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="lg:col-span-2">
          <DetailsCard data={data} />
        </section>
        <aside className="lg:col-span-1">
          <MentorSummaryCard data={data} />
        </aside>
      </div>
    </div>
  );
}
