
import React, {Component} from 'react';
import {StyleSheet,Animated,Dimensions,ScrollView,View,Image,StatusBar,Text,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import {Colors} from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import AboutComponent from '../components/ProfileComponents/AboutComponent';

export default class Profile extends Component {
    render() {
      return (
        <View style={{ }}>    

        <ScrollView  style={{height:90 + '%',}}>


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
                    Name="About"
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


            

            
            <View style={styles.ContactComponent}>
                <AboutComponent 
                    Name="Contact Info"
                />

               <View style={styles.contactHeadingViewText}>
                    <View style={styles.contactIconImage}>

                    <View style={styles.iconImageView}>
                    <Image
                     style={styles.iconImage} 
                     resizeMode={"contain"} 
                     source={require('../../assets/icons/location.png')} />
                     
                </View>

                    </View>

                    <View style={styles.contactInfoViewText}>
                        <Text style={styles.topText}>
                            Address
                        </Text>

                        <Text style={styles.botText}>
                        RAWAD ALESTORA TRADING EST AL
                        HINDAWIAH – NEAR ZAHRET ALHINDAWIAH
                        JEDDAH 21464
                        
                        </Text>
                      
                

                    </View>
                </View>

                <View style={styles.contactHeadingViewText}>
                    <View style={styles.contactIconImage}>

                    <View style={styles.iconImageView}>
                    <Image
                     style={styles.iconImage} 
                     resizeMode={"contain"} 
                     source={require('../../assets/icons/phone.png')} />
                     
                </View>

                    </View>

                    <View style={styles.contactInfoViewText}>
                        <Text style={styles.topText}>
                        Phone
                        </Text>

                        <Text style={styles.botText}>
                        00966508753077
                        
                        </Text>
                      
                

                    </View>
                </View>


                <View style={styles.contactHeadingViewText}>
                    <View style={styles.contactIconImage}>

                    <View style={styles.iconImageView}>
                    <Image
                     style={styles.iconImage} 
                     resizeMode={"contain"} 
                     source={require('../../assets/icons/consignee.png')} />
                     
                </View>

                    </View>

                    <View style={styles.contactInfoViewText}>
                        <Text style={styles.topText}>
                        Consignee
                        </Text>

                        <Text style={styles.botText}>
                         RWAD ALESTORA TRADING EST
                        ADDRESS: JEDDAH. ALHENDAWIAH
                        TEL:00966126492540
                        FAX:00966126492991

                        
                        </Text>
                      
                

                    </View>
                </View>



                    






                <View style={styles.contactHeadingViewText}>
                <View style={styles.contactIconImage}>

                <View style={styles.iconImageView}>
                <Image
                 style={styles.iconImage} 
                 resizeMode={"contain"} 
                 source={require('../../assets/icons/email.png')} />
                 
            </View>

                </View>

                <View style={styles.contactInfoViewTextLAST}>
                    <Text style={styles.topText}>
                    Emails
                    </Text>

                    <Text style={styles.botText}>
                       abwewc@1wewe23.com
                   

                    
                    </Text>
                  
            

                </View>
            </View>

                
            </View>


            
            
            <View style={styles.AboutComponent}>
                <View style={{flexDirection:'row'}}>
                    <View>
                        <AboutComponent 
                            Name="Change Password"
                        />
                    </View>

                    <View style={{alignItems:'flex-end',flex:1, paddingRight:10}}>
                        <Image
                            style={{width:30,height:30}} 
                            resizeMode={"contain"} 
                            source={require('../../assets/icons/rightArrow.png')} />
                    </View>
                </View>
                
            </View>


            


        

        
                
                
            
            
        
        </ScrollView>

          </View>

  
      )
  
  }}
  
  
  const styles = StyleSheet.create({
      topText:{
        fontSize:13,
        color:Colors.Grey

        
      },
      botText:{
        fontSize:13,
        fontWeight:'bold',
        color:Colors.DarkGrey,
        paddingBottom:15,


      },
    contactInfoViewText:{
        marginTop:15,
        

        flex: 1,
        flexDirection:'column',
        borderBottomWidth:0.9,
        borderBottomColor:Colors.Grey
        
    },
    contactInfoViewTextLAST:{
     
        marginTop:15,


        flex: 1,
        flexDirection:'column',
        borderBottomColor:Colors.Grey
    },
    contactInfoViewImage:{
        margin:20,
        flexDirection:'row',
        
    },
    contactIconImage:{
        margin:10,
        flexDirection:'row',
    },
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

      iconImageView:{
        backgroundColor:'#f4f4f4',
        width:40,
        height:40 +'%',
        alignItems:'center',
        borderRadius:40,
        justifyContent:"center",
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
        backgroundColor: '#f4f4f4',
        borderRadius:20,
        margin:20

     
        },
        iconImage: {
          backgroundColor: '#f4f4f4',
            borderRadius:20,
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
            marginVertical:10,
            paddingTop:10,
            paddingBottom:10,

            borderWidth:2,
            borderColor:Colors.LighterGrey,
            width:90 + '%',
            alignSelf:'center',
            borderRadius:10,
            flex:1,
            justifyContent:'center'
            

        },

        ContactComponent:{
            marginVertical:10,
            paddingTop:30,
            paddingBottom:30,

            borderWidth:2,
            borderColor:Colors.LighterGrey,
            width:90 + '%',
            alignSelf:'center',
            borderRadius:10,
            flex:1,
            justifyContent:'center'
            

        },
        contactComponent:{
            borderWidth:2,
            borderColor:Colors.LighterGrey,
            width:90 + '%',
            height:100+ '%',
            alignSelf:'center',

        },
        profileHeadingText: {
            marginHorizontal:15,
            fontSize:12,
            textAlign:'left',
            color:Colors.Grey,
            alignSelf:'center'
        },
        profileHeadingViewText:{
            flexDirection:'row',
            borderColor:Colors.LighterGrey,
            borderWidth:0.9
        },
        contactHeadingViewText:{
            flexDirection:'row',
            borderColor:Colors.LighterGrey,
        }
        
      
  })