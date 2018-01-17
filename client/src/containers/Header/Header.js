import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateRightDrawerState } from '../../reduxModules/uiStates/actions';
import { Container as HeaderContainer, AppName, RightList, RightListItem } from '../../components/Header';

const menuItems = [
  {
    label: 'Sources',
    value: 'sources'
  }
];

class Header extends Component {
  static propTypes = {};

  handleListItemClick(item) {
    if (item.value === 'sources') {
      return this.props.updateRightDrawerState({ open: true });
    }
    console.log(item.value);
  }

  render() {
    return (
      <HeaderContainer>
        <AppName>Newsgator</AppName>
        <RightList>
          {menuItems.map((item, index) => (
            <RightListItem key={index} onClick={() => this.handleListItemClick(item)}>
              {item.label}
            </RightListItem>
          ))}
        </RightList>
      </HeaderContainer>
    );
  }
}

export default connect(state => ({
  rightDrawerState: state.uiStates.rightDrawerState
}), { updateRightDrawerState })(Header);
