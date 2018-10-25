import React,{Component} from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {ScrollView} from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet,TouchableOpacity,Dimensions,TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Search } from '../components/Search';
import {ImageSlider_OrderSelected} from '../components/ImageSlider_OrderSelected'
import RouteCardSelected from '../config/RouteCardSelected';


   const cardTitle = {cardTitle: {
     
    }}

export default class OrderSelected extends Component {
        render(){

            return(
                <View style={{paddingBottom:30}}>
                <ScrollView  >

                <View style={styles.navBar}>

                <TouchableHighlight          
                    onPress={this.openNavigationDrawer}
                    style = {styles.filterIcon}>
        
                        <Icon name="md-list" 
                            size={25} 
                            color={Colors.DarkGrey} />
                </TouchableHighlight>
        
                <TouchableHighlight 
                onPress={this.openGridView}
                style = {styles.filterIcon}>
                    <Icon name="ios-grid-outline" size={25} color={Colors.DarkGrey} />
                </TouchableHighlight>
          
        
              <View style={styles.titleTextView}>
                <Text style={styles.titleText}>
        
                {"My Orders"}
                
                </Text>
              </View>
        
              <View style={styles.navBarButtons}>
        
                <TouchableHighlight style = {styles.filterIcon}>
                  <Icon name="ios-notifications-outline" size={25} color={Colors.DarkGrey} />
                </TouchableHighlight>
        
                <TouchableHighlight>
                  <Icon name="ios-funnel-outline" size={25} color={Colors.DarkGrey} />
                </TouchableHighlight>
        
              </View>
        
          </View>
          
          <View style={styles.searchBox}>
        
          <Search placeholder={'Search Orders'}/>
            </View >
                
                

                    <View style={{
                                paddingVertical:5,
                                flex:1,
                                borderWidth:StyleSheet.hairlineWidth,
                                borderColor:Colors.Grey
                            }}>
                        </View>


                        <View style={{
                            marginVertical:5,
                            height: screenHeight/2.5,
                         
                        }}>

                        <ImageSlider_OrderSelected/>
                    </View>

                <View style={{  
                        margin:20
           


                }}>


                    <View style={{  
                        flexDirection:"row",
                        flex:3,
               


                    }}>
                        <View style={{  
                            padding:5,
                            borderRadius:20,
                            backgroundColor:Colors.Grey,
                            flexDirection:"row",

    
                        }}>

                            <Image 
                            style={{ width: 10, height: 10, marginHorizontal:3 }}
                            source={require('../../assets/icons/briefcase.png')} />

                              <Text style={{ fontSize: 7,color:Colors.White}}>
                                      KRM HEDIYELIK
                              </Text>

                        </View>
                    </View>

                    <View style={{flexDirection:"row"}}>
                        <Text 
                            style={styles.cardTitle}>{'30 CM. Crockery Set '}
                         </Text>

                         <Image
                         style={{height:20,width:20,marginHorizontal:5, alignSelf:'center'}}
                         source={require('../../assets/icons/loayalitybadgeGreen.png')}
                         />

                        <Text 
                            style={styles.cardPrice}>{'$62.93'}
                        </Text>
                    </View>
                    <Text style={styles.cardSubTitle}>{'20 PIECES in BOX in BOX / 4.5 KG'}</Text>




                    <View style={{flexDirection:"row"}}>
                    <Text 
                        style={
                           { 
                            flex:1,
                            color: Colors.Grey, 
                            fontSize: 9, 
                            alignSelf:'flex-end'

                        }}>{'Tags: #Ramadan Products, #Home Crockery, #Plates'}
                     </Text>

                     <Image
                     style={{height:18,width:18}}
                     source={require('../../assets/icons/addtocartplus.png')}
                     />

                 
                </View>


                



                        
                    
                </View>
                <View  style={{        height:screenHeight/2.5
            }}>
                <RouteCardSelected/>
                </View>
                </ScrollView>

            </View>
            )
                
                
                
        }




}

const screenHeight = Dimensions.get('window').height;


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
    
      },
      cardTitle:{
        flex:1,
        color: Colors.DarkGrey, 
        fontSize: 17, 
        marginBottom:5,
        marginTop:10,
        fontWeight:"bold"

    },
    cardSubTitle:{
        color:  Colors.DarkGrey, 
        fontSize: 10,
        marginBottom:3
    },
    cardPrice:{
        fontWeight:"bold",
        color:  Colors.Green, 
        fontSize: 15,
        textAlign:'right',
        marginRight:15,
        marginBottom:5,
        marginTop:10,

    },
    
})