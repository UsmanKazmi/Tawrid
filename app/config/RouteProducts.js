import React, {Component} from 'react';
import {Colors} from '../helpers/Helpers';
import { createMaterialTopTabNavigator,createStackNavigator,withNavigation,NavigationActions,StackActions } from 'react-navigation';
import NewProduct from '../screens/NewProduct';
import MyProduct from '../screens/MyProduct';
import OrderSelected from '../screens/OrderSelected';
import Chat from '../screens/Chat';
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, Platform, Share} from 'react-native';
import AddIcon from 'react-native-vector-icons/Ionicons';

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

info = (data) => {
    //OPEN Product Detail PAGE
    console.log('asdasd',this)
    this.openGridView.navigate('productDetails', data)

    
}

const ProductsStack = createStackNavigator({
    newProducts:{
        screen:ProductsTab,
        navigationOptions: {
            header: null
        }
        
    },
    productDetails:{
        screen:OrderSelected,
        navigationOptions: {
            header: null
        }
        // navigationOptions: ({ navigation }) => {

        //     console.log('asd',navigation)
        //     return {
        //         headerStyle: {
        //             elevation: 0,
        //             shadowOpacity: 0,
        //         },
        //         headerTitle: <View style={styles.titleTextView}>
        //             <Text style={styles.titleText}>
        //                 {}
        //             </Text>
        //         </View>,

        //         headerLeft: <View style={{ flexDirection: 'row' }}>
        //             <TouchableOpacity
        //             onPress={() => this.info()}
        //                 style={styles.filterIcon}>
        //                 <AddIcon name="md-arrow-back" size={30} color={Colors.Yellow}
        //                     style={{height: 100, width: '100%',paddingHorizontal:5, 
        //                    textAlign: 'center', textAlignVertical: 'center' }}/>
        //             </TouchableOpacity>
                    
        //         </View>,
        //         headerRight: <View style={{ flexDirection: 'row' }}>
        //             <TouchableOpacity
        //                 onPress={() => navigation.toggleDrawer()}
        //                 style={styles.filterIcon}>
        //                 <Image
        //                     source={require('../../assets/icons/menu.png')}
        //                     style={{ marginLeft: 10, width: 20, height: 0 }} />
        //             </TouchableOpacity>
                   
        //         </View>,

             
        //     }
        // },
    
    },
    chatScreen:{
        screen:Chat,
        navigationOptions: {
            header: null
        }       
    },
},


)




class RouteProducts extends Component {
    
    render() {
        return (
           <ProductsStack />
        )
    }
}
const styles = StyleSheet.create({
    titleText: {
        textAlign: 'center',
        fontSize: 15,
        // lineHeight: 24,
        fontFamily: 'DIN Next LT Arabic',
        fontWeight: 'bold',
        color: Colors.DarkGrey,


    },
    titleTextView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default RouteProducts;
