import React, {Component} from 'react';
import {StyleSheet, Platform, View, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {Colors} from './helpers/Helpers';
import Routes, { navigationDrawer } from './config/Routes';
import {Provider} from 'react-redux';
import store from './Store/Index';
import { _retrieveData } from '../app/helpers/Helpers';

const MyStatusBar = (Props) => (
  <View style={[styles.statusBar, { backgroundColor: Colors.Green }]}>
    <StatusBar backgroundColor={Colors.Green} />
  </View>
);

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      isEmail: false
    }
  }
  
  componentWillMount() {
   _retrieveData('UserEmail').then(value => {
     console.log('Email Is ', value)
     this.setState({
       isEmail: true,
       userData: value
     })
   })
  }
 
  componentDidMount() {
    // when view appears
    SplashScreen.hide();
  }

  showUi = ()=> {
    let {isEmail} = this.state;
    if(isEmail) 
      return <navigationDrawer />
  
    else
      return <Routes/>
  }
  render() {
    console.disableYellowBox = true; 
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MyStatusBar barStyle="light-content" animated={true}/>  
          {/* {this.showUi()}   */}
          <Routes />
        </View>
      </Provider>
    );

  }
}
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 23 : 0;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});