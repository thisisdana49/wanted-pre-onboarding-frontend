import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import TodoPage from './pages/TodoPage'
import './App.css';

const App = () => {
  const isLoggedIn = false;

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={isLoggedIn ? <Navigate to="/todo" /> : <SignInPage />} />
        <Route path="/signup" element={isLoggedIn ? <Navigate to="/todo" /> : <SignUpPage />} />
        <Route path="/todo" element={!isLoggedIn ? <Navigate to="/signin" /> : <TodoPage />} />
      </Routes>
    </Router>
  );
};

export default App;