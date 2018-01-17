import { combineReducers } from 'redux';
// import sub reducers here
import sources from './sources/reducer';
import uiStates from './uiStates/reducer';

// add imported reducers to combine reducers object argument
export default combineReducers({
  sources,
  uiStates
});

export function globalInit() {
  // load all relevent information here
}
