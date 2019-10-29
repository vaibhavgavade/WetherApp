import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const TimeConverison = props => {
  const {textStyles} = Container;
  console.log(props);
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
    fontSize: 15,
    alignSelf: 'center',
    color: '#dc143c',
  },
});
