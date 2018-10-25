
import React, {Component} from 'react';
import {StyleSheet,Animated,Dimensions,ScrollView,View,StatusBar,Text,TouchableHighlight,Image,TouchableOpacity,TextInput} from 'react-native';
import {Colors} from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import RouteOrders from '../config/RouteOrders';
import { Search } from '../components/Search';
import { CardActiveOrders } from '../components/CardActiveOrders';
import { CardChat } from '../components/CardChat';
import { ChatBubble } from '../components/ChatBubble';

export default class Chat extends Component {


  openNavigationDrawer = () => {

    this.props.navigation.toggleDrawer();

  }
  render() {
    return (

        <View style={{flex:1,paddingBottom:50}}>

              <View style={styles.navBar}>

                    <TouchableHighlight          
                        onPress={this.openNavigationDrawer}
                        style = {styles.filterIcon}>

                            <Icon name="md-list" 
                                size={25} 
                                color={Colors.DarkGrey} />
                    </TouchableHighlight>


                  <View style={styles.titleTextView}>
                      <Text style={styles.titleText}>

                        {"Chat"}
                      
                      </Text>

                  </View>
               </View>
               <ScrollView>


              <View style={{
                    flex:1,
                    borderWidth:StyleSheet.hairlineWidth,
                    borderColor:Colors.Grey
                  }}>
                    </View>

                    
                        <View >
                          <CardChat/>
                        </View>



                  <View style={{
                        flexDirection:"row",
                        justifyContent:'space-evenly'
                    }}>                            
                          <Text style={{
                            margin:24,

                            color:Colors.Grey,
                            alignSelf:'flex-end',
                            marginBottom:5
                            }}>   
                              20:30
                          </Text>

                          <ChatBubble 
                          chatText='Dear agent I want to discuss30 CM. Crockery Set'
                          backgroundColor={Colors.Green}
                          color={Colors.White}
                       />

                            
                             <View style={{
                               backgroundColor:Colors.LighterGrey,
                                alignSelf:'flex-end',
                                borderRadius:20,
                                marginBottom:2,
                                margin:24,
                                marginLeft:5


                               }}>
                                  <Image
                                      style={{
                                        padding:10,

                                          resizeMode:'center',
                                          height:15,
                                          width:15,
                                          alignSelf:'flex-end'

                                      }}
                                      source={require('../../assets/icons/profile.png')}
                              /> 
                             </View>
                      
  
                  </View>


                  <View style={{
                    marginVertical:30,
                    flexDirection:"row",
                    justifyContent:'flex-start'
                }}>    
                
                <View style={{
                  backgroundColor:Colors.LighterGrey,
                   alignSelf:'flex-start',
                   borderRadius:20,
                   marginBottom:2,
                   margin:24,
                   marginRight:5

                  }}>
                     <Image
                         style={{
                           padding:10,

                             resizeMode:'center',
                             height:15,
                             width:15,
                             alignSelf:'flex-end'

                         }}
                         source={require('../../assets/icons/admin.png')}
                 /> 
                </View>
                     

                      <ChatBubble 
                      backgroundColor={Colors.White}
                      color={Colors.Grey}
                      chatText='Sure'
                   />

                   <Text style={{
                    margin:24,

                    color:Colors.Grey,
                    alignSelf:'flex-end',
                    marginBottom:5
                    }}>   
                      20:40
                  </Text>

                        
                         
                  

              </View>


              <View style={{
                marginHorizontal:10,
                flexDirection:"row",
                justifyContent:'flex-start'
            }}>    
            
            <TextInput 
            underlineColorAndroid="transparent"  
            keyboardAppearance="light" 
            placeholder="Message..." 
            
            style={{
              paddingLeft:20,
              borderWidth:2,
              borderColor:Colors.LighterGrey,
           
              width:80 + '%'
            }}>
            
            </TextInput>

            <TouchableOpacity style={{
             alignSelf:'center',
             flex:1

            }} >
                <Text style={{
                  textAlign:"center",
                  fontSize:17,
                  color:Colors.Grey
                }

                }>
                    Send
                </Text>
            </TouchableOpacity>

                    
                     
              

          </View>
              
        

              </ScrollView>
              
           

        </View>
    )

}}


const styles = StyleSheet.create({
    newProductView: {
        paddingTop:10,  
        paddingBottom:10, 
    },

    container: {
        backgroundColor: Colors.White,
        flex: 1,
        alignItems: 'center',
      },
      tabBar: {
        flexDirection:'row',
        backgroundColor: Colors.White,
        borderBottomColor: Colors.DarkGrey,
        borderBottomWidth: 1,
      },
      tabFont: {
        fontSize: 15,
        fontFamily: 'DIN Next LT Arabic',
        // textTransform: 'uppercase',
        width: Dimensions.get('window').width/2,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        
      },
      tabItem: {
        alignItems: 'center',
        flex: 1,
        borderBottomColor: Colors.DarkGrey,
        borderBottomWidth: 1,
      },
      navBar: {
          flexDirection: 'row',
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 20,
          paddingRight: 20,
        
      },
      navBarTitle: {
        flexDirection: 'row',
        flex: 1,
      },
      navBarText: {
        textAlign: 'left',
        fontSize: 20,
        lineHeight: 24,
        fontFamily: 'DIN Next LT Arabic',
        fontWeight: 'bold',
        color: Colors.DarkGrey
      },
      titleText: {
          flex:1,
          textAlign: 'center',
          fontSize: 15,
          // lineHeight: 24,
          fontFamily: 'DIN Next LT Arabic',
          fontWeight: 'bold',
          color: Colors.DarkGrey,
  
  
        },
        titleTextView: {
          marginRight:10,
          flex:1,
          textAlign: 'center',
          fontSize: 15,
          // lineHeight: 24,
          fontFamily: 'DIN Next LT Arabic',
          fontWeight: 'bold',
          color: Colors.DarkGrey,
  
  
        },
      navBarButtons: {
        flexDirection: 'row',
      },
      filterIcon: {
        marginRight: 5,
      },
      searchBox: {
        justifyContent:'center',
        alignItems:'center'
      },
      searchField: {
        flexDirection:'row',
        height: 44,
        width: Dimensions.get('window').width -40,
        paddingLeft: 10,
        paddingRight: 20,
        backgroundColor:Colors.LighterGrey,
        fontFamily: 'DIN Next LT Arabic',
        fontSize: 17,
        color: Colors.DarkGrey,
        borderRadius: 10,
    
      }

     
    
})