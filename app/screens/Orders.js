
import React, {Component} from 'react';
import {StyleSheet,Animated,Dimensions,ScrollView,View,StatusBar,Text,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import {Colors} from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import RouteOrders from '../config/RouteOrders';
import { Search } from '../components/Search';

export default class Orders extends Component {

  openNavigationDrawer = () => {

    this.props.navigation.toggleDrawer();

  }
  render() {
    return (
        <View>

        <View style={styles.navBar}>

        <TouchableHighlight          
            onPress={this.openNavigationDrawer}
            style = {styles.filterIcon}>

                <Icon name="md-list" 
                    size={25} 
                    color={Colors.DarkGrey} />
        </TouchableHighlight>

        <TouchableHighlight 
        onPress={this.openGridView}
        style = {styles.filterIcon}>
            <Icon name="ios-grid-outline" size={25} color={Colors.DarkGrey} />
        </TouchableHighlight>
  

      <View style={styles.titleTextView}>
        <Text style={styles.titleText}>

        {"My Orders"}
        
        </Text>
      </View>

      <View style={styles.navBarButtons}>

        <TouchableHighlight style = {styles.filterIcon}>
          <Icon name="ios-notifications-outline" size={25} color={Colors.DarkGrey} />
        </TouchableHighlight>

        <TouchableHighlight>
          <Icon name="ios-funnel-outline" size={25} color={Colors.DarkGrey} />
        </TouchableHighlight>

      </View>

  </View>
  
  <View style={styles.searchBox}>

  <Search placeholder={'My Orders'}/>
    </View >

  

        <View style={{

          width:100 +"%",
          height:80 +"%"
          
          }}>
        <RouteOrders/>
        



        </View>



        </View>

    )

}}


const styles = StyleSheet.create({
    newProductView: {
        paddingTop:10,  
        paddingBottom:10, 
    },

    container: {
        backgroundColor: Colors.White,
        flex: 1,
        alignItems: 'center',
      },
      tabBar: {
        flexDirection:'row',
        backgroundColor: Colors.White,
        borderBottomColor: Colors.DarkGrey,
        borderBottomWidth: 1,
      },
      tabFont: {
        fontSize: 15,
        fontFamily: 'DIN Next LT Arabic',
        // textTransform: 'uppercase',
        width: Dimensions.get('window').width/2,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        
      },
      tabItem: {
        alignItems: 'center',
        flex: 1,
        borderBottomColor: Colors.DarkGrey,
        borderBottomWidth: 1,
      },
      navBar: {
          flexDirection: 'row',
          paddingTop: 15,
          paddingBottom: 15,
          paddingLeft: 20,
          paddingRight: 20,
        
      },
      navBarTitle: {
        flexDirection: 'row',
        flex: 1,
      },
      navBarText: {
        textAlign: 'left',
        fontSize: 20,
        lineHeight: 24,
        fontFamily: 'DIN Next LT Arabic',
        fontWeight: 'bold',
        color: Colors.DarkGrey
      },
      titleText: {
          flex:1,
          textAlign: 'center',
          fontSize: 15,
          // lineHeight: 24,
          fontFamily: 'DIN Next LT Arabic',
          fontWeight: 'bold',
          color: Colors.DarkGrey,
  
  
        },
        titleTextView: {
          flex:1,
          textAlign: 'center',
          fontSize: 15,
          // lineHeight: 24,
          fontFamily: 'DIN Next LT Arabic',
          fontWeight: 'bold',
          color: Colors.DarkGrey,
  
  
        },
      navBarButtons: {
        flexDirection: 'row',
      },
      filterIcon: {
        marginRight: 5,
      },
      searchBox: {
        justifyContent:'center',
        alignItems:'center'
      },
      searchField: {
        flexDirection:'row',
        height: 44,
        width: Dimensions.get('window').width -40,
        paddingLeft: 10,
        paddingRight: 20,
        backgroundColor:Colors.LighterGrey,
        fontFamily: 'DIN Next LT Arabic',
        fontSize: 17,
        color: Colors.DarkGrey,
        borderRadius: 10,
    
      }
    
})