import { CHANGE_SEARCH_FIELD } from './constants.js';

const initialState = {
  searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      // If this case is correct update the state
      // returns state, with the current state, and whatever is being updated in the searchField property. In this case the action payload which is user text
      return Object.assign({}, state, { searchField:action.payload });
      // cleaner way to write this...
      // return (...state, {searchField:action.payload});
    default: 
      return state;
  }
}