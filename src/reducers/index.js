import { CHANGE, REQUEST, RECEIVE } from '../actions/index';
import { combineReducers } from 'redux'

const countReducers = function(state={data: 0, fetching: false}, action) {
  let newS = { ...state };
  switch (action.type) {
    case CHANGE:
      newS.data = action.payload;
      return newS;

    case REQUEST:
      return {
        ...newS,
        fetching: true
      }; 

    case RECEIVE:
      newS.data = action.payload;
      return {
        ...newS,
        fetching: false
      };    
  
    default:
      return {
        ...newS
      };
  }
}

export const reducer = combineReducers({
  countData: countReducers
});