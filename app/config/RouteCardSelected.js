import React, {Component} from 'react';
import {Colors} from '../helpers/Helpers';
import Home from '../screens/Home';
import {SwitchNavigator, TabNavigator, StackNavigator, createBottomTabNavigator,navigationOptions  } from 'react-navigation';
import {View,StyleSheet} from 'react-native'
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
import OrderSelectedDetails from '../screens/OrderSelectedDetails';
import OrderSelectedData from '../screens/OrderSelectedData';
import OrderSelectedFeature from '../screens/OrderSelectedFeature';








const OrdersTab = TabNavigator({

    activeOrders:{screen:OrderSelectedDetails,
        
        
        navigationOptions: {
            tabBarLabel: 'Detail'

        }
    
    },


    awaitingDocuments:{screen:OrderSelectedData,
        
        
        navigationOptions: {
            tabBarLabel: 'Data'

        }
    
    },



    deliveredOrders:{screen:OrderSelectedFeature,
        
        
        navigationOptions: {
            tabBarLabel: 'Feature'

        }
    
    },


},

{
    tabBarOptions: {
        labelStyle: { 
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




class RouteCardSelected extends Component {
    render() {
        return (
       
           
           <OrdersTab />
        )
    }
}

export default RouteCardSelected;