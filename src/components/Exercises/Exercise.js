import React, { Component } from 'react';



const Exercise = props => {
  return(
    <div>
      <span>
        <li>{props.exercise.name} <button onClick={() => props.delete(props.exercise.id)}>X</button></li>
      </span>

    </div>
  );
};


export default Exercise;
