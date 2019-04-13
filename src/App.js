import React, { Component } from 'react';
import './App.css';
import Checkbox from './components/checkbox/Checkbox';


class App extends Component {

  //.container is only for padding boxes(otherwise mess)
  render() {
    return (
      <div className="App">

        <div className="container">
          <Checkbox text="AllDay"/>
        </div>

        <div className="container">
          <Checkbox text="Morning"/>
        </div>

        <div className="container">
          <Checkbox text="Evening"/>
        </div>

      </div>
    );
  }
}

export default App;
