import React, { Component } from 'react';
import { H1, H2, H3, H4, H5 } from './components/Typography';
import { connect } from 'react-redux';
import Header from './containers/Header/Header';
import { RightDrawerContainer } from './components/RightDrawer';
import './App.css';

class App extends Component {
  // static propTypes = {
  //   rightDrawerState: PropTypes.object
  // };

  render() {
    const { rightDrawerState } = this.props;
    return (
      <div className="App">
        <Header />
        <H1>Header 1</H1>
        <H2>Header 2</H2>
        <H3>Header 3</H3>
        <H4>Header 4</H4>
        <H5>Header 5</H5>
        <RightDrawerContainer open={rightDrawerState.open} />
      </div>
    );
  }
}

export default connect(state => ({ rightDrawerState: state.uiStates.rightDrawerState }))(App);
