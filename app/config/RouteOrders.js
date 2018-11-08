import React, {Component} from 'react';
import {Colors} from '../helpers/Helpers';
import {createMaterialTopTabNavigator} from 'react-navigation';
import ActiveOrders from '../screens/ActiveOrders';
import DeliveredOrder from '../screens/DeliveredOrder';
import AwaitingOrder from '../screens/AwaitingOrder';

const OrdersTab = createMaterialTopTabNavigator({
    activeOrders:{
        screen:ActiveOrders,
        navigationOptions: {
            tabBarLabel: 'Active Orders'
        }
    },
    awaitingDocuments:{
        screen:AwaitingOrder,        
        navigationOptions: {
            tabBarLabel: 'Awaiting Documents'
        }
    },
    deliveredOrders:{
        screen:DeliveredOrder,  
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
        }
    }  
})




class RouteOrders extends Component {
    render() {
        return (
           <OrdersTab />
        )
    }
}

export default RouteOrders;