import React, { useState } from 'react';
import LoginPresenter from './LoginPresenter';

const initialFormData = {
  username: '',
  password: '',
};
function LoginContainer() {
  const [loginData, setLoginData] = useState(initialFormData);

  function handleChange(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginData);
  }
  return (
    <div>
      <LoginPresenter
        loginData={loginData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default LoginContainer;
