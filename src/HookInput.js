import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const HooksInput = () => {
  const [input, changeInput] = useState('vaibhav');
  const {viewStyle, textInputStyle} = Container;

  //   const textChange = input => {
  //     changeInput(input);
  //   };
  useEffect(() => {
    console.log('Input is', input);
  }, [input]);

  return (
    <View style={viewStyle}>
      <Text>HooksInput</Text>
      <TextInput
        style={textInputStyle}
        value={input}
        placeholder="Enter your Name"
        onChangeText={text => changeInput(text)}
      />
    </View>
  );
};

const Container = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputStyle: {
    height: 51,
    width: 300,
    backgroundColor: '#87cefa',
    borderBottomWidth: 5,
  },
});
export default HooksInput;
