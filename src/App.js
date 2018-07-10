import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/Nav';
import NoPage from './pages/404Page/NoPage';
import Home from './pages/HomePage/HomePage';
import Adopt from './pages/Adopt/AdoptPage';
import Surrender from './pages/Surrender/SurrenderPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/surrender' component={Surrender} />
        <Route exact path='/adopt' component={Adopt} />
        <Route component={NoPage} />
      </Switch>
    </div>
    </Router>
);

export default App;
