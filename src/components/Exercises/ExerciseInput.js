import React, {Component} from 'react';
import { connect } from 'react-redux';


class ExerciseInput extends React.Component {

  constructor(){
    super();
    this.state = {
      text: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addExercise(this.state);
    this.setState({
      name: '',
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p><label>Add Exercise</label></p>
          <p><input type="name" onChange={this.handleChange} value={this.state.name} /></p>
          <p><input type="submit" /></p>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addExercise: formData => dispatch({type: 'ADD_EXERCISE', payload: formData})
  };
};


export default connect(null, mapDispatchToProps)(ExerciseInput);
