import React,{Component} from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {ScrollView} from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

const {height,width} = Dimensions.get('window')

export class SmallProductCard extends Component {
    
    render(){

 

    return (
        
        <View style={{ 
            width:24 + '%', 
            height:100 + '%', 
    
    
    
    }}>
        <View>
        <Image
          style={{

                width:100, 
                borderRadius:3,
                height: 100 ,
                position:'absolute'
        
        
        }}
          source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
        />
        </View>

        <View style = {{flexDirection: "row"}}>

            <TouchableOpacity  style={{

                        backgroundColor:Colors.Green, 
                        borderRadius:5,
                        padding:3,
                        marginStart:40,
                        marginTop:3

                        
            }}>

                <View style={{
                    flexDirection:'row'
            }}>

                <Icon name="ios-funnel" style={{justifyContent:'center',alignSelf:'center'}} size={10} color={Colors.White} />


                    <Text  style={{ 
                        fontSize:10,
                        borderRadius:2,
                        textAlign:"center", 
                        backgroundColor: Colors.Green, 
                        color:Colors.White ,  
                        fontWeight:'bold', 
                    }}>
                        2222.22
                    </Text>
                
                </View>
               

        </TouchableOpacity>
      
      

        </View>

        <Text  style={{ 
            fontSize:10,
            borderRadius:2,
            textAlign:"center", 
            backgroundColor: Colors.Green, 
            color:Colors.White ,  
            fontWeight:'bold', 
        }}>
        KRM HEIFHU
        </Text>
      </View>
      

       
     );
  }
}

const styles = StyleSheet.create({
    

    
   
  });
  
