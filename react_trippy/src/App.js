import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Navigation from './components/City';
import City from './components/Navigation';
import HomeContainer from './containers/HomeContainer';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <nav>
            <ul> 
              <li><Link to ="/"></Link></li>
              <li><Link City to ="/City/">About</Link>"</li>
              <li></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/">
              <HomeContainer />
            </Route>
          </Switch>
        </div>
      </Router>

    )
  }
}

export default App;
