import React from "react";

const handleLogin = () => {
  console.log("login");
};

const SignIn = () => {
  return (
    <div>
      <button onClick={() => handleLogin()}>SignIn</button>
    </div>
  );
};

export default SignIn;
