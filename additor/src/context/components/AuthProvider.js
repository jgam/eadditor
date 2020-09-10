//this is provider for auth context

import React, { useState } from 'react';
import AuthContext from '../AuthContext';
//first declare functions and do state or setstate later
//need to use hooks!

const AuthProvider = ({ children }) => {
  //function we will use in child components

  console.log('auth Provider activated');
  const setAuth = (condition, username) => {
    console.log('setAuth activated!');
    setAuthContext((prevState) => {
      if (condition) {
        console.log('changing true');
        return {
          ...prevState,
          auth: true,
          username: username,
        };
      }
      return {
        ...prevState,
        auth: false,
      };
    });
  };

  const initialAuth = {
    auth: false,
    username: '',
    contents: '',
    setAuth,
  };

  const [auth, setAuthContext] = useState(initialAuth);
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
