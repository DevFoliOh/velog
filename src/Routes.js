import WritePage from 'Pages/WritePage/WritePage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/posts" component={WritePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
