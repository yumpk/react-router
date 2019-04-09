import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/notre-histoire';
import './App.css';

class App extends Component {
  render() {
      return (
          <BrowserRouter>
            <div>
              <NavLink exact to="/"> Accueil </NavLink>
              <NavLink to="/notre-histoire"> Histoire </NavLink>

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/notre-histoire" component={History} />
              </Switch>
            </div>
          </BrowserRouter>
      );
  }
}


export default App;
