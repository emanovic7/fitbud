import { combineReducers } from 'redux';
import manageExercises from './manageExercises';
import manageFetch from './manageFetch';
import musclesReducer from './musclesReducer';
import categoriesReducer from './categoriesReducer';


const rootReducer = combineReducers({
  data: manageExercises,
  fetchedData: manageFetch,
  muscles: musclesReducer,
  categories: categoriesReducer
});

export default rootReducer;
