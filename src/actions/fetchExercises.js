import fetch from 'isomorphic-fetch';
import React, {Component} from 'react';


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
