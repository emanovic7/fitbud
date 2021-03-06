import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainGrid from './MainGrid';
import ExerciseInput from './components/Exercises/ExerciseInput';
import ExercisesContainer from './components/Exercises/ExercisesContainer';
import FetchedExercisesContainer from './components/Exercises/FetchedExercisesContainer';
import Muscles from './components/muscles/muscles';
import { fetchExercises } from './actions/fetchExercises'



import { connect } from 'react-redux';

class App extends Component {


  handleFetch() {
    this.props.fetchExercises()
  }





  render() {
    return (
      <div className="App">
        <MainGrid />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{ fetchExercises: () => dispatch(fetchExercises())}
}

function mapStateToProps(state){
  return {exercises: state.exercises}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
