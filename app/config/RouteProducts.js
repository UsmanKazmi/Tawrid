import React, {Component} from 'react';
import {Colors} from '../helpers/Helpers';
import { createMaterialTopTabNavigator,createStackNavigator } from 'react-navigation';
import NewProduct from '../screens/NewProduct';
import MyProduct from '../screens/MyProduct';
import OrdersDetails from '../screens/OrderDetails';
import OrderSelected from '../screens/OrderSelected';
import Chat from '../screens/Chat';



//stacks for HomePage Tabs Routing
const ProductsTab = createMaterialTopTabNavigator({
    newProducts:{
        screen:NewProduct,
        navigationOptions: {
            tabBarLabel: 'New Products'
        }
    },
    myProducts:{
        screen:MyProduct,
        navigationOptions: {
            tabBarLabel: 'My Products'
        }
    },

},

{
    tabBarOptions: {
        indicatorStyle: {
            backgroundColor: Colors.White,
            height: 50,
            borderBottomWidth:2,
            borderBottomColor:Colors.Green,
        },
        activeTintColor: Colors.Green,
        inactiveTintColor: 'grey',
        pressColor: 'white',
        style: {
          backgroundColor: Colors.White,
          height: 50,
        }
  }
   
  }
)



const ProductsStack = createStackNavigator({
    newProducts:{
        screen:ProductsTab,
    },
    productDetails:{
        screen:OrderSelected,
        navigationOptions: {
        }
    },
    chatScreen:{
        screen:Chat,
        navigationOptions: {
        }
    },

},

{
  
    navigationOptions: {
        header: null
    }

   
  }
)




class RouteProducts extends Component {
    render() {
        return (
           <ProductsStack />
        )
    }
}

export default RouteProducts;