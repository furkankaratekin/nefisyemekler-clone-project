import React from "react";
import SignIn from "../components/SignIn";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = () => {
  return (
    <>
      <Header></Header>
      <div className="mt-20">
        <SignIn></SignIn>
      </div>

      <div className="mt-56">
        <Footer></Footer>
      </div>
    </>
  );
};

export default LoginPage;
