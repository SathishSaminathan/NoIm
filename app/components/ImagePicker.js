//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button,ToastAndroid } from 'react-native';
import ImagePickers from "react-native-image-picker";

import images from "../assets/img/image";
import { connect } from "react-redux";
import {signUp,login,logout,addImage } from "../store/actions";

// create a component
class ImagePicker extends Component {

    state={
        pickedImage:images.drawerImage
    }

    pickedImageHandler=()=>{
        ImagePickers.showImagePicker({ title:"Pick an Image" },res =>{
            if(res.didCancel){
                ToastAndroid.showWithGravity(
                    "Cancelled",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  );
                
            }
            else if(res.error){
                ToastAndroid.showWithGravity(
                    "Error",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                  );
            }
            else{
                this.setState({
                    pickedImage:{uri:res.uri}
                })
                this.props.addImageFun({uri:res.uri});
            }
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.drawerImageStyle}
                    source={this.props.pickedImage}
                />
                <Button title="Pick Image" onPress={()=>{this.pickedImageHandler()}}/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawerImageStyle: {
        width:150,
        height:150,
        borderRadius:75,
        alignSelf:"center"
    },
});

const mapStateToProps = (state) => {
    return {
        pickedImage:state.signUp.profileImage
    };
};

const mapDispatchToProps = dispatch => {
  return{
    addImageFun: (pickedImage) => dispatch(addImage(pickedImage))
  };
};

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(ImagePicker)
