import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AllButtons from '../component/AllButtons';
import {connect} from 'react-redux';
const AllFeatures = ({navigation, myTheme}) => {
  dataNavigate = () => {
    navigation.navigate('DLtheme');
  };
  // render() {
  return (
    <View style={{flex: 1, backgroundColor: myTheme}}>
      <AllButtons
        title="Theme"
        onPress={() => {
          // this.themeFunction();
          this.dataNavigate();
        }}
      />
      <AllButtons
        title="Location"
        onPress={() => navigation.navigate('search')}
      />
      <AllButtons
        title="Time Matchine"
        onPress={() => navigation.navigate('random')}
      />
      <AllButtons
        title="Accent Color"
        onPress={() => navigation.navigate('Accent')}
      />
      <AllButtons title="Persistent" />
      <AllButtons title="About" />
      <Text style={{color: 'white', alignSelf: 'center', marginTop: 20}}>
        powered by DarkSky & locationIq
      </Text>
    </View>
  );
  // }
};
const mapStateToProps = ({myTheme}) => {
  const {theme} = myTheme;
  return {theme};
};
export default connect(mapStateToProps)(AllFeatures);
