//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,ImageBackground,Dimensions, TouchableOpacity, StatusBar, Alert, BackHandler } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import RNImmediatePhoneCall from "react-native-immediate-phone-call";
import { connect } from "react-redux";
import { signUp,login,logout } from "../store/actions";

import { KrossIcon } from '../assets/icons';

import images from '../assets/img/image';
import { Button } from 'native-base';

const { width, height } = Dimensions.get('window');

// create a component
class Home extends Component {
    
    constructor(props){
        super(props)
        this.state={
            loggedInStatus:true,
            // userFirstName:""
        }
    }
    
    static navigationOptions={
        drawerIcon:(
            <Image source={images.homeimage} 
            style={{width:24,height:24}}/>
        )
    }

    componentDidMount()
    {
       // alert(width)      
       BackHandler.addEventListener("hardwareBackPress",this.onAndroidBackButtonPress);
    }

    onAndroidBackButtonPress=()=>{
        Alert.alert(
            'Alert Title',
            "Oops! You are on the Way to exit the App..",
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
        );
    }


    makeCall=(e)=>{
        RNImmediatePhoneCall.immediatePhoneCall(e);
    }

    render() {
        return (
            <View style={styles.container}>
            {/* <Button
                onPress={()=>this.props.signUpFun("keethu")}
                title="Learn More"
                color="red"
                accessibilityLabel="Learn more about this purple button"
            /> */}
            <StatusBar
            // translucent={true}   
            backgroundColor={'#03A9F4'}
            barStyle="light-content"
            />
                {/* <Image source={require('../assets/img/sachuImg.jpg')} /> */}
                <ImageBackground
                        style={styles.backGroundImage}
                        source={this.props.pickedImage} 
                        blurRadius={25}>
                        <View style={styles.viewArea}>
                            <View style={styles.profileImageArea}>
                                <Image  
                                    style={styles.profileImageStyle}
                                    source={this.props.pickedImage}/>
                            </View>
                            <View style={styles.customCard}>
                                <View style={styles.headerTextArea}>
                                    <Text style={styles.headerText}>
                                        {/* <FontAwesome style={styles.headerIconStyle} name="rocket"/> */}
                                        Details 
                                        {/* {this.props.userFirstNames} */}
                                    </Text>
                                </View>
                                <View style = {styles.horizantalLineStyle} />
                                <View style={styles.contentArea}>
                                    <View style={styles.contents}>
                                        <MaterialIcons style={styles.homeIcon} name="home"/>
                                        <Text style={styles.addressContent}>
                                            8/3795,T.K.G.VILAS 
                                            KOOTHAMPALAYAM PIRIVU
                                            P.N.ROAD.
                                            TIRUPUR.641602
                                        </Text>
                                    </View>   
                                    <View style = {styles.horizantalLineStyle} />
                                   <View style={styles.headerTextArea}>
                                        <Text style={styles.headerText}>
                                            Contact 
                                        </Text>
                                    </View>
                                    <View style = {styles.horizantalLineStyle} />
                                    <View style={styles.rightContentArea}>
                                        <TouchableOpacity style={styles.rightContents}>                                            
                                            <MaterialIcons style={styles.emailIcon} name="mail"/>
                                            <Text style={styles.emailText}>
                                                sathishcse1975@gmail.com
                                            </Text>
                                        </TouchableOpacity>
                                        <View style = {styles.horizantalLineStylePartial} />
                                        <TouchableOpacity style={styles.rightContents} onPress={()=>this.makeCall("8012941249")}>                                            
                                            <MaterialIcons style={styles.phoneIcon} name="phone"/>
                                            <Text style={styles.mobileText}>
                                                80129-41249.
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                </ImageBackground>          
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        width:"100%",
    }, 
    rightContentArea:{
        flexDirection:"column"
    },
    rightContents:{
        width:"100%",
        flexDirection:"row",
        padding:5
    },
    homeIcon:{
        flexDirection:"row",
        width:"30%",
        fontSize:40,
        padding:10
    },
    addressContent:{
        width:"70%",
        fontSize:15,
        paddingRight:4
    },
    emailIcon:{
        width:"30%",
        fontSize:40,
        padding:10,
        color:"#ce343c"
    },
    phoneIcon:{
        width:"30%",
        fontSize:40,
        padding:10,
        color:"#27ae61"
    },
    emailText:{
        width:"70%",
        fontSize:15,
        paddingTop:5,
        alignSelf:"center",
        color:"#ce343c"
    },
    mobileText:{
        width:"70%",
        fontSize:15,
        paddingTop:5,
        alignSelf:"center",
        color:"#27ae61",
        marginTop:-10
    },
    backGroundImage:{
        width:"100%",
        height:"100%"
    },
    viewArea:{
        top:50
    },
    profileImageArea: {
        width:200,
        height:200,
        alignSelf:"center",
        borderWidth:5,
        borderColor:"white",
        zIndex:1,
        backgroundColor:"black",
        elevation:2
    },
    profileImageStyle:{         
        width:"100%",
        height:"100%", 
    },
    customCard:{
        alignSelf:"center",
        backgroundColor:"white",
        marginTop:-10,
        zIndex:0,
        width: width-40,
        height:height*0.5
    },
    headerTextArea:{
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"space-between",
        padding:10,
        margin:0
    },
    headerText:{
        fontSize:20,
        fontWeight:"bold",
        color:"#2196F3",
        fontFamily:"arial"
    },
    headerIconStyle:{
        fontSize:20,
        color:"#3F51B5"
    },
    horizantalLineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
        marginTop:-2
    },
    verticalLineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
        marginTop:-2,
        transform: [{ rotate: '0deg'}]
    },
    contentArea:{
        flexDirection:"column",
        paddingLeft:10
    },
    contents:{
        width:"100%",
        flexDirection:"row",
        padding:5,
        paddingTop:20,
        paddingBottom:20
    },
    horizantalLineStylePartial:{
        alignSelf:"center",
        width:"50%",
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
        marginTop:-2
    }
});

const mapStateToProps = (state) => {
    return {
        userFirstNames:state.signUp.userFirstName,
        pickedImage:state.signUp.profileImage
    };
};

const mapDispatchToProps = dispatch => {
  return{
    signUpFun: (userFirstName) => dispatch(signUp(userFirstName))
  };
};


//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(Home);
