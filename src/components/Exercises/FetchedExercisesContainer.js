import React, { Component } from 'react';
import { connect } from 'react-redux';



class FetchedExercisesContainer extends React.Component {

  constructor(){
    super();
    this.state = {
      name: '',
    };
  };


    handleFetch() {
      this.props.fetchExercises()
    }



  render(){
    return(
      <div>
        <p><label>Pull All Exercises</label></p>
        <button onClick={(event) => this.handleFetch(event)}>fetch exercises</button>
      </div>
    )
  }
}


function mapDispatchToProps(dispatch){
  return{ fetchExercises: () => dispatch(fetchExercises())}
}

function mapStateToProps(state){
  return {exercises: state.fetchedData.exercises}
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
