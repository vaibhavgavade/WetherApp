import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import RadioButton from 'radio-button-react-native';

const HooksInput = () => {
  const [input, changeInput] = useState('vaibhav');
  const [value, changeValue] = useState(0);
  const {viewStyle, textInputStyle} = Container;

  //   const textChange = input => {
  //     changeInput(input);
  //   };
  const handleOnPress = e => {
    console.log('Test', e);
    changeValue(e);
  };

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
      <RadioButton currentValue={value} value={0} onPress={handleOnPress} />
      <RadioButton currentValue={value} value={1} onPress={handleOnPress} />
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
