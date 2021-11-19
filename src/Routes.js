import WritePage from 'Pages/WritePage/WritePage';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from 'Pages/ListPage/ListPage';
import DetailPage from 'Pages/DetailPage/DetailPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/write" component={WritePage} />
        <Route exact path="/" component={ListPage} />
        <Route path="/detail" component={DetailPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
