import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
// import SignInPage from './pages/SignInPage';
// import SignUpPage from './pages/SignUpPage';
import TodoPage from './pages/TodoPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const AuthRedirect = ({ element }) => {
    return isLoggedIn ? <Navigate to="/todo" /> : element;
  };

  const ProtectedRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/signin" />;
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/signin" element={<AuthRedirect element={<SignIn onLogin={handleLogin} />} />} />
        <Route path="/signup" element={<AuthRedirect element={<SignUp onLogin={handleLogin} />} />} />

        <Route path="/todo" element={<ProtectedRoute element={<TodoPage onLogout={handleLogout} />} />} />
      </Routes>
    </Router>
  );
};

export default App;
