export default function manageExercises(state = {loading: false, fetchedExercises: []}, action) {
  switch(action.type){
    case 'LOADING_EXERCISES':
      return Object.assign({}, state, {laoding: true})

    case 'FETCH_EXERCISES':
      return {loading: false, fetchedExercises: action.payload}

    default:
      return state;
  };
};
