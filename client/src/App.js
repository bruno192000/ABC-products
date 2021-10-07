import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Client Pages
import homepage from './pages/homepage';

function App() {
  return (
    <div className="App">
      
    <Router>
      {/* <Navigation /> */}
      
      <Switch>
        <Route exact path="/" component={homepage} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
