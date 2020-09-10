import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import AuthContext from '../src/context/AuthContext';
import AuthRoute from './auth/AuthRoute';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

//components
import Login from './component/login';
import AuthProvider from './context/components/AuthProvider';
import Editor from './component/editor';

function App() {
  const { auth } = useContext(AuthContext);
  const localAuth = localStorage.getItem('auth');
  console.log(localAuth);
  console.log('auth is ', auth);
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <div className='App'>
            hello from react
            <AuthRoute
              authenticated={auth || localAuth}
              path='/editor'
              render={(props) => <Editor {...props} />}
            />
            <Route
              exact
              path={'/'}
              component={auth || localAuth ? Editor : Login}
            />
            <Redirect from={'*'} to={'/'} />
          </div>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
