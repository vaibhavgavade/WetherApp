import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CheckBox from '../component/CheckBox';
import {CheBoxUnSelect} from '../component/cheBoxUnSelect';
import {connect} from 'react-redux';
import {AccentColorChange} from '../actions/MyAction';
const COLORS = '#0000cd';
const COLORSA = '#32cd32';

const AccentDarkLight = ({navigation, AccentColorChange, theme}) => {
  function AccetChange() {
    const colors = COLORS;
    AccentColorChange(colors);
    setTimeout(() => {
      navigation.navigate('two');
    }, 2000);
  }
  function AccetChangeSecond() {
    const colorB = COLORSA;
    AccentColorChange(colorB);
    setTimeout(() => {
      navigation.navigate('two');
    }, 2000);
  }

  return (
    <View style={{flex: 1, backgroundColor: theme}}>
      <CheckBox title="Dark" onPress={() => AccetChange()} />
      <CheBoxUnSelect title="light" onPress={() => AccetChangeSecond()} />
    </View>
  );
};

const mapStateToProps = ({accent, myTheme}) => {
  const {AccentC} = accent;
  const {theme} = myTheme;
  return {AccentC, theme};
};

export default connect(
  mapStateToProps,
  {AccentColorChange},
)(AccentDarkLight);
