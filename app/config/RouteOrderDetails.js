import React, {Component} from 'react';
import {Colors} from '../helpers/Helpers';
import {createMaterialTopTabNavigator} from 'react-navigation';
import OrderDetails_Details from '../screens/OrderDetails_Details';
import OrderDetails_Files from '../screens/OrderDetails_Files';
import OrderDetails_Financial from '../screens/OrderDetails_Financial';

const OrdersTab = createMaterialTopTabNavigator({
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
        }
    }
})

class RouteOrderDetails extends Component {
    render() {
        return (
           <OrdersTab />           
        )
    }
}
export default RouteOrderDetails;