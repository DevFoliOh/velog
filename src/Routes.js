import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
