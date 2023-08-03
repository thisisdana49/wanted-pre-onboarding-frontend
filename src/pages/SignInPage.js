import React from 'react';
import Header from '../components/Header';
import SignIn from '../components/SignIn';

const SignInPage = () => {
  return (
    <div>
      <Header />
      <div className="page-container">
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;