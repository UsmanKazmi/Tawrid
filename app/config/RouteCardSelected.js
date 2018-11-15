import React, {Component} from 'react';
import {Colors} from '../helpers/Helpers';
import Home from '../screens/Home';
import {createMaterialTopTabNavigator} from 'react-navigation';

import OrderSelectedDetails from '../screens/OrderSelectedDetails';
import OrderSelectedData from '../screens/OrderSelectedData';
import OrderSelectedFeature from '../screens/OrderSelectedFeature';








const OrdersTab = createMaterialTopTabNavigator({

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
        }
    },
    
})




class RouteCardSelected extends Component {

    
    componentDidMount(next) {
        console.log('ttt',this.props.data)
    }
    render() {
        return (
       
           
           <OrdersTab screenProps={{data:this.props.data}} />
        )
    }
}

export default RouteCardSelected;