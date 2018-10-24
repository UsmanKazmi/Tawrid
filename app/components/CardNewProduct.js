import React,{Component} from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {ScrollView} from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

const {height} = Dimensions.get('window')

export class CardNewProduct extends Component {
    
    render(){

 

    return (
       
        <View style={styles.mainView}>

        <Swiper style={styles.wrapper} showsButtons={false}
        activeDot=
        {<View style={{backgroundColor:'#fdc300', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}	
        
        >
                <View style={styles.slide1}>
                    <Image
                    style={styles.image}
                    source={require('../../assets/images/product.jpg')}
                    />
                    </View>

                    <View style={styles.slide1}>
                    <Image
                    style={styles.image}
                    source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}

                    />
                    </View>
        </Swiper>






        <View style={{ 
                backgroundColor: Colors.LightGreen,
            }}>
                    <View style={{flexDirection:"row"}}>
                        <Text 
                            style={styles.cardTitle}>{'30 CM. Crockery Set '}
                         </Text>

                         <Image
                         style={{height:20,width:20,marginHorizontal:5, alignSelf:'center'}}
                         source={require('../../assets/icons/loyalitybadge.png')}
                         />

                        <Text 
                            style={styles.cardPrice}>{'$62.93'}
                        </Text>
                    </View>
          <Text style={styles.cardSubTitle}>{'20 PIECES in BOX'}</Text>

          <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
                />
                
                <View style={{flexDirection:"row", justifyContent:'space-evenly'}}>

                    <TouchableOpacity style={styles.bottomButtons}>
                            <Image
                                style={{height:20,width:20, }}
                                source={require('../../assets/icons/addtocart.png')}
                            />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomButtons}>
                            <Image
                                style={{height:20,width:20, }}
                                source={require('../../assets/icons/fav.png')}
                            />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomButtons}>
                            <Image
                                    style={{height:20,width:20, }}
                                    source={require('../../assets/icons/comment.png')}
                            />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomButtons}>
                            <Image
                                    style={{height:20,width:20, }}
                                    source={require('../../assets/icons/share.png')}
                            />
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.bottomButtons}>
                            <Image
                                    style={{height:20,width:20, }}
                                    source={require('../../assets/icons/info.png')}
                            />
                    </TouchableOpacity>




                    
                 
                
                </View>



        </View>
      </View>

       
     );
  }
}

const styles = StyleSheet.create({
    mainView: {   
        flexDirection: 'column', 
        margin: 15
    },
    image: 
        { 
        width: 100+'%', 
        height: 100+'%',  
    },
    cardTitle:{
        flex:1,
        color: 'white', 
        fontSize: 15, 
        marginLeft:15,
        marginBottom:5,
        marginTop:10,
        fontWeight:"bold"

    },
    cardSubTitle:{
        color: 'white', 
        fontSize: 10,
        marginLeft:15,
        marginBottom:10
    },
    cardPrice:{
        fontWeight:"bold",
        color: 'white', 
        fontSize: 15,
        textAlign:'right',
        marginRight:15,
        marginBottom:5,
        marginTop:10,

    },
    bottomButtons:{
        alignSelf:'center',
        padding:5,
    },
    wrapper: {
        width:100+'%',
        height:height/3
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    }

    
   
  });
  
