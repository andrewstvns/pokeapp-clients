import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import { Home, Error404 } from '../pages'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="*" component={Error404} />
      </Switch>
    </Router>
  );
};

export default App;