/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import SplashScreen from "react-native-splash-screen";

import Drawer from "./app/components/Drawer";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import FCM, { NotificationActionType } from "react-native-fcm";

export default class App extends Component {

  async componentDidMount() {
    SplashScreen.hide();
    registerAppListener(this.props.navigation);
    FCM.getInitialNotification().then(notif => {
      this.setState({
        initNotif: notif
      });
      if (notif && notif.targetScreen === "detail") {
        setTimeout(() => {
          this.props.navigation.navigate("Detail");
        }, 500);
      }
    });

    try {
      let result = await FCM.requestPermissions({
        badge: false,
        sound: true,
        alert: true
      });
    } catch (e) {
      console.error(e);
    }

    FCM.getFCMToken().then(token => {
      console.log("TOKEN (getFCMToken)", token);
      this.setState({ token: token || "" });
    });

    if (Platform.OS === "ios") {
      FCM.getAPNSToken().then(token => {
        console.log("APNS TOKEN (getFCMToken)", token);
      });
    }

    // topic example
    // FCM.subscribeToTopic('sometopic')
    // FCM.unsubscribeFromTopic('sometopic')
  }

  showLocalNotification() {
    FCM.presentLocalNotification({
      id: new Date().valueOf().toString(), // (optional for instant notification)
      title: "Test Notification with action", // as FCM payload
      body: "Force touch to reply", // as FCM payload (required)
      sound: "bell.mp3", // "default" or filename
      priority: "high", // as FCM payload
      click_action: "com.myapp.MyCategory", // as FCM payload - this is used as category identifier on iOS.
      badge: 10, // as FCM payload IOS only, set 0 to clear badges
      number: 10, // Android only
      ticker: "My Notification Ticker", // Android only
      auto_cancel: true, // Android only (default true)
      large_icon:
        "https://image.freepik.com/free-icon/small-boy-cartoon_318-38077.jpg", // Android only
      icon: "ic_launcher", // as FCM payload, you can relace this with custom icon you put in mipmap
      big_text: "Show when notification is expanded", // Android only
      sub_text: "This is a subText", // Android only
      color: "red", // Android only
      vibrate: 300, // Android only default: 300, no vibration if you pass 0
      wake_screen: true, // Android only, wake up screen when notification arrives
      group: "group", // Android only
      picture:
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png", // Android only bigPicture style
      ongoing: true, // Android only
      my_custom_data: "my_custom_field_value", // extra data you want to throw
      lights: true, // Android only, LED blinking (default false)
      show_in_foreground: true // notification when app is in foreground (local & remote)
    });
  }


  render() {
    return (
      <Drawer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
