import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function AuthRoute({ authenticated, Component, render, ...rest }) {
  const { auth } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
}

export default AuthRoute;
