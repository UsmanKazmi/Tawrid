import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {Colors} from '../helpers/Helpers';
import {SwitchNavigator, TabNavigator, StackNavigator, createBottomTabNavigator,navigationOptions  } from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Store from '../screens/Store';
import TabProducts from '../screens/TabProducts';
import NewProduct from '../screens/NewProduct';
import CardGridView from '../components/CardGridVew';





//stacks for HomePage Tabs Routing


const ProductsTab = TabNavigator({

    newProducts:{screen:NewProduct},
    myProducts:{screen:Home},

},

{
    tabBarOptions: {
        indicatorStyle: {
            backgroundColor: 'transparent',
            height: 50,
            borderBottomWidth:2,
            borderBottomColor:Colors.Green,

        },
        activeTintColor: Colors.Green,
        inactiveTintColor: 'grey',
        pressColor: 'white',
        style: {
          backgroundColor: 'transparent',
          height: 50,
        //   borderBottomColor:'grey',
        }
  }
   
  }
)




class RouteProducts extends Component {
    render() {
        return (
           <ProductsTab />
        )
    }
}

export default RouteProducts;