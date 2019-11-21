import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
const WetherUpperButtons = ({props, searchPress, settingPress, AccentC}) => {
  const {viewStyles, buttonStyle} = Container;
  return (
    <View style={viewStyles}>
      <TouchableOpacity onPress={searchPress} style={buttonStyle}>
        <Icon name="md-sync" size={30} color={AccentC} />
      </TouchableOpacity>
      <TouchableOpacity onPress={settingPress} style={buttonStyle}>
        <Icon name="md-settings" size={30} color={AccentC} />
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = ({accent}) => {
  const {AccentC} = accent;
  return {AccentC};
};
export default connect(mapStateToProps)(WetherUpperButtons);
const Container = StyleSheet.create({
  viewStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  buttonStyle: {
    marginLeft: 10,
    marginRight: 10,
  },
});
