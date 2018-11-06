import React, {Component} from 'react';
import {Colors} from '../helpers/Helpers';
import { TabNavigator } from 'react-navigation';
import NewProduct from '../screens/NewProduct';
import CardGridView from '../screens/CardGridView';


//stacks for HomePage Tabs Routing
const ProductsTab = TabNavigator({

    newProducts:{screen:NewProduct,
        navigationOptions: {
            tabBarLabel: 'New Products'
        }
    },
    myProducts:{screen:CardGridView,
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