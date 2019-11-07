import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import CheckBox from '../component/CheckBox';
import {CheBoxUnSelect} from '../component/cheBoxUnSelect';
import {settingtheme} from '../actions/MyAction';
const COLOR = '#000000';
const COLORS = '#fffaf0';
const textColor = '#fffaf0';
const whiteText = '#000000';

// DarkLightTheme.navigationOptions = ({navigation}) => {
//   return {
//     title: 'Settings',
//     headerRight: (
//       <TouchableOpacity
//         style={{paddingRight: 20}}
//         onPress={() => navigation.navigate('two')}>
//         <Icon name="home" size={25} color="#ff6347" />
//       </TouchableOpacity>
//     ),
//   };
// };
const DarkLightTheme = ({navigation, settingtheme, theme}) => {
  function themeFunction() {
    console.log('theme function called');
    const color = COLOR;
    const text = textColor;
    settingtheme(color, text);
  }
  function themeFunctions() {
    console.log('theme function called');
    const color = COLORS;
    const texts = whiteText;
    settingtheme(color, texts);
  }
  function dataNavigate() {
    navigation.navigate('DLtheme');
  }

  return (
    <View style={{backgroundColor: theme, flex: 1}}>
      <CheckBox title="Dark Theme" onPress={() => themeFunction()} />
      {/* <CheBoxUnSelect title="Light Theme" onPress={() => themeFunctions()} /> */}
      <CheckBox title="light Theme" onPress={() => themeFunctions()} />
    </View>
  );
};

const mapStateToProps = ({myTheme}) => {
  console.log('darkLightTheme ', myTheme);
  const {theme} = myTheme;
  return {theme};
};

export default connect(
  mapStateToProps,
  {settingtheme},
)(DarkLightTheme);
