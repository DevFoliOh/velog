import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListPage from 'Pages/ListPage';
import WritePage from 'Pages/WritePage/WritePage';
import DetailPage from 'Pages/DetailPage/DetailPage';
import EditPage from 'Pages/EditPage';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route path="/write" component={WritePage} />
        <Route path="/detail" component={DetailPage} />
        <Route path="/edit" component={EditPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
