import React, { Component } from 'react';
import { connect } from 'react-redux'
import Exercise  from './Exercise';
import FetchedExercise from './FetchedExercise';



class ExercisesContainer extends Component {

  renderExercises = (props) => this.props.exercises && this.props.exercises.map((exercise, id) => <Exercise delete={this.props.delete} key={exercise.id} exercise={exercise} />);


  renderFetchedExercises = (props) => this.props.fetchedExercises && this.props.fetchExercises.map((exercise, id) => (<FetchedExercise exercise={exercise.name} />))



  render() {
    return(
      <div>
        <ol>
          {this.renderExercises()}

          {this.props.fetchedExercises && this.props.fetchExercises.map((exercise) => exercise.name)}
        </ol>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    exercises: state.data.exercises
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    delete: exerciseText => dispatch({type: 'DELETE_EXERCISE', payload: exerciseText})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer);
