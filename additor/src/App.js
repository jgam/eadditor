import React, { useContext } from 'react';
import 'normalize.css';
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
  console.log('auth is ', auth);
  return (
    <Router>
      <AuthProvider>
        <div className='App'>
          <Switch>
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
          </Switch>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
