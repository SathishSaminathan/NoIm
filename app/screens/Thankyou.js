//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';

import images from '../assets/img/image';
import LandscapeModeWarning from "../components/LandscapeModeWarning";

// create a component
class Thankyou extends Component {

    constructor(){ 
        super();     
        this.state = {          
            OrientationStatus : '',     
            Height_Layout : '',     
            Width_Layout : '',          
            }
    }

    componentDidMount(){ 
        this.DetectOrientation();     
    }

    DetectOrientation(){ 
        if(this.state.Width_Layout > this.state.Height_Layout)
        {     
          // Write Your own code here, which you want to execute on Landscape Mode.     
            this.setState({
            OrientationStatus : 'Landscape Mode'
            });
        }
        else{     
          // Write Your own code here, which you want to execute on Portrait Mode.     
            this.setState({
            OrientationStatus : 'Portrait Mode'
            });
        }     
    }

    static navigationOptions={
            drawerIcon:(
                <Image source={images.thankyouImage} 
                style={{width:24,height:24}}/>
            )
    }

    render() {
        return (
            <View 
                style={styles.MainContainer} 
                onLayout={(event) => this.setState({
                    Width_Layout : event.nativeEvent.layout.width,
                    Height_Layout : event.nativeEvent.layout.height
                }, ()=> this.DetectOrientation())}
            >     
            {this.state.OrientationStatus==="Landscape Mode"?
                <LandscapeModeWarning />:
                <Text style={styles.TextStyle}> Thank You </Text>
            }
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },    
    TextStyle :{
        fontSize : 20,
        color : '#000'
    }
});

//make this component available to the app
export default Thankyou;
