
import React, {Component} from 'react';
import {StyleSheet,Animated,Dimensions,ScrollView,View,Image,StatusBar,Text,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import {Colors} from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import RouteOrders from '../config/RouteOrders';
import { Search } from '../components/Search';
import { CardActiveOrders } from '../components/CardActiveOrders';
import { SliderRange } from '../components/SliderRange';
import { Card_OrderDetails_Detail } from '../components/Card_OrderDetails_Detail';

export default class OrderDetails_Details extends Component {
  render() {
    return (

        <ScrollView style={styles.mainView}>

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


                <View style={{
                    borderWidth:1,
                    borderRadius:5,
                    borderColor:Colors.Grey,
                    margin:20,
                    padding:10

                }}>                               
                        <View style={styles.shippingView}>

                                <Image
                                        style={{height:15,width:15, }}
                                        source={require('../../assets/icons/shipping.png')}
                                    />

                                <Text style={styles.shippingText}>
                                        Shipping:N/A
                                    </Text>

                                                                
                        </View>
                        

                        <View style={{ 
                            flexDirection: 'row'
                        }}>
                                    <SliderRange/>
                        </View>

                        <View style={styles.chatView}>
                                                    
                                <Text style={styles.chatText}>
                                    Created: 2018‑08‑17 
                                </Text>

                                <Text style={styles.requiredText}>
                                    Required Price Offer
                                </Text>

                            </View> 
                </View>   
                <View style={{
                        flexDirection:"row",
                        justifyContent:'space-evenly'
                }}>

                     <Card_OrderDetails_Detail/>
                     <Card_OrderDetails_Detail/>


                </View>

        </ScrollView>
    )

}}


const styles = StyleSheet.create({
    mainView: {
     height:100 +'%',
     width:100 +'%',
     flex:1,
    flexDirection:'column',
    marginBottom:40,
    },
    
    shippingText:{
        marginLeft:5,

        fontSize:11,
        textAlign:'left'
    },
    shippingView:{
        marginBottom:1,
        marginRight:10,
        marginLeft:10,
        flexDirection:'row',
    },

    chatView:{
        marginRight:10,
        marginLeft:10,
        flexDirection:'row',
    },
    chatText:{
        fontSize:10,
        textAlign:'left',
        color:Colors.DarkGrey
    },
    requiredText:{
        color:'red',
        fontSize:10,
        flex:1,
        textAlign:'right'
    },


     
    
})