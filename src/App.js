import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TodoPage from './pages/TodoPage';

const App = () => {
  const isLoggedIn = !!localStorage.getItem('accessToken');

  const AuthRedirect = () => {
    return isLoggedIn ? <Navigate to="/todo" /> : null;
  };

  const ProtectedRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/signin" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<AuthRedirect />} />
        <Route path="/signup" element={<AuthRedirect />} />

        <Route path="/todo" element={<ProtectedRoute element={<TodoPage />} />} />
      </Routes>
    </Router>
  );
};

export default App;
