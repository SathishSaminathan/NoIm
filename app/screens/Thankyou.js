//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';

import images from '../assets/img/image';

// create a component
class Thankyou extends Component {

    static navigationOptions={
            drawerIcon:(
                <Image source={images.thankyouImage} 
                style={{width:24,height:24}}/>
            )
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#9CCC65"
                    barStyle="light-content"
                />
                <Text>Thankyou</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Thankyou;
