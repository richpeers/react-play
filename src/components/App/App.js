import React from 'react';
import TopNav from './TopNav';
import { Route, Switch, Router, withRouter } from 'react-router-dom'
import './App.scss';
import routes from '../../routes';

const App = () => {
  return (
    <div className="App">
      <TopNav />

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}

    </div>
  );
}

const RouteWithSubRoutes = (route, index) => {
  return (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default App;
