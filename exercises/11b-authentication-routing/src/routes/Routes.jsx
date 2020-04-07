import React from 'react';
import App from '../App';
import { Movies } from '../View/Movies';
import { Route, Switch } from 'react-router-dom';
import { CookieProvider } from '../Context/SessionContext';

export const Routes = () => {
  return (
    <CookieProvider>
      <Switch>
        <Route exact path='/' component={App}/>
        <Route exact path='/Cookie/Movies' component={Movies} />
      </Switch>
    </CookieProvider>
  )
}
  