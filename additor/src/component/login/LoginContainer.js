import React, { useState, useContext } from 'react';
import LoginPresenter from './LoginPresenter';
import { postLogin } from '../../api/backendAPI';
import AuthContext from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

const initialFormData = {
  username: '',
  password: '',
};
function LoginContainer() {
  const [loginData, setLoginData] = useState(initialFormData);
  const { setAuth } = useContext(AuthContext);
  const history = useHistory();

  function handleChange(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(loginData);
    try {
      // const {
      //   data: {
      //     curUser: { username },
      //   },
      // } = await postLogin({ loginData });
      await postLogin({ loginData })
        // .then((data) => setAuth(true, data.data.username))
        .then((data) => {
          setAuth(true, data.data.username);
          localStorage.setItem('auth', true);
          localStorage.setItem('username', data.data.username);
          localStorage.setItem('contents', data.data.contents);
        })
        .then(() => history.push('/editor'))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      console.log('error message should be put');
    }
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
