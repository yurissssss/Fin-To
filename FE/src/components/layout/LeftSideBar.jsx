// LeftSideBar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LeftSideBar = () => {
  const location = useLocation();

  const categories = [
    {
      label: '계정',
      items: [{ id: 'profile', label: '프로필', path: '/settings/profile' }],
    },
    {
      label: '멘토링 관리',
      items: [
        {
          id: 'mentor-register',
          label: '멘토 신청',
          path: '/settings/mentor-register',
        },
        {
          id: 'register-history',
          label: '신청 내역',
          path: '/settings/register-history',
        },
        {
          id: 'my-mentoring',
          label: '나의 멘토링',
          path: '/settings/my-mentoring',
        },
      ],
    },
  ];

  return (
    <div className="w-40 h-full p-6 border border-neutral-200 rounded-4xl flex flex-col">
      <nav className="flex-1">
        {categories.map((category) => (
          <div key={category.label} className="mb-12">
            <p className="text-sm font-semibold text-neutral-400 p-2">
              {category.label}
            </p>
            <ul>
              {category.items.map((item) => {
                const isActive = location.pathname === item.path; // Check if current path matches item path
                return (
                  <li key={item.id}>
                    <Link
                      to={item.path} // Use Link component for navigation
                      className={`block p-2 w-full text-left text-lg ${
                        isActive
                          ? 'text-primary hover:bg-neutral-50 font-semibold' // Highlight active link
                          : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default LeftSideBar;
