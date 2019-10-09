import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import MyFile from './src/myFile';
import WetherScreen from './src/WetherScreen' 

const AppStack= createStackNavigator({
    one:{
        screen:MyFile,
        navigationOptions:{
                title:'Counter App',
                headerBackTitle:null,
               
                
                
        }
    },
    two:{
        screen:WetherScreen,
        navigationOptions:{
            title:'Wether App',
            headerBackTitle:null,
            headerTitleStyle:{
                fontSize:25,
                color:'#87cefa'
            }
            
    },
        

    }
})

export default createAppContainer(AppStack);