import { combineReducers } from 'redux';
import manageExercises from './manageExercises';


const rootReducer = combineReducers({
  exercises: manageExercises
});

export default rootReducer;
