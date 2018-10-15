import React, {Component} from 'react';
import {StyleSheet, Platform, View, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Colors} from './helpers/Helpers';
import Routes from './config/Routes';


const MyStatusBar = (Props) => (
  <View style={[styles.statusBar, { backgroundColor: Colors.Green }]}>
    <StatusBar backgroundColor={Colors.Green} />
  </View>
);

export default class App extends Component {
  
  componentWillMount() {
    // before view appear
  }
 
  componentDidMount() {
    // when view appears
    SplashScreen.hide();
  }

  render() {

    return (
  
      <View style={styles.container}>
        <MyStatusBar barStyle="light-content" animated={true}/>
        
        <Routes/>
      </View>
  
          
      
    );

  }
}
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 23 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});