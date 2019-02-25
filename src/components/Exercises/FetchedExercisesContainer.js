import React, { Component } from 'react';
import { connect } from 'react-redux';
import FetchedExercise from './FetchedExercise';



class FetchedExercisesContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      name: '',
    };
  }


    handleFetch() {
      this.props.fetchExercises()
    }

    renderFetchedExercises = (props) => this.props.fetchedExercises && this.props.fetchedExercises.map((exercise, id) => <FetchedExercise exercise={exercise.name} />);


  render(){
    return(
      <React.Fragment>
      <div>
        <p><label>Pull All Exercises</label></p>
        <button onClick={(event) => this.handleFetch(event)}>fetch exercises</button>
      </div>
      <div>
        <ol>
          {this.state.FetchedExercises}
        </ol>
      </div>
      </React.Fragment>
    )
  }
}


function mapDispatchToProps(dispatch){
  return{ fetchExercises: () => dispatch(fetchExercises())}
}

function mapStateToProps(state){
  return {exercises: state.fetchedData.fetchedExercises}
}


export default connect(mapStateToProps, mapDispatchToProps)(FetchedExercisesContainer);

export function fetchExercises() {

  return function(dispatch){
    dispatch({type: 'LOADING_EXERCISES'});
    return fetch('https://wger.de/api/v2/muscle/')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_EXERCISES', payload: responseJson.results})
    })

  }
}
