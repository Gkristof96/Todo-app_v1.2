import React from "react";

const SignUp = () => {
  const handleSignUp = () => {
    console.log("SignUp");
  };
  return (
    <div>
      <button onClick={() => handleSignUp()}>SignUp</button>
    </div>
  );
};

export default SignUp;
