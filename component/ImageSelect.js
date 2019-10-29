import React from 'react';
import { View,Image,StyleSheet,Text } from 'react-native';
import ImageData from '../ImagesDada'
const ImageSelect= (props) => {

    const {imgStyle}=Container
    switch(props.img){
        case 'partly-cloudy-day':
            return(
                    <Image style={imgStyle} source={ImageData.partialy_cloud}/>
            );
        case 'clear-day':
            return(
            <Image style={imgStyle} source={ImageData.clearDay}/>
            )

        case "clear-night":
                return(
                    <Image style={imgStyle} source={ImageData.hail}/>
                )
        case "partly-cloudy-night":
            return(
                <Image style={imgStyle} source={ImageData.partialy_cloud}/>
            )
        case "rain":
            return(
                <Image  style={imgStyle} source={ImageData.rainbow}/>
            )
        case "cloudy":
            return(
                <Image style={imgStyle} source={ImageData.snowCloudy}/>
            )
        case "fog":
            return(
                <Image style={imgStyle} source={ImageData.foggy}/>
            )
       default:
         return(
                    <View>
                         <Text>Null</Text>
                     </View>
                )
         }
}
export default ImageSelect;
const Container = StyleSheet.create({
        imgStyle:{
            marginTop:5,
            height:30,
            width:30,
            alignSelf:'center'
        }
})