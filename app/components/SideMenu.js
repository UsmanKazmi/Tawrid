import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StackActions,NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet,TouchableOpacity, TouchableHighlight,Image}   from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../helpers/Helpers';


const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'logoutStack' })],
});

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }





    openStoreTabs = ()=> {
    this.props.navigation.navigate('storeTabs');
  }

  logout = ()=> {
    //  this.props.navigation.navigate('logoutStack')  
    }

  openNotification = ()=> {
    this.props.navigation.navigate('notification');
  }
  render () {
    console.log('props ', this.props)
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style ={{flexDirection:'row', paddingStart:20, paddingBottom:50}}>
          
          <TouchableOpacity  style={styles.circleProfileImage}>

                 <Icon name={"ios-add"}  size={30} color="#01a699" />
                 
          </TouchableOpacity>


          <Text  style={styles.textProfileName} >John Wick</Text>
        
            
          <TouchableOpacity color="rgba(f, f, f, f)" 
            onPress={this.openNotification}
          
            style={styles.notificationIcon}>
                 <Icon name={"ios-notifications-outline"}  size={20} color="#01a699" />
          </TouchableOpacity>


       
          </View>

             {/*<TouchableHighlight style={styles.buttonRow} underlayColor={Colors.TransparentGreen}
               onPress={ this.openStoreTabs}>
                  <View style ={{flexDirection:'row', paddingStart:20}}>    
                          <Image
                                style={{height:20,width:20, }}
                                source={require('../../assets/icons/menu1.png')}
                            /> 
                          <Text  style={styles.pageText} >MY STORE</Text>
                  </View>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonRow} underlayColor={Colors.TransparentGreen} 
                    onPress={() => this.props.navigation.navigate('Orders')}>
                <View style ={{flexDirection:'row', paddingStart:20}}>    

                      <Image
                          style={{height:20,width:20, }}
                          source={require('../../assets/icons/menu2.png')}
                      /> 
                    <Text  style={styles.pageText} >MY ORDERS</Text>
                    
               </View>
            </TouchableHighlight>


                <TouchableHighlight style={styles.buttonRow} underlayColor={Colors.TransparentGreen}  
                onPress={() => this.props.navigation.navigate('Cart')}>
                <View style ={{flexDirection:'row', paddingStart:20}}>    

                        <Image
                            style={{height:20,width:20, }}
                            source={require('../../assets/icons/menu3.png')}
                        />                     
                        <Text  style={styles.pageText} >MY CART</Text>
                </View>
            </TouchableHighlight>


            <TouchableHighlight style={styles.buttonRow} underlayColor={Colors.TransparentGreen}  
            onPress={() => this.props.navigation.navigate('Statement')}>
              <View style ={{flexDirection:'row', paddingStart:20}}>    
                <Image
                      style={{height:20,width:20, }}
                      source={require('../../assets/icons/menu4.png')}
                  />  
                <Text  style={styles.pageText} >MY STATEMENTS</Text>
              </View>
             </TouchableHighlight>


             <TouchableHighlight style={styles.buttonRow} underlayColor={Colors.TransparentGreen}  
              onPress={() => this.props.navigation.navigate('Chat')}>
                    <View style ={{flexDirection:'row', paddingStart:20}}>    
                                <Image
                                    style={{height:20,width:20, }}
                                    source={require('../../assets/icons/menu5.png')}
                              />                         
                              <Text  style={styles.pageText} >CHATS</Text>
              
                    </View>
    </TouchableHighlight>*/}

          <TouchableHighlight style={styles.buttonRow} underlayColor={Colors.TransparentGreen}  >

              <View style ={{flexDirection:'row', paddingStart:20}}>    
                            <Image
                                  style={{height:20,width:20, }}
                                  source={require('../../assets/icons/menu6.png')}
                              />                              
                              <Text  style={styles.pageText}>SETTINGS</Text>
      
                  </View>
             </TouchableHighlight>


             <TouchableHighlight style={styles.buttonRow} underlayColor={Colors.TransparentGreen}   
             onPress={() => this.props.navigation.navigate('Profile')}>
                <View style ={{flexDirection:'row', paddingStart:20}}>    

                        <Image
                            style={{height:20,width:20, }}
                            source={require('../../assets/icons/menu7.png')}
                          />                           
                    <Text  style={styles.pageText} >PROFILE</Text>
   
                </View>
         </TouchableHighlight>


        </ScrollView>

        <TouchableHighlight style={styles.buttonRow} underlayColor={Colors.White}
        onPress={this.logout}>

        <View style ={{flexDirection:'row', paddingStart:20}}>    

                <Image
                style={{height:20,width:20, }}
                source={require('../../assets/icons/menu8.png')}
              />            
              <Text  style={styles.pageText} >LOGOUT</Text>

   </View>
   </TouchableHighlight>

      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};


const styles = StyleSheet.create ({
    container: {
        paddingTop: 20,
        flex: 1
      },
      navItemStyle: {
        padding: 10
      },
      navSectionStyle: {
        backgroundColor: 'lightgrey'
      },
      sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
      },
      footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
      },
      circleProfileImage :{
            
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:40,
        height:40,
        backgroundColor:'#fff',
        borderRadius:100,
      },
      textProfileName: {
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        paddingLeft:10,
        fontWeight:"bold"

      },
      notificationIcon:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        alignSelf:'center',
        paddingEnd:20
      },
      buttonRow:{
            paddingHorizontal:10,
            paddingVertical:15,
            flexDirection:'row',
            flex:1,
            justifyContent:'flex-start',
            alignItems:'flex-end'
        
      },
      pageText:{
        fontSize:10,

        //  color:Colors.Green,
          paddingStart:40,
          justifyContent:'flex-start',
          alignItems:'center',
          textAlignVertical:'center'
      }

})
export default SideMenu;
