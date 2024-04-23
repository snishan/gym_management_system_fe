import React from "react";
import { SignInForm } from "../../components/SignInForm";
import '../../assets/scss/signIn.scss'

const SignInPage = () => {
  return (
    <div className="signin-page">
      <SignInForm />
    </div>
  );
};

export default SignInPage;
