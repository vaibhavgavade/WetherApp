import React from 'react';
import { Text,TouchableOpacity,StyleSheet} from 'react-native';


const Button = ({onPress,children}) => {
    const {buttonStyle,textStyle}=Styles
    return(
        <TouchableOpacity style={buttonStyle} onPress={onPress} >
                <Text style={textStyle}>
                        {children}
                </Text>
        </TouchableOpacity>
    
);
}
const Styles=StyleSheet.create({
    buttonStyle:{
        // flex:1,
        marginTop:5,
        alignSelf:'center',
        backgroundColor:'#ff0000',
        borderColor:'#1e90ff',
        borderWidth:1,
         marginLeft:10,
        marginRight:10,
        borderRadius:5,
        height:41,
        width:250
        // marginEnd:150,
     

        
},
        textStyle:{
            alignSelf:'center',
            fontSize:20,
            color:'black',
            fontWeight:'600',
            color:'#000000',
             paddingTop:5,
             }
})
export  {Button};
