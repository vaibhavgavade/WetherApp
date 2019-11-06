import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {Spinner} from '../component/Spinner';
const StartingScreen = ({navigation}) => {
  const [isLoading, stateChange] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
      stateChange(!isLoading);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const {ViewStyles, textStyles} = container;
  return (
    <View style={ViewStyles}>
      <Icon name="day-cloudy" size={150} color="#000000" />
      <Text style={textStyles}>rnWether</Text>
      <Spinner size="large" />
    </View>
  );
};
export {StartingScreen};

const container = StyleSheet.create({
  ViewStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop:50
  },
  textStyles: {
    fontSize: 20,
  },
});
