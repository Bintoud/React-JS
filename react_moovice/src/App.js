import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Discover from './component/Discover';
import DiscoverBattle from './component/DiscoverBattle';
import MyList from './component/MyList';
import Popular from './component/Popular';
import PopularBattle from './component/PopularBattle';

class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Movies</Link></li>
              <li><Link to="/Battle week/">Battle week</Link></li>
              <li><Link to="/Popular/">Popular</Link></li>
              <li><Link to="/Favorite/">Favorite</Link></li>
              <li><Link to="/My List/">My List</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Discover />
            </Route>
            <Route path="/Battle week/">
              <DiscoverBattle />
            </Route>
            <Route path="/Popular/">
              <Popular />
            </Route>
            <Route path="/Favorite/">
              <PopularBattle></PopularBattle>
            </Route>
            <Route path="/My List/">
            <MyList />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;

/*
<div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div>

*/