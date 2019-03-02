import React, {Component} from 'react';
import { connect } from 'react-redux';


class ExerciseInput extends React.Component {

  constructor(){
    super();
    this.state = {
      name: '',
      sets: '',
      reps: '',
      rest: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addExercise(this.state);
    this.setState({
      name: '',
      sets: '',
      reps: '',
      rest: ''
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <p><label>Add Exercise</label></p>
          <p>Exercise Name:<input type="text" onChange={this.handleChange} name="name" value={this.state.name} /></p>
          <p># of Sets:<input type="text" onChange={this.handleChange} name="sets" value={this.state.sets} /></p>
          <p># of Reps:<input type="text" onChange={this.handleChange} name="reps" value={this.state.reps} /></p>
          <p>Rest (in secs):<input type="text" onChange={this.handleChange} name="rest" value={this.state.rest} /></p>
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
