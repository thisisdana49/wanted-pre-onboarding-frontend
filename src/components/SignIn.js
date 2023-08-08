import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignIn.css'

const SignIn = ({ onLogin }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  const isEmailValid = email.includes('@');
  const isPasswordValid = password.length >= 8;
  const isFormValid = isEmailValid && isPasswordValid;


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
        localStorage.setItem('accessToken', response.data.access_token);
        onLogin();
        navigate('/todo');
      })
      .catch((error) => {
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
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}            
            required
          />
          {isEmailFocused && !isEmailValid && (
            <p className="error">올바른 이메일 형식이 아닙니다.</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input
            data-testid="password-input"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}            
            required
          />
          {isPasswordFocused && !isPasswordValid && (
            <p className="error">비밀번호는 8자 이상이어야 합니다.</p>
          )}
        </div>
        <button 
          disabled={!isFormValid}
          data-testid="signin-button"
          type="submit">로그인
        </button>
      </form>
    </div>
  );
};

export default SignIn;
