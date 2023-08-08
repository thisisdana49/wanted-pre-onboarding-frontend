import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css'

const Header = ({ isLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    window.location.reload();
  };

  const location = useLocation();

  return (
    <header className="header-container">
      <div></div>
      <div>
        <Link to="/todo">Todo</Link>
      </div>
      {isLoggedIn ? (
        <div onClick={handleLogout}>Logout</div>
      ) : (
        <div>
          {location.pathname === '/signin' ? (
            <Link to="/signup">Sign Up</Link>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;