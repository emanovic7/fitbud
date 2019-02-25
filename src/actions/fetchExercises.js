
import fetch from 'isomorphic-fetch';
import React, {Component} from 'react';


export const SELECT_BODY_PART = 'SELECT_BODY_PART';
export const REQUEST_EXERCISES = 'REQUEST_EXERCISES';
export const RECEIVE_EXERCISES = 'RECEIVE_EXERCISES';


const API_KEY = 'cd7fe1ca36947689f1cfb2452449571de4e79b95';

export function fetchExercises() {

  return function(dispatch){
    dispatch({type: 'LOADING_EXERCISES'});
    return fetch('https://wger.de/api/v2/exercise/')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_EXERCISES', payload: responseJson.results})
    })

  }
}
