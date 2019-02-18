export default function manageExercises(state = {loading: false, exercises: []}, action) {
  switch(action.type){
    case 'LOADING_EXERCISES':
      return Object.assign({}, state, {laoding: true})

    case 'FETCH_EXERCISES':
      return {loading: false, exercises: action.payload}

    default:
      return state;
  };
};
