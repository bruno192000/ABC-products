import React from 'react';
import './App.css';

// Client Pages
import homepage from './pages/homepage';

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" componenet={homepage} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
