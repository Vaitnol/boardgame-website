import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    retrun (
      <Switch>
        {/* Todo */}
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Redirect to="/" />
    </Switch> 
  )
}