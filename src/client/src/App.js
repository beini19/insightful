import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <MainPage></MainPage>
        </div>
      </div>
    );
  }
}

export default App;
