import fetch from 'isomorphic-fetch';


export funciton fetchExercises() {

    return function(dispatch){
      dispatch({type: 'LOADING_EXERCISES'})
      return fetch('https://wger.de/api/v2/muscle/')
        .then(response => return response.json())
        .then(responseJson => {
          dispatch({type: 'FETCH_EXERCISES', payload: responseJson})
        })
    }

}
