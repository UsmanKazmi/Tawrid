import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,Image,
    TouchableHighlight
} from 'react-native';
import {
    Colors
} from '../helpers/Helpers';
import {
    SwitchNavigator,
    createDrawerNavigator,
    TabNavigator,
    StackNavigator,
    createBottomTabNavigator,
    navigationOptions,

} from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Store from '../screens/Store';
import TabProducts from '../screens/TabProducts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SideMenu from '../components/SideMenu.js';
import CardGridView from '../screens/CardGridView';
import {
    TopHeaderBar
} from '../components/TopHeaderBar';
import Notification from '../screens/Notification'
import Orders from '../screens/Orders';
import Profile from '../screens/Profile';




//stacks for HomePage Tabs Routing


const GridView = StackNavigator({

        tabproduct: {
            screen: TabProducts
        },

        gridview: {
            screen: Home
        },

    }


)




 
 const HomeTabs = createBottomTabNavigator({
        storeTab: {
            screen: GridView,
            navigationOptions: {
                showLabel: false,
                tabBarIcon: ({ focused }) => (
                    focused
                    ? <Image  resizeMode={'contain'}  style={{width:25,height:25}} source={require('../../assets/icons/home_active.png')} size={10}  />
                    : <Image  resizeMode={'contain'} style={{width:25,height:25}} source={require('../../assets/icons/home_inactive.png')} size={10}  /> 
                )
                
            }


        },
        ordersTab: {
            screen: Orders,
            navigationOptions: {
                showLabel: false,
                tabBarIcon: ({ focused }) => (
                    focused
                    ? <Image  resizeMode={'contain'}  style={{width:25,height:25}} source={require('../../assets/icons/home_active.png')} size={10}  />
                    : <Image  resizeMode={'contain'} style={{width:25,height:25}} source={require('../../assets/icons/home_inactive.png')} size={10}  /> 
                )
                
            }
        },
        cartTab: {
            screen: CardGridView,
            navigationOptions: {
                showLabel: false,
                tabBarIcon: ({ focused }) => (
                    focused
                    ? <Image  resizeMode={'contain'}  style={{width:25,height:25}} source={require('../../assets/icons/home_active.png')} size={10}  />
                    : <Image  resizeMode={'contain'} style={{width:25,height:25}} source={require('../../assets/icons/home_inactive.png')} size={10}  /> 
                )
                
            }
        },
        statementTab: {
            screen: Home,
            navigationOptions: {
                showLabel: false,
                tabBarIcon: ({ focused }) => (
                    focused
                    ? <Image  resizeMode={'contain'}  style={{width:25,height:25}} source={require('../../assets/icons/home_active.png')} size={10}  />
                    : <Image  resizeMode={'contain'} style={{width:25,height:25}} source={require('../../assets/icons/home_inactive.png')} size={10}  /> 
                )
                
            }
        },
        profileTab: {
            screen: Profile
        },


    },
    {
        tabBarOptions: {
          showLabel: false
        }
    }


    // {
    //     navigationOptions: ({
    //         navigation
    //     }) => ({
    //         tabBarIcon: ({
    //             focused,
    //             horizontal,
    //             tintColor
    //         }) => {
    //             const {
    //                 routeName
    //             } = navigation.state;
    //             let iconName;
    //             if (routeName === 'storeTab') {
    //                 iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //             } else if (routeName === 'ordersTab') {
    //                 iconName = `ios-options${focused ? '' : '-outline'}`;
    //             } else if (routeName === 'cartTab') {
    //                 iconName = `ios-options${focused ? '' : '-outline'}`;
    //             } else if (routeName === 'statementTab') {
    //                 iconName = `ios-options${focused ? '' : '-outline'}`;
    //             } else if (routeName === 'profileTab') {
    //                 iconName = `ios-options${focused ? '' : '-outline'}`;
    //             }

    //             // You can return any component that you like here! We usually use an
    //             // icon component from react-native-vector-icons
    //             return <Ionicons name = {
    //                 iconName
    //             }
    //             size = {
    //                 horizontal ? 20 : 25
    //             }
    //             color = {
    //                 tintColor
    //             }
    //             />;
    //         },
    //     }),
    //     tabBarOptions: {
    //         activeTintColor: '#fdc300',
    //         inactiveTintColor: '#5b5959',
    //     },
    // }

);

openDrawer = () => {
    this.navigation.navigate('home');
}

openNavigationDrawer = () => {
    this.navigation.toggleDrawer();

}

openGridView = () => {
    this.props.navigation.navigate('gridview');

}

const UserStack = StackNavigator({
    MyStore: {
        screen:HomeTabs ,
        navigationOptions: ({
            navigation
        }) => {
            return{
            headerTitle: <View style={styles.titleTextView}>
                            <Text style={styles.titleText}>
                            {"My Store"}
                            </Text>
                        </View>,
            headerLeft: <View style={{flexDirection: 'row'}}>
                            <TouchableHighlight          
                            onPress={this.openNavigationDrawer}
                            style = {styles.filterIcon}>

                                <Ionicons name="md-list" 
                                    size={25} 
                                    color={Colors.DarkGrey} />
                        </TouchableHighlight>

                        <TouchableHighlight 
                        // onPress={this.openGridView}
                        style = {styles.filterIcon}>
                            <Ionicons name="ios-grid-outline" size={25} color={Colors.DarkGrey} />
                        </TouchableHighlight>
                        </View>

        }
        }
    },
    // },
    // MyOrder: {
    //     screen: MyOrder
    // },
    // MyCart: {
    //     screen: MyCart
    // },
    Notification: {
        screen: Notification,
        navigationOptions: ({
            navigation
        }) => {
            return {
                headerTitle: < View style = {{
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1
                            }}>
                                <Text > Notification </Text> 
                            </View>,
                // headerLeft: <View >
                //     <Ionicons name = "ios-menu"
                // size = {
                //     30
                // }
                // // onPress={this.navigate.openDrawer()}
                // />

                // </View>
            }
        }
    }
})


const navigationDrawer = createDrawerNavigator({
        storeTabs: {
            screen: HomeTabs
        },
        notification: {
            screen: Notification
        },
     
 
    },

    {
        contentComponent: SideMenu,
        drawerWidth: 300
    }




);



const AuthenticationStack = StackNavigator({
        login: Login,
        // register: Register,
        // forgotPassword:ForgotPassword,
    }



)

const MainStack = SwitchNavigator({
    
    navigationDrawer: {
        screen: navigationDrawer
    },

    authenticationStack: AuthenticationStack, //stack for login,register,forgotpassword
 

    //stack for tabs when we logged in
})




class Routes extends Component {
    render() {
        return ( <MainStack /> )
    }
}



export default Routes;


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
        flex:1,
        fontSize: 15,
        textAlign: 'center',
        // lineHeight: 24,
        fontFamily: 'DIN Next LT Arabic',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        color: Colors.DarkGrey,


      },
})