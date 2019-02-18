import { combineReducers } from 'redux';
import manageExercises from './manageExercises';
import manageFetch from './manageFetch';


const rootReducer = combineReducers({
  data: manageExercises,
  fetchedData: manageFetch
});

export default rootReducer;
