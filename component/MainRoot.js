import React from 'react';
import SwitchNavigator from '../Route';
import {connect} from 'react-redux';

const MainRoot = ({theme,textColor}) => {
  return <SwitchNavigator screenProps={{myProps: theme,myTextC:textColor}} />;
};
const mapStateToProps = ({myTheme}) => {
  console.log("Test RRRRR",myTheme)
  const {theme,textColor} = myTheme;
  return {theme,textColor};
};

export default connect(mapStateToProps)(MainRoot);