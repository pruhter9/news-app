const UPDATE_RIGHTDRAWER_STATE = 'uiStates/UPDATE_RIGHTDRAWER_STATE';

export function updateRightDrawerState(value) {
  return {
    type: UPDATE_RIGHTDRAWER_STATE,
    value
  };
}
