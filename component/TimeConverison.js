import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Font from '../asset/Font';
const TimeConverison = props => {
  const {textStyles} = Container;
  const dates = new Date(props.allDateTime * 1000);
  return (
    <View>
      <Text style={textStyles}>{dates.toDateString('en-IND')}</Text>
    </View>
  );
};
export default TimeConverison;
const Container = StyleSheet.create({
  textStyles: {
    fontSize: 17,
    alignSelf: 'center',
    color: '#000000',
    fontFamily: Font.Aldrich,
  },
});
