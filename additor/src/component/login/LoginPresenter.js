import React from 'react';

function LoginPresenter({ loginData, handleChange, handleSubmit }) {
  return (
    <div className='login container'>
      <h1 className='text-center'>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='username'
          className='form-control'
          placeholder='Username'
          value={loginData.username}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          className='form-control'
          placeholder='Password'
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <a className='btn btn-lg btn-primary btn-block' to={'/'}>
          로그인
        </a>
      </form>
      <p className='text-help text-center'>
        계정이 필요하신가요? <a>계정 만들기</a>
      </p>
      <style jsx global>{`
        .login form {
          max-width: 320px;
          padding: 8px;
          margin: 0 auto;
        }
        .login input.form-control {
          font-size: 16px;
          height: auto;
          padding: 10px;
        }
        .login button.btn {
          background-color: #3b5999;
          color: #fffffe;
          font-weight: 800;
          border-color: unset;
          margin-top: 10px;
        }
        .login .text-help {
          margin-top: 10px;
        }
        .login .new-account {
          font-weight: 900;
          color: #3a5999;
        }
      `}</style>
    </div>
  );
}

export default LoginPresenter;
