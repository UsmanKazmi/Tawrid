import React, {Component} from 'react';
import {Colors} from '../helpers/Helpers';
import { createMaterialTopTabNavigator } from 'react-navigation';
import NewProduct from '../screens/NewProduct';
import MyProduct from '../screens/MyProduct';


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