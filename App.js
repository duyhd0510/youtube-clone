import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RecomendedVideos from './RecomendedVideos'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import SearchPage from './SearchPage'

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      <Router>
        <Header/>

        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage/>
            </div>
          </Route>
          <Route path="/">
            <div className = "app__page">
              <Sidebar />
              <RecomendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
