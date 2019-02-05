import React, { Component } from 'react';
import { connect } from 'react-redux'
import Exercise from './Exercise';

class ExercisesContainer extends Component {

  renderExercises = () => this.props.exercises.map((exercise, id) => <Exercise key={id} text={exercise}/>)

  render() {
    return(
      <div>
        {this.renderExercises()}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    exercises: state.exercises
  }
}

export default connect(mapStateToProps)(ExercisesContainer);
