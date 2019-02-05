


export default function manageExercises(state = {
  exercises: [],
}, action){
  switch(action.type){
    case 'ADD_EXERCISE':
      return {exercises: state.exercises.concat(action.payload.text)}

    default:
      return state;
  };
};
