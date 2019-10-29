import React from 'react';
import { View ,StyleSheet} from 'react-native';
import {connect} from 'react-redux'
const CardSection = (props) => {
    const accent=props.AccentC
    const {viewStyle}=container
    return(
        
        <View style={[viewStyle,{backgroundColor:accent}]}>
     
            {props.children}
        </View>
        
);
}
const mapStateToProps = ({accent}) => {
    const {AccentC} = accent;
    return {AccentC};
  };
export default connect(mapStateToProps)(CardSection);

const container=StyleSheet.create({
    viewStyle:{
        // flex:1,
        borderRadius:5,
        
        width:170,
        height:150,
       margin:10,
       paddingTop:15
}
})
