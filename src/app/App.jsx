import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import ListPage from '../containers/ListPage';
import DetailPage from '../containers/DetailPage';

export default function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <h1>Some Star Trek Characters</h1>
        </Link>
      </header>
      <Switch>
        <Route
          path="/"
          exact
          render={routerProps => <ListPage {...routerProps} />}
        />
        <Route 
          path="/:id"
          exact
          render={routerProps => <DetailPage {...routerProps} />}
        />
      </Switch>
    </Router>
  );
}
