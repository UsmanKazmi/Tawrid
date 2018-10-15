import React, {Component } from 'react';
import {View,StyleSheet,ActivityIndicator} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'


export class Toasts extends Component { 
  render(){
    return <View style={styles.container}>
            <Toast ref="toast"/>
      </View>;
  
  
 }
}
 
 const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
});