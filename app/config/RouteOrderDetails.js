import React, {Component} from 'react';
import {Colors} from '../helpers/Helpers';
import Home from '../screens/Home';
import {SwitchNavigator, TabNavigator, StackNavigator, createBottomTabNavigator,navigationOptions  } from 'react-navigation';

import Login from '../screens/Login';
import Store from '../screens/Store';
import TabProducts from '../screens/TabProducts';
import NewProduct from '../screens/NewProduct';
import CardGridView from '../screens/CardGridView';
import { CardOrderWithSlider } from '../components/ImageSlider';
import { CardActiveOrders } from '../components/CardActiveOrders';
import ActiveOrders from '../screens/ActiveOrders';
import DeliveredOrder from '../screens/DeliveredOrder';
import AwaitingOrder from '../screens/AwaitingOrder';
import OrderDetails_Details from '../screens/OrderDetails_Details';
import OrderDetails_Files from '../screens/OrderDetails_Files';
import OrderDetails_Financial from '../screens/OrderDetails_Financial';









const OrdersTab = TabNavigator({

    activeOrders:{screen:OrderDetails_Details,
        
        
        navigationOptions: {
            tabBarLabel: 'Details'

        }
    
    },


    awaitingDocuments:{screen:OrderDetails_Files,
        
        
        navigationOptions: {
            tabBarLabel: 'Files'

        }
    
    },



    deliveredOrders:{screen:OrderDetails_Financial,
        
        
        navigationOptions: {
            tabBarLabel: 'Financial'

        }
    
    },


},

{
    tabBarOptions: {
        labelStyle: { 
            fontSize: 11,
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
        inactiveTintColor: Colors.Grey,
        pressColor: 'white',

        style: {
        
          backgroundColor: 'transparent',
          
        //   borderBottomColor:'grey',
        }
  }
   
  }
)




class RouteOrderDetails extends Component {
    render() {
        return (
           <OrdersTab />
           
        )
    }
}

export default RouteOrderDetails;