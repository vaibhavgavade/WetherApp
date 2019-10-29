import React, {Component} from 'react';
import {View, Text} from 'react-native';
import CheckBox from '../component/CheckBox';
import {CheBoxUnSelect} from '../component/cheBoxUnSelect';
import {connect} from 'react-redux';
import {AccentColorChange} from '../actions/MyAction';
const COLORS = '#0000cd';
const COLORSA = '#32cd32';

class AccentDarkLight extends Component {
  AccetChange() {
   
    const colors = COLORS;
    this.props.AccentColorChange(colors);
    setTimeout(() => {
      this.props.navigation.navigate('two');
    }, 2000);
  }

  AccetChangeSecond() {
    
    const colorB = COLORSA;
    this.props.AccentColorChange(colorB);
    setTimeout(() => {
      this.props.navigation.navigate('two');
    }, 2000);
  }

  render() {
    return (
      <View style={{flex: 1,backgroundColor:this.props.theme}}>
        <CheckBox title="Dark" onPress={() => this.AccetChange()} />
        <CheBoxUnSelect
          title="light"
          onPress={() => this.AccetChangeSecond()}
        />
      </View>
    );
  }
}

const mapStateToProps = ({accent,myTheme}) => {
  
  const {AccentC} = accent;
  const {theme}=myTheme
  return {AccentC,theme};
};

export default connect(
  mapStateToProps,
  {AccentColorChange},
)(AccentDarkLight);
