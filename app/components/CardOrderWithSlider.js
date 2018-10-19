import React,{Component} from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {ScrollView} from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Carousel from "react-native-carousel-control";

const {height} = Dimensions.get('window')

export class CardOrderWithSlider extends Component {
    
  

    
    render(){

 

        return (
            <Carousel>
            <Text>Hello</Text>
            <Text>World!</Text>
                    <Image
                            style={styles.image}
                            source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' 
                        }}
                    />
            <Text>From carousel</Text>
        </Carousel>
        );
  }
}

const styles = StyleSheet.create({
    title: {  
        flex:1        
    },
    image: 
    { 
        height:200,
        width: 100+'%', 
},
slide: {
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
  wrapper: {
   flex:1
},
   
    
   
  });
  
