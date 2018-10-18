import React,{Component} from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {ScrollView} from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import TabProducts from '../screens/TabProducts';

const {height} = Dimensions.get('window')

export default class CardGridVew extends Component {
    static navigationOptions = {
        header: null
        
    }
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
                    source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
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
                            style={styles.cardTitle}>{'Title'}
                         </Text>

                         <Icon name="ios-funnel" style={{justifyContent:'center',alignSelf:'center'}} size={20} color={Colors.White} />

                        <Text 
                            style={styles.cardPrice}>{'Price'}
                        </Text>
                    </View>
          <Text style={styles.cardSubTitle}>{'Subtitle'}</Text>

          <View
                style={{
                    borderBottomColor: 'white',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
                />
                
                <View style={{flexDirection:"row", justifyContent:'space-evenly'}}>

                    <TouchableOpacity style={styles.bottomButtons}>
                            <Icon 
                                name="ios-funnel" 
                                style={styles.bottomButtons} 
                                size={20} 
                                color={Colors.White} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomButtons}>
                            <Icon 
                                name="ios-funnel" 
                                style={styles.bottomButtons} 
                                size={20} 
                                color={Colors.White} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomButtons}>
                            <Icon 
                                name="ios-funnel" 
                                style={styles.bottomButtons} 
                                size={20} 
                                color={Colors.White} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bottomButtons}>
                            <Icon 
                                name="ios-funnel" 
                                style={styles.bottomButtons} 
                                size={20} 
                                color={Colors.White} />
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.bottomButtons}>
                            <Icon 
                                name="ios-funnel" 
                                style={styles.bottomButtons} 
                                size={20} 
                                color={Colors.White} />
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
        height: 200,  
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
  
