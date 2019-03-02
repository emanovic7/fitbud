


export default function manageExercises(state = {loading: false, exercises: []}, action) {
  switch(action.type){
    case 'ADD_EXERCISE':
      const exercise = {
          id: Math.random()*10000000000000000,
          name: action.payload.name,
          sets: action.payload.sets,
          reps: action.payload.reps,
          rest: action.payload.rest
      }
      return {exercises: state.exercises.concat(exercise)};

    case 'DELETE_EXERCISE':
      return {exercises: state.exercises.filter(exercise => exercise.id !== action.payload)};



    default:
      return state;
  };
};
