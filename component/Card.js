import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import ImageSelect from './ImageSelect';
import {connect} from 'react-redux'

const Card = ({header, value, images,AccentC}) => {
  // console.log( "card props are",props)

  const {viewStyle, textStyle, imageStyle} = container;
  return (
    <View style={[viewStyle,{backgroundColor: AccentC}]}>
      <Text style={textStyle}>{header}</Text>
      <Text style={textStyle}>{value}</Text>
      {/* <Image style={imageStyle} source={props.img}/> */}

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
    // flex: 1,
    height: 80,
    width: 100,
    
    borderRadius: 5,
    margin: 20,
  },
  textStyle: {
    alignSelf: 'center',
    paddingTop: 5,
  },
  imageStyle: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
});
