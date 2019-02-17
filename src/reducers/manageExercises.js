


export default function manageExercises(state = {loading: false, exercises: []}, action) {
  switch(action.type){
    case 'ADD_EXERCISE':
      const exercise = {
          id: Math.random()*10000000000000000,
          text: action.payload.text
      }
      return {exercises: state.exercises.concat(exercise)};

    case 'DELETE_EXERCISE':
      return {exercises: state.exercises.filter(exercise => exercise.id !== action.payload)};

    case 'LOADING_EXERCISES':
      return Object.assign({}, state, {laoding: true})

    case 'FETCH_EXERCISES':
      return {loading: false, exercises: action.payload}

    default:
      return state;
  };
};
