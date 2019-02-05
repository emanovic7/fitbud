import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ExerciseInput from './components/Exercises/ExerciseInput';
import ExercisesContainer from './components/Exercises/ExercisesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ExerciseInput />
        <ExercisesContainer />
      </div>
    );
  }
}

export default App;
