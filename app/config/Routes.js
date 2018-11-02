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
import Cart from '../screens/Cart';
import MyStatementSheet from '../screens/MyStatementSheet'
import Chat from '../screens/Chat';
import OrderSelected from '../screens/OrderSelected';
import OrdersDetails from '../screens/OrderDetails';



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



const MyStoreTabs = StackNavigator({
    FirstTab: {
        screen:GridView ,
        navigationOptions:({navigation}) => {
            
            return{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                  },
            headerTitle: <View style={styles.titleTextView}>
                            <Text style={styles.titleText}>
                            {'My Store'}
                            </Text>
                        </View>,

            headerLeft: <View style={{flexDirection: 'row'}}>

                                <TouchableHighlight          
                                    onPress={() => navigation.toggleDrawer() }
                                    style = {styles.filterIcon}>
                                    <Image 
                                        source={require('../../assets/icons/menu.png')} 
                                        style={{ marginLeft:10,width: 20, height: 20 }} />

                                </TouchableHighlight>

                                <TouchableHighlight          
                                    onPress={() => navigation.openGridView() }
                                    style = {styles.filterIcon}>
                                    <Image 
                                        source={require('../../assets/icons/listactive.png')} 
                                        style={{ marginLeft:10,width: 20, height: 20 }} />

                                </TouchableHighlight>

                                <TouchableHighlight          
                                        onPress={() => navigation.openGridView() }
                                        style = {styles.filterIcon}>
                                        <Image 
                                            source={require('../../assets/icons/gridinactive.png')} 
                                            style={{ marginLeft:10,width: 20, height: 20 }} />
                        
                                 </TouchableHighlight>
                        </View>,

                        headerRight: <View style={{flexDirection: 'row'}}>

                        <TouchableHighlight          
                            onPress={() => navigation.toggleDrawer() }
                            style = {styles.filterIcon}>
                            <Image 
                                source={require('../../assets/icons/notification.png')} 
                                style={{ marginRight:10,width: 20, height: 20 }} />

                        </TouchableHighlight>

                        <TouchableHighlight          
                            onPress={() => navigation.openGridView() }
                            style = {styles.filterIcon}>
                            <Image 
                                source={require('../../assets/icons/filter.png')} 
                                style={{ marginRight:10,width: 20, height: 20 }} />

                        </TouchableHighlight>

                   
                        </View>,


                        

        }
        },
        
    },

})



const MyOrdersTab = StackNavigator({
    FirstTab: {
        screen:Orders ,
        navigationOptions:({navigation}) => {
            
            return{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                  },
            headerTitle: <View style={styles.titleTextView}>
                            <Text style={styles.titleText}>
                            {'My Orders'}
                            </Text>
                        </View>,

            headerLeft: <View style={{flexDirection: 'row'}}>

                                <TouchableHighlight          
                                    onPress={() => navigation.toggleDrawer() }
                                    style = {styles.filterIcon}>
                                    <Image 
                                        source={require('../../assets/icons/menu.png')} 
                                        style={{ marginLeft:10,width: 20, height: 20 }} />

                                </TouchableHighlight>

                                
                        </View>,

            headerRight: <View style={{flexDirection: 'row'}}>

               

                        <TouchableHighlight          
                            onPress={() => navigation.openGridView() }
                            style = {styles.filterIcon}>
                            <Image 
                                source={require('../../assets/icons/filter.png')} 
                                style={{ marginRight:10,width: 20, height: 0 }} />

                        </TouchableHighlight>

                   
                        </View>,


                        

        }
        },
        
    },

})


const MyCartTab = StackNavigator({
    FirstTab: {
        screen:Cart ,
        navigationOptions:({navigation}) => {
            
            return{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                  },
            headerTitle: <View style={styles.titleTextView}>
                            <Text style={styles.titleText}>
                            {'My Cart'}
                            </Text>
                        </View>,

            headerLeft: <View style={{flexDirection: 'row'}}>

                                <TouchableHighlight          
                                    onPress={() => navigation.toggleDrawer() }
                                    style = {styles.filterIcon}>
                                    <Image 
                                        source={require('../../assets/icons/menu.png')} 
                                        style={{ marginLeft:10,width: 20, height: 20 }} />

                                </TouchableHighlight>

                               
                        </View>,

            headerRight: <View style={{flexDirection: 'row'}}>

                        <TouchableHighlight          
                            onPress={() => navigation.toggleDrawer() }
                            style = {styles.filterIcon}>
                            <Image 
                                source={require('../../assets/icons/print.png')} 
                                style={{ marginRight:10,width: 20, height: 20 }} />

                        </TouchableHighlight>

                       

                   
                        </View>,


                        

        }
        },
        
    },

})

const MyChatTab = StackNavigator({
    FirstTab: {
        screen:OrderSelected ,
        navigationOptions:({navigation}) => {
            
            return{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                  },
            headerTitle: <View style={styles.titleTextView}>
                            <Text style={styles.titleText}>
                            {'My Chats'}
                            </Text>
                        </View>,

            headerLeft: <View style={{flexDirection: 'row'}}>

                                <TouchableHighlight          
                                    onPress={() => navigation.toggleDrawer() }
                                    style = {styles.filterIcon}>
                                    <Image 
                                        source={require('../../assets/icons/menu.png')} 
                                        style={{ marginLeft:10,width: 20, height: 20 }} />

                                </TouchableHighlight>

                               
                        </View>,

            headerRight: <View style={{flexDirection: 'row'}}>

                        <TouchableHighlight          
                            onPress={() => navigation.toggleDrawer() }
                            style = {styles.filterIcon}>
                            <Image 
                                source={require('../../assets/icons/print.png')} 
                                style={{ marginRight:10,width: 20, height: 0 }} />

                        </TouchableHighlight>

                       

                   
                        </View>,


                        

        }
        },
        
    },

})


const MyStatementsTab = StackNavigator({
    FirstTab: {
        screen:OrdersDetails ,
        navigationOptions:({navigation}) => {
            
            return{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                  },
            headerTitle: <View style={styles.titleTextView}>
                            <Text style={styles.titleText}>
                            {'My Statements'}
                            </Text>
                        </View>,

            headerLeft: <View style={{flexDirection: 'row'}}>

                                <TouchableHighlight          
                                    onPress={() => navigation.toggleDrawer() }
                                    style = {styles.filterIcon}>
                                    <Image 
                                        source={require('../../assets/icons/menu.png')} 
                                        style={{ marginLeft:10,width: 20, height: 20 }} />

                                </TouchableHighlight>

                               
                        </View>,

            headerRight: <View style={{flexDirection: 'row'}}>

                        <TouchableHighlight          
                            onPress={() => navigation.toggleDrawer() }
                            style = {styles.filterIcon}>
                            <Image 
                                source={require('../../assets/icons/print.png')} 
                                style={{ marginRight:10,width: 20, height: 0 }} />

                        </TouchableHighlight>

                       

                   
                        </View>,


                        

        }
        },
        
    },

})











 
 const HomeTabs = createBottomTabNavigator({
        storeTab: {
            screen: MyStoreTabs,
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
            screen: MyOrdersTab,
            navigationOptions: {
                showLabel: false,
                tabBarIcon: ({ focused }) => (
                    focused
                    ? <Image  resizeMode={'contain'}  style={{width:25,height:25}} source={require('../../assets/icons/ordersactive.png')} size={10}  />
                    : <Image  resizeMode={'contain'} style={{width:25,height:25}} source={require('../../assets/icons/ordersinactive.png')} size={10}  /> 
                )
                
            }
        },
        cartTab: {
            screen: MyCartTab,
            navigationOptions: {
                showLabel: false,
                tabBarIcon: ({ focused }) => (
                    focused
                    ? <Image  resizeMode={'contain'}  style={{width:25,height:25}} source={require('../../assets/icons/addtocardActive.png')} size={10}  />
                    : <Image  resizeMode={'contain'} style={{width:25,height:25}} source={require('../../assets/icons/addtocardInActive.png')} size={10}  /> 
                )
                
            }
        },
        MyStatementSheet: {
            screen: MyChatTab,
            navigationOptions: {
                showLabel: false,
                tabBarIcon: ({ focused }) => (
                    focused
                    ? <Image  resizeMode={'contain'}  style={{width:25,height:25}} source={require('../../assets/icons/chatactive.png')} size={10}  />
                    : <Image  resizeMode={'contain'} style={{width:25,height:25}} source={require('../../assets/icons/chatinactive.png')} size={10}  /> 
                )
                
            }
        },
        profileTab: {
            screen: MyStatementsTab,
            navigationOptions: {
                showLabel: false,
                tabBarIcon: ({ focused }) => (
                    focused
                    ? <Image  resizeMode={'contain'}  style={{width:25,height:25}} source={require('../../assets/icons/statementsactive.png')} size={10}  />
                    : <Image  resizeMode={'contain'} style={{width:25,height:25}} source={require('../../assets/icons/statementsinactive.png')} size={10}  /> 
                )
                
            }
        },


    },
    {       
        tabBarOptions: {

            showLabel: false,
            activeTintColor: '#fff',
            inactiveTintColor: '#bdb1cc',
            style: {
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
            },

        }
    }


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
        navigationOptions:({navigation}) => {
            
            return{
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                  },
            headerTitle: <View style={styles.titleTextView}>
                            <Text style={styles.titleText}>
                            {'My Store'}
                            </Text>
                        </View>,

            headerLeft: <View style={{flexDirection: 'row'}}>

                                <TouchableHighlight          
                                    onPress={() => navigation.toggleDrawer() }
                                    style = {styles.filterIcon}>
                                    <Image 
                                        source={require('../../assets/icons/menu.png')} 
                                        style={{ marginLeft:10,width: 20, height: 20 }} />

                                </TouchableHighlight>

                                <TouchableHighlight          
                                    onPress={() => navigation.openGridView() }
                                    style = {styles.filterIcon}>
                                    <Image 
                                        source={require('../../assets/icons/listactive.png')} 
                                        style={{ marginLeft:10,width: 20, height: 20 }} />

                                </TouchableHighlight>

                                <TouchableHighlight          
                                        onPress={() => navigation.openGridView() }
                                        style = {styles.filterIcon}>
                                        <Image 
                                            source={require('../../assets/icons/gridinactive.png')} 
                                            style={{ marginLeft:10,width: 20, height: 20 }} />
                        
                                 </TouchableHighlight>
                        </View>,

                        headerRight: <View style={{flexDirection: 'row'}}>

                        <TouchableHighlight          
                            onPress={() => navigation.toggleDrawer() }
                            style = {styles.filterIcon}>
                            <Image 
                                source={require('../../assets/icons/notification.png')} 
                                style={{ marginRight:10,width: 20, height: 20 }} />

                        </TouchableHighlight>

                        <TouchableHighlight          
                            onPress={() => navigation.openGridView() }
                            style = {styles.filterIcon}>
                            <Image 
                                source={require('../../assets/icons/filter.png')} 
                                style={{ marginRight:10,width: 20, height: 20 }} />

                        </TouchableHighlight>

                   
                        </View>,


                        

        }
        },
        
    },
    Notification: {
        screen: Notification,
        navigationOptions: () => {
            
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
    authenticationStack: AuthenticationStack, //stack for login,register,forgotpassword
    
    navigationDrawer: {
        screen: navigationDrawer
    },

 

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