const initialState = {
  rightDrawerState: {
    open: false,
    component: null
  }
};

// reducer function
export default function uiStates(state = initialState, action = {}) {
  switch (action.type) {
    case 'UPDATE_RIGHTDRAWER_STATE':
      return {
        ...state,
        rightDrawerState: action.value
      };
    default:
      return state;
  }
}
