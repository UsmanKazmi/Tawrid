import React,{Component} from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {ScrollView} from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

const {height} = Dimensions.get('window')

export class ChatBubble extends Component {
    
    render(){

 

    return (
        <Text style={{
            borderWidth:1,
            borderColor:Colors.LighterGrey,
            width:Dimensions.get('window').width/1.5,
            paddingHorizontal:20,
            paddingVertical:20,
            borderRadius:5,
            backgroundColor:this.props.backgroundColor,
            color:this.props.color,
            
         }}>    
          {this.props.chatText}               
      </Text>

       


       
     );
  }
}


    
   
  
  
