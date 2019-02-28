export default function categoriesReducer(state = {loading: false, categories: []}, action) {
  switch(action.type){
    case 'LOADING_CATEGORIES':
      return Object.assign({}, state, {laoding: true})

    case 'FETCH_CATEGORIES':
      return {loading: false, categories: action.payload}

    default:
      return state;
  };
};
