import React, { useContext } from 'react';
import { CookieContext } from '../Context/SessionContext';
import { Route, Redirect } from 'react-router-dom';

export const ProtectedRoute = ({
  component: Component, 
    ...rest

}) => {

  const [uuid] = useContext(CookieContext);

  return (
    <Route 
      {...rest}
      render={propsFromReactRouter => {
        return uuid ? (
          <Component {...propsFromReactRouter}/>
        ) : (
          <Redirect 
            to='/'
            {...propsFromReactRouter}
            {...rest}  
          />
        )
      }}
    />
  )
}