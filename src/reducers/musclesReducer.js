export default function musclesReducer(state = {loading: false, muscles: []}, action) {
  switch(action.type){
    case 'LOADING_MUSCLES':
      return Object.assign({}, state, {laoding: true})

    case 'FETCH_MUSCLES':
      return {loading: false, muscles: action.payload}

    default:
      return state;
  };
};
