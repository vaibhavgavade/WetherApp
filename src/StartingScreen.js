import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
import {Spinner} from '../component/Spinner'
export default class StartingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading:"true"
       }
    setTimeout(()=>{
        this.props.navigation.navigate('Home')
        this.setState({isLoading:!this.state.isLoading})
    },500)
     }
 render() {
      const {ViewStyles,textStyles}=container
    return (
       <View style={ViewStyles}>
            <Icon name="day-cloudy" size={150} color="#000000"/>
            <Text style={textStyles}>rnWether</Text>
            <Spinner size="large"/>
         </View>
    );
  }
}
const container=StyleSheet.create({
    ViewStyles:{
        flex:1,
        justifyContent:'center',
         alignItems:'center'
        // marginTop:50
    },
    textStyles:{
        fontSize:20,
   
    }
})