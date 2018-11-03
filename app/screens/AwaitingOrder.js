
import React, {Component} from 'react';
import {StyleSheet,Animated,Dimensions,ScrollView,View,StatusBar,Text,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import {Colors} from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import RouteOrders from '../config/RouteOrders';
import { Search } from '../components/Search';
import {CardActiveOrders} from '../components/CardActiveOrders';

export default class AwaitingOrder extends Component {
  render() {
    return (

        <ScrollView>
        <View style={styles.mainView}>


            <CardActiveOrders/>
            <CardActiveOrders/>
            <CardActiveOrders/>

   

       



        </View>
        </ScrollView>
    )

}}


const styles = StyleSheet.create({
    mainView: {
     height:100 +'%',
     width:100 +'%',
     flex:1,
    flexDirection:'column'
    },


     
    
})