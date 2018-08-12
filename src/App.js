import React, { Component } from 'react';
import FeedContainer from './containers/FeedContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="background">
        <FeedContainer />
      </div>
    );
  }
}

export default App;
