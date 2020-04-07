import React from 'react';
import App from '../App';
import { Movies } from '../View/Movies';
import { Route, Switch } from 'react-router-dom';
import { CookieProvider } from '../Context/SessionContext';
import { ProtectedRoute } from '../Components/ProtectedRoute';

export const Routes = () => {
  return (
    <CookieProvider>
      <Switch>
        <Route exact path='/' component={App}/>
        <ProtectedRoute exact path='/Cookie/Movies' component={Movies} />
      </Switch>
    </CookieProvider>
  )
}
  