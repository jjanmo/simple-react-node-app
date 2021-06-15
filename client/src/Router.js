import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Join from './pages/Join';
import Login from './pages/Login';

const AppRouter = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/join" component={Join} />
  </Router>
);
export default AppRouter;
