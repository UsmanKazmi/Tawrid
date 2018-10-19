import React, {Component} from 'react';
import {Colors} from '../helpers/Helpers';
import Home from '../screens/Home';
import {SwitchNavigator, TabNavigator, StackNavigator, createBottomTabNavigator,navigationOptions  } from 'react-navigation';

import Login from '../screens/Login';
import Store from '../screens/Store';
import TabProducts from '../screens/TabProducts';
import NewProduct from '../screens/NewProduct';
import CardGridView from '../screens/CardGridView';
import { CardOrderWithSlider } from '../components/CardOrderWithSlider';








const OrdersTab = TabNavigator({

    activeOrders:{screen:CardOrderWithSlider,
        
        
        navigationOptions: {
            tabBarLabel: 'Active Orders'

        }
    
    },


    awaitingDocuments:{screen:Home,
        
        
        navigationOptions: {
            tabBarLabel: 'Awaiting Documents'

        }
    
    },



    deliveredOrders:{screen:Home,
        
        
        navigationOptions: {
            tabBarLabel: 'Delivered Documents'

        }
    
    },


},

{
    tabBarOptions: {
        labelStyle: { 
            fontSize: 8,
            fontWeight:'bold',
            justifyContent:'center',
            alignItems:'center'
            },
        indicatorStyle: {
            backgroundColor: 'transparent',
            borderBottomWidth:2,
            borderBottomColor:Colors.Green,

        },

        activeTintColor: Colors.Green,
        inactiveTintColor: 'grey',
        pressColor: 'white',

        style: {
        
          backgroundColor: 'transparent',
          
        //   borderBottomColor:'grey',
        }
  }
   
  }
)




class RouteOrders extends Component {
    render() {
        return (
           <OrdersTab />
        )
    }
}

export default RouteOrders;