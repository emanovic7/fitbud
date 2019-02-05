import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import manageExercises from './reducers/manageExercises';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(manageExercises,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());




ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);


serviceWorker.register();
