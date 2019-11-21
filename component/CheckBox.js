import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import Font from '../asset/Font';
const CheckBox = ({title, onPress, AccentC}) => {
  const [radioBtn, BtnChange] = useState({
    radioBtnsData: ['Item1', 'Item2'],
    checked: false,
  });
  const {viewStyles, textStyles, iconStyle} = Container;
  return (
    <View style={[viewStyles, {backgroundColor: AccentC}]}>
      <TouchableOpacity>
        <Text style={textStyles}>{title}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress} style={{paddingLeft: 10}}>
        <Icon
          style={iconStyle}
          name="md-radio-button-on"
          size={25}
          color="#1e90ff"
        />
      </TouchableOpacity>
    </View>
  );
};
const mapStateToProps = ({accent}) => {
  const {AccentC} = accent;
  return {AccentC};
};
export default connect(mapStateToProps)(CheckBox);
const Container = StyleSheet.create({
  viewStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    height: 61,
    borderRadius: 5,
  },
  textStyles: {
    justifyContent: 'flex-start',
    margin: 15,
    fontSize: 20,
    fontFamily: Font.Aldrich,
  },
  iconStyle: {
    margin: 15,
  },
});
