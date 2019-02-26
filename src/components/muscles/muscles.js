import React, { Component } from 'react';
import { connect } from 'react-redux';



class Muscles extends React.Component {

  handleOnClick = (event) => {
    this.props.fetchMuscles()
  }
  render(){
      const muscles = this.props.muscles && this.props.muscles.map(muscle => <li key={muscle.id}>{muscle.name}</li>);
    return(
      <div>
        <button onClick={(event) => this.handleOnClick(event)}>Fetch Muscles</button>
        {muscles}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    muscles: state.muscles.msucles
  }
}


const mapDispatchToProps = (dispatch) => {
  return { fetchMuscles: () => dispatch(fetchMuscles()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Muscles);


export function fetchMuscles() {

  return function(dispatch){
    dispatch({type: 'LOADING_MUSCLES'})
    return fetch('https://wger.de/api/v2/muscle/')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_MUSCLES', payload: responseJson.results})
    })
  }
}
