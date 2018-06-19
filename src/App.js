import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

const Home = () => (
  <div>
    <ul>
      <Link to="/versus-ai">Play vs AI</Link>
    </ul>
  </div>
);

const VsAi = () => (
  <h1>Versus AI</h1>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/versus-ai" component={VsAi} />
        </div>
      </Router>
    );
  }
}

export default App;
