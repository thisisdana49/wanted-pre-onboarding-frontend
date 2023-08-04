import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    axios.post('https://www.pre-onboarding-selection-task.shop/auth/signup', userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log('회원가입 성공:', response.data);
      navigate('/signin');
    })
    .catch((error) => {
      console.error('회원가입 실패:', error.response.data);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    });
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            data-testid="email-input"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input
            data-testid="password-input"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">비밀번호 확인</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <button 
          data-testid="signup-button"
          type="submit">회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUp;