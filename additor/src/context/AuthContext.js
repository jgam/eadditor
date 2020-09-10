import { createContext } from 'react';

const AuthContext = createContext({
  auth: false,
  username: '',
  contents: '',
  setAuth: () => {},
});

export default AuthContext;
