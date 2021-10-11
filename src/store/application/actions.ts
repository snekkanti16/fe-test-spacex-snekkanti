import * as types from './types';

/**
 * Sets the launches provided to the Redux Store.
 * @param launches 
 */
 export const setLaunches = (launches : types.Launches) => {
  return { 
    type: types.GET_SPACE_X_LAUNCHES, 
    launches: launches }
}