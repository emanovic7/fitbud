import fetch from 'isomorphic-fetch';
import React, {Component} from 'react';


export function fetchCategories() {

  return function(dispatch){
    dispatch({type: 'LOADING_CATEGORIES'})
    return fetch('https://wger.de/api/v2/exercisecategory/')
      .then(res => {
        return res.json()
      }).then(responseJson => {
        dispatch({type: 'FETCH_CATEGORIES', payload: responseJson.results})
    })
  }
}
