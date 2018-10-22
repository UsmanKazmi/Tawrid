
import React, {Component} from 'react';
import {StyleSheet,Animated,Dimensions,ScrollView,View,Image,StatusBar,Text,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import {Colors} from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import AboutComponent from '../components/ProfileComponents/AboutComponent';

export default class Profile extends Component {
    render() {
      return (
          <View>
            <View style={styles.profileImageView}>
                <Image
                 style={styles.profileImage} 
                 resizeMode={"contain"} 
                 source={require('../../assets/images/profile.png')} />
                 
            </View>
            <Text style={styles.profileNameText}>
                Khaled Alawadi
            </Text>

            <Text style={styles.clientText}>
                (client)
            </Text>

            <View style={styles.AboutComponent}>
                <AboutComponent 
                    aboutText="First Name"
                />
                <View style={styles.profileHeadingViewText}>
                    <Text style={styles.profileHeadingText}>
                        First Name
                    </Text>

                    <Text style={styles.nameText}>
                        Khaled Alawedi
                     </Text>
                </View>

                <View style={styles.profileHeadingViewText}>
                        <Text style={styles.profileHeadingText}>
                            Last Name
                        </Text>

                        <Text style={styles.nameText}>
                            Khaled Alawedi
                        </Text>
                 </View>

                 <View style={styles.profileHeadingViewText}>
                    <Text style={styles.profileHeadingText}>
                        Company
                    </Text>

                    <Text style={styles.nameText}>
                        Khaled Alawedi
                    </Text>
                 </View>

                 <View style={styles.profileHeadingViewText}>
                    <Text style={styles.profileHeadingText}>
                        Role
                    </Text>

                    <Text style={styles.nameText}>
                        Khaled Alawedi
                    </Text>
                 </View>

                 
                 <View style={styles.profileHeadingViewText}>
                    <Text style={styles.profileHeadingText}>
                        Country
                    </Text>

                    <Text style={styles.nameText}>
                        Khaled Alawedi
                    </Text>
                 </View>

              

             

           
                
            </View>


        
         

  
  
          </View>
  
      )
  
  }}
  
  
  const styles = StyleSheet.create({
    profileImageView: {
        backgroundColor: '#f4f4f4',
        justifyContent:"center",
        marginTop:40,
        marginLeft:40,
        marginRight:40,
        marginBottom:10,



        alignSelf:'center',
        flexDirection:'column',       
        borderRadius:60,

      },
      nameText:{
          flex:1,
        marginHorizontal:10,
        marginVertical:10,
        fontSize:12,
        textAlign:'right',
        color:Colors.DarkGrey,
        textAlign:'right'

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
        profileNameText: {
            fontWeight:'bold',
            fontSize:15,
            textAlign:'center'
        },
        clientText:{
            fontSize:10,
            textAlign:'center'
        },
        AboutComponent:{
            borderWidth:2,
            borderColor:Colors.LighterGrey,
            width:90 + '%',
            alignSelf:'center',
            justifyContent:'center',
            marginVertical:10
            

        },
        profileHeadingText: {
            marginHorizontal:15,
            marginVertical:10,
            fontSize:12,
            textAlign:'left',
            color:Colors.Grey
        },
        profileHeadingViewText:{
            flexDirection:'row',
            borderColor:Colors.LighterGrey,
            borderWidth:0.9
        }
        
      
  })