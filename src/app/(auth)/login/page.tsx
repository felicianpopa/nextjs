import React from "react";

const Login = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};

export default Login;
