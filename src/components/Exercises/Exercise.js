import React, { Component } from 'react';



const Exercise = props => {
  return(
    <div>
      <span>
        <li>name: {props.exercise.name}<br/>
            sets: {props.exercise.sets}<br />
            reps: {props.exercise.reps}<br />
            rest: {props.exercise.rest}<br />
            <button onClick={() => props.delete(props.exercise.id)}>Delete</button>
        </li>

      </span>

    </div>
  );
};


export default Exercise;
