import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet,TouchableOpacity, TouchableHighlight}   from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../helpers/Helpers';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style ={{flexDirection:'row', paddingStart:20, paddingBottom:50}}>
          
          <TouchableOpacity  style={styles.circleProfileImage}>
                 <Icon name={"chevron-right"}  size={30} color="#01a699" />
          </TouchableOpacity>

          <Text  style={styles.textProfileName} >John Wick</Text>
        
            
          <TouchableOpacity color="rgba(f, f, f, f)" style={styles.notificationIcon}>
                 <Icon name={"ios-notifications-outline"}  size={20} color="#01a699" />
          </TouchableOpacity>


       
          </View>


            <View style ={{flexDirection:'row', paddingStart:20}}>    
                    <TouchableOpacity style={styles.buttonRow}>
                        <Icon name={"ios-notifications-outline"}  size={30} color="#01a699" />
                        <Text  style={styles.pageText} >MY STORE</Text>
                        </TouchableOpacity>
                        
                </View>

            <View style ={{flexDirection:'row', paddingStart:20}}>    
                <TouchableOpacity style={styles.buttonRow}>
                    <Icon name={"ios-notifications-outline"}  size={30} color="#01a699" />
                    <Text  style={styles.pageText} >MY ORDERS</Text>
                    </TouchableOpacity>
                    
            </View>

            <View style ={{flexDirection:'row', paddingStart:20}}>    
                <TouchableOpacity style={styles.buttonRow}>
                    <Icon name={"ios-notifications-outline"}  size={30} color="#01a699" />
                    <Text  style={styles.pageText} >MY CART</Text>
                    </TouchableOpacity>
                
            </View>

            <View style ={{flexDirection:'row', paddingStart:20}}>    
                <TouchableOpacity style={styles.buttonRow}>
                    <Icon name={"ios-wallet"}  size={30} color="#01a699" />
                    <Text  style={styles.pageText} >MY STATEMENTS</Text>
                    </TouchableOpacity>
            
             </View>

             <View style ={{flexDirection:'row', paddingStart:20}}>    
                    <TouchableOpacity style={styles.buttonRow}
                    
                    >
                        <Icon name={"ios-settings"}  size={30} color="#01a699" />
                        <Text  style={styles.pageText} >CHATS</Text>
                 </TouchableOpacity>
         
          </View>

          <View style ={{flexDirection:'row', paddingStart:20}}>    
                    <TouchableOpacity style={styles.buttonRow}>
                        <Icon name={"ios-settings-outline"}  size={30} color="#01a699" />
                        <Text  style={styles.pageText} >SETTINGS</Text>
                    </TouchableOpacity>
      
             </View>


        <View style ={{flexDirection:'row', paddingStart:20}}>    
              <TouchableOpacity style={styles.buttonRow}>
                <Icon name={"ios-settings"}  size={30} color="#01a699" />
                <Text  style={styles.pageText} >PROFILE</Text>
                </TouchableOpacity>
   
         </View>


        </ScrollView>
        <View style ={{flexDirection:'row', paddingStart:20}}>    
        <TouchableOpacity style={styles.buttonRow}>
          <Icon name={"ios-logout"}  size={30} color="#01a699" />
          <Text  style={styles.pageText} >LOGOUT</Text>
          </TouchableOpacity>

   </View>
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
            padding:10,
            flexDirection:'row',
            flex:1,
            justifyContent:'flex-start',
            alignItems:'center'
        
      },
      pageText:{
        fontSize:10,

        //  color:Colors.Green,
          paddingStart:40,
          justifyContent:'flex-start',
          alignItems:'center'
      }

})
export default SideMenu;
