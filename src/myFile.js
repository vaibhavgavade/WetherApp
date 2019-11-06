import React,{Component} from 'react';
import { Text, View,StyleSheet} from 'react-native';
import {Button} from '../component/Button'
import {connect} from 'react-redux';
import {CounterActionInc} from '../actions/MyAction';
import {CounterActionDec} from '../actions/MyAction';

class MyFile extends Component{
        IncreaseButton=()=>{
            const {count}=this.props.count
            console.log("counter inrement button clicked")
                 this.props.CounterActionInc(count)
                // this.props.dispatch({type:COUNTER_INCREASE})
                    }
        DecreaseButton=()=>{
                const {count}=this.props.count
            console.log("Counter decrement button clicked")
            this.props.CounterActionDec(count)
            // this.props.dispatch({type:COUNTER_DECREASE})
        }
        wetherBtn=()=>{
             return(
                <Button onPress={()=>this.props.navigation.navigate('two')}>
                Wether
             </Button>
                )
            }
    render(){
          const{Container,textStyles,wetherbtnStyles}=Styles
        const {count}=this.props
        console.log("render props value is",count)
     return(
         <View style={{flex:1}}>
     <View style={Container}>
             <Button onPress={this.IncreaseButton} >
                 Increment
             </Button>
             <Text style={textStyles}>{count}</Text>
        <Button onPress={this.DecreaseButton}>
            Decrement
        </Button>
    </View>
  
     <View style={wetherbtnStyles}>
         
            {this.wetherBtn()}
     </View>
   
      </View>
            
   )}
}
     const mapStateToProps=({data})=>{
   const {count} = data;
    return {count} 
   }
    
export  default connect (mapStateToProps,{CounterActionInc,CounterActionDec})(MyFile);
const Styles=StyleSheet.create({
  Container:{
  marginTop:100,
  justifyContent:'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyles:{
      color:'#ff1493'
  },
  wetherbtnStyles:{
    marginTop:100,
    height:30,
    width:100,alignSelf:'center'
  }
})


