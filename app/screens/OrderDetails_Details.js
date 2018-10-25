
import React, {Component} from 'react';
import {StyleSheet,Animated,Dimensions,ScrollView,View,Image,StatusBar,Text,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import {Colors} from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import RouteOrders from '../config/RouteOrders';
import { Search } from '../components/Search';
import { CardActiveOrders } from '../components/CardActiveOrders';

export default class OrderDetails_Details extends Component {
  render() {
    return (

        <View style={styles.mainView}>

                <View style={{
                  
                    borderBottomWidth:1,
                    borderBottomColor:Colors.Grey

                }}>
                        <View style={{
                            marginHorizontal:15,
                            marginVertical:20,
        
                        }}>

                                <View style={{
                                    width:100 + '%',
                                    flexDirection:'row',
                                    padding:5,
                                
                
                                }}>
                                
                                        <View style={{
                                            
                        
                                        }}>
                                                <Image
                                                    style={{
                                                        alignItems:'flex-start',
                                                        height:35,
                                                        width:35,
                                                        marginHorizontal:10
                                                    }}
                                                    source={require('../../assets/icons/container.png')}
                                                />                                        
                                        
                                        
                                        
                                        </View>
                                
                                        <View style={{
                                            alignSelf:'center'
                                        
                        
                                        }}>
                                                <Text style={{
                                                    textAlign:'left',
                                                    color:Colors.Green,
                                                    fontSize:10,

                                                }}>
                                                     XXXU1234567                
                                                </Text>

                                                <Text style={{
                                                    textAlign:'left',
                                                    color:Colors.Grey,
                                                    fontSize:10,


                                                }}>
                                                     Container No.
                                                </Text>

                                        </View>  
                                        
                                        <View style={{
                                            alignSelf:'center',
                                            flex:1,
                        
                                        }}>
                                                <Text style={{
                                                    textAlign:'right',
                                                    color:Colors.Green,
                                                    fontSize:10,

                                                }}>
                                                        1X40HC                
                                                </Text>

                                                <Text style={{
                                                    textAlign:'right',
                                                    fontSize:10,
                                                    color:Colors.Grey,



                                                }}>
                                                        Container Count and Type
                                                </Text>

                                        </View>   


                                </View>

                        </View>   
                                        
                </View>

                <View style={{
                  
                    borderBottomWidth:1,
                    borderBottomColor:Colors.Grey

                }}>
                        <View style={{
                            marginHorizontal:15,
                            marginVertical:20,
        
                        }}>

                                <View style={{
                                    width:100 + '%',
                                    flexDirection:'row',
                                    padding:5,
                                
                
                                }}>
                                
                                        <View style={{
                                            
                        
                                        }}>
                                                <Image
                                                    style={{
                                                        alignItems:'flex-start',
                                                        height:35,
                                                        width:35,
                                                        marginHorizontal:10
                                                    }}
                                                    source={require('../../assets/icons/container.png')}
                                                />                                        
                                        
                                        
                                        
                                        </View>
                                
                                        <View style={{
                                            alignSelf:'center'
                                        
                        
                                        }}>
                                                <Text style={{
                                                    textAlign:'left',
                                                    color:Colors.Green,
                                                    fontSize:10,

                                                }}>
                                                     XXXU1234567                
                                                </Text>

                                                <Text style={{
                                                    textAlign:'left',
                                                    color:Colors.Grey,
                                                    fontSize:10,
                                                }}>
                                                     Container No.
                                                </Text>

                                        </View>  
                                        
                                        <View style={{
                                            alignSelf:'center',
                                            flex:1,
                        
                                        }}>
                                                <Text style={{
                                                    textAlign:'right',
                                                    color:Colors.Green,
                                                    fontSize:10,

                                                }}>
                                                        1X40HC                
                                                </Text>

                                                <Text style={{
                                                    textAlign:'right',
                                                    fontSize:10,
                                                    color:Colors.Grey,



                                                }}>
                                                        Container Count and Type
                                                </Text>

                                        </View>   

                                </View>

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