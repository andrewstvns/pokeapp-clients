import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Home, Error404 } from '../pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact="/" component={Home} />
        <Route exact="*" component={Error404} />
      </Switch>
    </Router>
  );
};

export default App;