import { combineReducers } from 'redux';
import manageExercises from './manageExercises';
import manageFetch from './manageFetch';
import musclesReducer from './musclesReducer';


const rootReducer = combineReducers({
  data: manageExercises,
  fetchedData: manageFetch,
  muscles: musclesReducer
});

export default rootReducer;
