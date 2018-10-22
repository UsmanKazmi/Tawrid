
import React, {Component} from 'react';
import {StyleSheet,Animated,Dimensions,ScrollView,View,Image,StatusBar,Text,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import {Colors} from '../../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AboutComponent extends Component {
    render() {
      return (
          <View style={styles.profileImageView}>
            <View style={styles.profileHeadingViewText}>
                <Text style={styles.profileHeadingText}>
                        About
                    </Text>
                </View>
        

         

       


        
        
         

  
  
          </View>
  
      )
  
  }}
  
  
  const styles = StyleSheet.create({
    profileImageView: {
    

      },
      profileHeadingViewText:{
            borderColor:Colors.LighterGrey,
            borderWidth:0.9,
            
     
    },
  
      profileImage: {
          margin:20,
          backgroundColor: '#f5f5f5',
     
        },
        tabBar: {
          flexDirection:'row',
          backgroundColor: Colors.White,
          borderBottomColor: Colors.DarkGrey,
          borderBottomWidth: 1,
        },
        profileHeadingText: {
            marginTop:5,
            marginBottom:5,
            borderRadius:5,
            marginHorizontal:15,
            borderColor:Colors.LighterGrey,
            fontWeight:'bold',
            fontSize:15,
            textAlign:'left',
            color:Colors.Green
        },

        profileText: {
            marginHorizontal:20,
            marginVertical:10,
            fontSize:12,
            textAlign:'left',
            color:Colors.Grey
        },
        clientText:{
            fontSize:10,
            textAlign:'center'
        }
        
      
  })