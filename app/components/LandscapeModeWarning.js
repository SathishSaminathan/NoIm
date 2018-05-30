//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animation from "lottie-react-native";

const { width, height } = Dimensions.get('window');

import anim from "../assets/motorcycle.json";

// create a component
class LandscapeModeWarning extends Component {

    componentDidMount() {
        this.animation.play();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>0ops :- Sorry Our app currently not support Landscape Mode.) We are working towards it... Sorry for the Inconvenience</Text>
                <View style={styles.animationArea}>
                    <Animation
                        ref={animation => {
                        this.animation = animation;
                        }}
                        style={{
                        width: width,
                        height: height
                        }}
                        loop={true}
                        source={anim}
                    />
                </View>    
          </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        width:"100%",
        height:"100%"
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#000000',
    },
    animationArea:{
        width:"100%",
        height:"100%",
    }
});

//make this component available to the app
export default LandscapeModeWarning;
