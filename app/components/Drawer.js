import React, { Component } from 'react';
import { StyleSheet,Image,Button } from "react-native";
import { DrawerNavigator,DrawerItems } from "react-navigation";
import { Container, Content, Header, Body, Icon } from "native-base";

import ImagePicker from "./ImagePicker";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Extracurricular from "../screens/Extracurricular";
import Education from "../screens/Education";
import Thankyou from "../screens/Thankyou";

const CustomDrawerContentComponent =(props)=>(
  <Container>
    <Header
     style={{height:200}}>
      <Body
      style={{
        alignItems:"center"
      }}>
        <ImagePicker />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>
  </Container>
)

const Drawer=DrawerNavigator({
    Home:{
      screen:Home
    },
    "Thank You":{
      screen:Thankyou
    }
  },
  {
      initialRouteName:"Home",
      contentComponent:CustomDrawerContentComponent,
      drawerOpenRoute:"DrawerOpen",
      drawerCloseRoute:"DrawerClose",
      drawerToggleRoute:"DrawerToggle",
      drawerPosition: 'left',
  
  })

  // define your styles
const styles = StyleSheet.create({
  drawerImageStyle: {
      width:150,
      height:150,
      borderRadius:75,
      alignSelf:"center"
  },
});

export default Drawer;
  
//()=>this.props.navigation.openDrawer()