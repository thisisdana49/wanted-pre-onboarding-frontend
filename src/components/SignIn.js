import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    axios
      .post('https://www.pre-onboarding-selection-task.shop/auth/signin', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('로그인 성공:', response.data);
        localStorage.setItem('accessToken', response.data.access_token);
        navigate('/todo');
      })
      .catch((error) => {
        console.error('로그인 실패:', error.response.data);
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
      });
  };

  return (
    <div className="signin-container">
      <h2>로그인</h2>
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
        <button
          data-testid="signin-button"
          type="submit">로그인
        </button>
      </form>
    </div>
  );
};

export default SignIn;
