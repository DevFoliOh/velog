import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from 'Pages/ListPage/ListPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
