import fetch from 'isomorphic-fetch';


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
