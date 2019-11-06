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
class DarkLightTheme extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Settings',
      headerRight: (
        <TouchableOpacity
          style={{paddingRight: 20}}
          onPress={() => navigation.navigate('two')}>
          <Icon name="home" size={25} color="#ff1493" />
        </TouchableOpacity>
      ),
    };
  };

  themeFunction() {
    console.log('theme function called');
    const color = COLOR;
    const text = textColor;
    this.props.settingtheme(color, text);
  }
  themeFunctions() {
    console.log('theme function called');
    const color = COLORS;
    const texts = whiteText;
    this.props.settingtheme(color, texts);
  }
  dataNavigate() {
    this.props.navigation.navigate('DLtheme');
  }
  render() {
    return (
      <View style={{backgroundColor: this.props.theme, flex: 1}}>
        <CheckBox title="Dark Theme" onPress={() => this.themeFunction()} />
        <CheBoxUnSelect
          title="Light Theme"
          onPress={() => this.themeFunctions()}
        />
      </View>
    );
  }
}

const mapStateToProps = ({myTheme}) => {
  console.log('darkLightTheme ', myTheme);
  const {theme} = myTheme;
  return {theme};
};

export default connect(
  mapStateToProps,
  {settingtheme},
)(DarkLightTheme);
