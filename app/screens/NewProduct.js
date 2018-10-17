import React,{Component} from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {ScrollView} from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CardNewProduct } from '../components/CardNewProduct';




   const cardTitle = {cardTitle: {
     
    }}

export default class NewProduct extends Component {
        render(){

            return(
                <ScrollView>
            <CardNewProduct/>

            <CardNewProduct/>
            
            <CardNewProduct/>
            
            <CardNewProduct/>
            </ScrollView>
            )
                
                
                
        }




}


