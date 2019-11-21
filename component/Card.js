import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import ImageSelect from './ImageSelect';
import {connect} from 'react-redux';
import Font from '../asset/Font';

const Card = ({header, value, images, AccentC}) => {
  const {viewStyle, textStyle, imageStyle} = container;
  return (
    <View style={[viewStyle, {backgroundColor: AccentC}]}>
      <Text style={textStyle}>{header}</Text>
      <Text style={textStyle}>{value}</Text>
      <ImageSelect img={images} />
    </View>
  );
};
const mapStateToProps = ({accent}) => {
  const {AccentC} = accent;
  return {AccentC};
};
export default connect(mapStateToProps)(Card);
const container = StyleSheet.create({
  viewStyle: {

    height: 100,
    width: 100,
borderRadius: 5,
    margin: 20,
  },
  textStyle: {
    alignSelf: 'center',
    paddingTop: 5,
    fontFamily: Font.boldSans,
  },
  imageStyle: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
});
