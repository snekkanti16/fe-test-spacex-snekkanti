import * as types from './types';

export const initialState: types.ApplicationState = {
  launches: []
};

const applicationReducer = (state = initialState, action: types.ApplicationsActionTypes) => {
  switch (action.type) {
    case types.GET_SPACE_X_LAUNCHES:
      return { ...state, launches: action.launches };  
    default:
      return state;
  }
};

export default applicationReducer;
