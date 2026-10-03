import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MentoringCard from './MentoringCard';
import { fetchMentorList } from '../../../api/mentoring/MentoringListApi';

function MentorList({ query = '', className = '' }) {
  const [mentoringList, setMentoringList] = useState([]);

  useEffect(() => {
    async function loadMentors() {
      try {
        const response = await fetchMentorList();
        setMentoringList(response.content || []);
      } catch (e) {
        console.error(e);
        setMentoringList([]);
      }
    }
    loadMentors();
  }, []);

  const q = (query || '').toLowerCase().trim();
  const filteredList = mentoringList.filter((item) =>
    (item.title || '').toLowerCase().includes(q)
  );

  return (
    <div
      className={`w-3/5 max-w-6xl mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 ${className}`}
    >
      {filteredList.map((item) => (
        <Link
          key={item.mentoringId}
          to={`/details/${item.mentoringId}`}
          className="block"
        >
          <MentoringCard
            title={item.title}
            name={item.name}
            emoji={item.emoji}
            languages={item.languages}
            rating={item.rating}
            mentees={item.mentees}
          />
        </Link>
      ))}
    </div>
  );
}

export default MentorList;
