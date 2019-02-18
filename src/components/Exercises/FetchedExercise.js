import React, { Component } from 'react';



const FetchedExercise = props => {
  return(
    <div>
      <span>
        <li>{props.exercise.name}</li>
      </span>

    </div>
  );
};


export default FetchedExercise;
