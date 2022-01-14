import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ListPage, WritePage, DetailPage, EditPage } from 'Pages';

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
