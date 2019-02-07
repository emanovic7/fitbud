import React, { Component } from 'react';
import { connect } from 'react-redux'
import Exercise from './Exercise';

class ExercisesContainer extends Component {

  renderExercises = () => this.props.exercises.map((exercise, id) => <Exercise delete={this.props.delete}key={exercise.id} exercise={exercise} />)

  render() {
    return(
      <div>
        <ol>
          {this.renderExercises()}
        </ol>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    exercises: state.exercises
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    delete: exerciseText => dispatch({type: 'DELETE_EXERCISE', payload: exerciseText})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExercisesContainer);
