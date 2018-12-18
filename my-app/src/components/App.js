import React, { Component } from 'react';
import MoviesContainer from './movie_container';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Axios Demo</h1>
        <MoviesContainer />
      </div>
    );
  }
}

export default App;
