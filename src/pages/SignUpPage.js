import React from 'react';
import Header from '../components/Header';
import SignUp from '../components/SignUp';

const SignUpPage = () => {
  return (
    <div>
      <Header />
      <div className="page-container">
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;