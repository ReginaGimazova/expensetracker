import * as actionTypes from './actionTypes';

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case actionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
