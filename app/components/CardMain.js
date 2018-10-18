import React,{Component} from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {ScrollView} from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

const {height} = Dimensions.get('window')

export class CardMain extends Component {
    
    render(){

 

    return (
       
        <View style={{ width: 100 + '%', height: 200, flexDirection: 'row' }}>
        <Image
          style={{ width: 100 +'%' , 
          borderRadius:3,
          height: 200, position: 'absolute' }}
          source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
        />
        < View style = {
            {
                
                flexDirection: "row",
                alignSelf: 'flex-end',
                padding: 10,
            }
        } >

          <Text style={{ 
                color: 'white', 
                fontSize: 15,  
                fontWeight:'bold', 
                lineHeight:20, 
                flex:3

        }}>
        {'HandThrasd as dasdown Dipped Ceramic Vase'}</Text>

        <TouchableOpacity  style={{backgroundColor:'transparent', flex:1, justifyContent:"center"}}>
                <View>
                    <Text  style={{ fontSize:10,borderRadius:2,textAlign:"center", backgroundColor: Colors.Yellow, color:Colors.White ,  fontWeight:'bold', 
                    lineHeight:30, }}>
                        View
                    </Text>
                
                </View>

        </TouchableOpacity>

        </View>
      </View>

       
     );
  }
}

const styles = StyleSheet.create({
    

    
   
  });
  
