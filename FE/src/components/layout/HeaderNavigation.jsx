import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imgs/system/system_logo.png';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-8 h-16 border border-gray-200 rounded-full">
      {/* 좌측 로고 */}
      <div className="flex-1 flex items-center">
        <Link to="/">
          <img src={Logo} alt="FinTo Logo" className="h-8 w-16" />
        </Link>
      </div>

      {/* 중앙 탭 */}
      <nav className="flex-1 flex justify-center space-x-6">
        <Link to="/">멘토링</Link>
        <Link to="/calendar">일정</Link>
      </nav>

      {/* 우측 탭 */}
      <div className="flex-1 flex justify-end space-x-6">
        <button>언어 선택</button>
        <Link to="/settings/profile">프로필</Link>
      </div>
    </header>
  );
};

export default Header;
