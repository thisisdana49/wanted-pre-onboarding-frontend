import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn }) => {
  const handleLogout = () => {
    // 로그아웃 처리 로직 구현 예정
  };

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Link to="/todo">Todo</Link>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;