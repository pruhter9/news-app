import React from 'react';
import { connect } from 'react-redux';

class RightDrawer extends Component {

  render() {
    return ();
  }
}

export default connect(state => ({
  rightDrawerState: state.uiStates.rightDrawerState
}))(RightDrawer);
