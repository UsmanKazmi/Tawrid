
import React, {Component} from 'react';
import {StyleSheet,Animated,Dimensions,ScrollView,View,StatusBar,Text,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import {Colors} from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import RouteOrders from '../config/RouteOrders';
import { Search } from '../components/Search';
import { CardActiveOrders } from '../components/CardActiveOrders';

export default class OrderDetails_Files extends Component {
  render() {
    return (

        <View style={styles.mainView}>

                <View style={{
                    marginHorizontal:40,
                    marginVertical:20

                }}>

                        <View style={{
                            marginVertical:7,
                            flexDirection:'row',
                            width:100 + '%'
        
                        }}>                       
                                <Text style={{
                                    textAlign:'left',
                                    flex:1,
                                    color:Colors.LightGrey,
                                    fontSize:12

                                }}>
                                        Price                
                                </Text>

                                <Text style={{
                                    textAlign:'right',
                                    color:Colors.DarkGrey,
                                    fontFamily:'bold',
                                    fontSize:13


                                }}>
                                         $5.50                
                                 </Text>
                        </View>


                        <View style={{
                            marginVertical:7,
                            flexDirection:'row',
                            width:100 + '%',
                            
        
                        }}>                       
                                <Text style={{
                                    textAlign:'left',
                                    flex:1,
                                    color:Colors.LightGrey,
                                    fontSize:12

                                }}>
                                        Unit                
                                </Text>

                                <Text style={{
                                    textAlign:'right',
                                    color:Colors.DarkGrey,
                                    fontFamily:'bold',
                                    fontSize:13


                                }}>
                                         Pieces                
                                 </Text>
                        </View>

                        <View style={{
                            marginVertical:7,
                            flexDirection:'row',
                            width:100 + '%'
        
                        }}>                       
                                <Text style={{
                                    textAlign:'left',
                                    flex:1,
                                    color:Colors.LightGrey,
                                    fontSize:12

                                }}>
                                        Package                
                                </Text>

                                <Text style={{
                                    textAlign:'right',
                                    color:Colors.DarkGrey,
                                    fontFamily:'bold',
                                    fontSize:13


                                }}>
                                         Box                
                                 </Text>
                        </View>

                        <View style={{
                            marginVertical:7,
                            flexDirection:'row',
                            width:100 + '%'
        
                        }}>                       
                                <Text style={{
                                    textAlign:'left',
                                    flex:1,
                                    color:Colors.LightGrey,
                                    fontSize:12

                                }}>
                                     Quantity in Package                
                                </Text>

                                <Text style={{
                                    textAlign:'right',
                                    color:Colors.DarkGrey,
                                    fontFamily:'bold',
                                    fontSize:13


                                }}>
                                         12                
                                 </Text>
                        </View>


                
                </View>

        </View>
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