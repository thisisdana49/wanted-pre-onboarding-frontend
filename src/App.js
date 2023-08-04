import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header'
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TodoPage from './pages/TodoPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));

  const AuthRedirect = ({element}) => {
    return isLoggedIn ? <Navigate to="/todo" /> : element;
  };

  const ProtectedRoute = ({ element }) => {
    return isLoggedIn ? element : <Navigate to="/signin" />;
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} />
      
      <Routes>
        <Route path="/signin" element={<AuthRedirect element={<SignInPage />} />} />
        <Route path="/signup" element={<AuthRedirect element={<SignUpPage />}/>} />

        <Route path="/todo" element={<ProtectedRoute element={<TodoPage />} />} />
      </Routes>
    </Router>
  );
};

export default App;
