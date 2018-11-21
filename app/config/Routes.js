import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text, Image,
    TouchableOpacity,
} from 'react-native';
import {
    Colors
} from '../helpers/Helpers';
import {
    createSwitchNavigator,
    createDrawerNavigator,
    createStackNavigator,
    createBottomTabNavigator,
} from 'react-navigation';

import Login from '../screens/Login';
import TabProducts from '../screens/TabProducts';
import SideMenu from '../components/SideMenu.js';
import CardGridView from '../screens/CardGridView';
import CardNewProduct from '../components/CardNewProduct';
import Orders from '../screens/Orders';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';
import Chat from '../screens/Chat';
import OrderSelected from '../screens/OrderSelected';
import OrdersDetails from '../screens/OrderDetails';
import Notification from '../screens/Notification';
import MyStatementSheet from '../screens/MyStatementSheet';
import { Search } from '../components/Search';
import SearchOrder from '../screens/SearchOrder';
import SearchResult from '../screens/SearchResult';
import SearchTags from '../components/SearchTags';
import SearchBar from './SearchTabs';







//stacks for HomePage Tabs Routing
const GridView = createStackNavigator({
        tabproduct: {
            screen: TabProducts,
            navigationOptions: ({ navigation }) => {
                return {

                }
            }
        },
        gridview: {
            screen: CardGridView
        },

        searchPage: {
            screen: SearchBar
        },
     
    },
        {
                navigationOptions:{
                header:null
            }
        }   
)

// -----------------------STACKS FOR PAGES ----------------------//

const MyStoreTabs = createStackNavigator({
    FirstTab: {
        screen: GridView,
        navigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitle: <View style={styles.titleTextView}>
                    <Text style={styles.titleText}>
                        {'My Store'}
                    </Text>
                </View>,
                headerLeft: <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/menu.png')}
                            style={{ marginLeft: 10, width: 20, height: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('tabproduct')}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/listactive.png')}
                            style={{ marginLeft: 10, width: 20, height: 20 }} />

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('gridview')}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/gridinactive.png')}
                            style={{ marginLeft: 10, width: 20, height: 20 }} />
                    </TouchableOpacity>
                </View>,

                headerRight: <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/notification.png')}
                            style={{ marginRight: 10, width: 20, height: 20 }} />

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.openGridView()}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/filter.png')}
                            style={{ marginRight: 10, width: 20, height: 20 }} />

                    </TouchableOpacity>
                </View>,
            }
        },
    },
})

const MyOrdersTab = createStackNavigator({
    FirstTab: {
        screen: Orders,
        navigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitle: <View style={styles.titleTextView}>
                    <Text style={styles.titleText}>
                        {'My Orders'}
                    </Text>
                </View>,

                headerLeft: <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/menu.png')}
                            style={{ marginLeft: 10, width: 20, height: 20 }} />
                    </TouchableOpacity>
                </View>,
                headerRight: <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => navigation.openGridView()}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/filter.png')}
                            style={{ marginRight: 10, width: 20, height: 0 }} />
                    </TouchableOpacity>
                </View>,
            }
        },
    },
})

const MyCartTab = createStackNavigator({
    FirstTab: {
        screen: Cart,
        navigationOptions: ({ navigation }) => {

            return {
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitle: <View style={styles.titleTextView}>
                    <Text style={styles.titleText}>
                        {'My Cart'}
                    </Text>
                </View>,

                headerLeft: <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/menu.png')}
                            style={{ marginLeft: 10, width: 20, height: 20 }} />
                    </TouchableOpacity>
                </View>,
                headerRight: <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/print.png')}
                            style={{ marginRight: 10, width: 20, height: 20 }} />
                    </TouchableOpacity>
                </View>,
            }
        },
    },
})

const MyChatTab = createStackNavigator({
    FirstTab: {
        screen: Chat,
        navigationOptions: ({ navigation }) => {

            return {
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitle: <View style={styles.titleTextView}>
                    <Text style={styles.titleText}>
                        {'My Chats'}
                    </Text>
                </View>,
                headerLeft: <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/menu.png')}
                            style={{ marginLeft: 10, width: 20, height: 20 }} />

                    </TouchableOpacity>
                </View>,
                headerRight: <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/print.png')}
                            style={{ marginRight: 10, width: 20, height: 0 }} />

                    </TouchableOpacity>
                </View>,
            }
        },
    },
})

const MyStatementsTab = createStackNavigator({
    FirstTab: {
        screen: MyStatementSheet,
        navigationOptions: ({ navigation }) => {

            return {
                headerStyle: {
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitle: <View style={styles.titleTextView}>
                    <Text style={styles.titleText}>
                        {'My Statements'}
                    </Text>
                </View>,
                headerLeft: <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/menu.png')}
                            style={{ marginLeft: 10, width: 20, height: 20 }} />
                    </TouchableOpacity>
                </View>,
                headerRight: <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/print.png')}
                            style={{ marginRight: 10, width: 20, height: 0 }} />

                    </TouchableOpacity>
                </View>,
            }
        },
    },
})

const ProfilePage_withHeader = createStackNavigator({
    FirstTab: {
        screen: Profile,
        navigationOptions: ({ navigation }) => {
            return {
                style:{},
                headerStyle: {
                    elevation: 3,
                    shadowOpacity: 0,
                },
                headerTitle: <View style={styles.titleTextView}>
                    <Text style={styles.titleText}>
                        {'Profile'}
                    </Text>
                </View>,
                headerLeft: <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/menu.png')}
                            style={{ marginLeft: 10, width: 20, height: 20 }} />

                    </TouchableOpacity>
                </View>,
                headerRight: <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/print.png')}
                            style={{ marginRight: 10, width: 20, height: 20 }} />

                    </TouchableOpacity>
                </View>,
            }
        },
    },
})

// -----------------------STACKS FOR PAGES END----------------------//

const NotificationStack = createStackNavigator({
    FirstTab: {
        screen: Notification,
        navigationOptions: ({ navigation }) => {
            return {
                style:{
                    
                },
                headerStyle: {
                    elevation: 3,
                    shadowOpacity: 0,
                },
                headerTitle: <View style={styles.titleTextView}>
                    <Text style={styles.titleText}>
                        {'Notifications'}
                    </Text>
                </View>,
                headerLeft: <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/menu.png')}
                            style={{ marginLeft: 10, width: 20, height: 20 }} />

                    </TouchableOpacity>
                </View>,
                headerRight: <View style={{ flexDirection: 'row' }}>

                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={styles.filterIcon}>
                        <Image
                            source={require('../../assets/icons/print.png')}
                            style={{ marginRight: 10, width: 20, height: 0 }} />

                    </TouchableOpacity>
                </View>,
            }
        },
    },
})




// -----------------------STACKS FOR ACTIVE TABS----------------------//
const HomeActiveTabs = createBottomTabNavigator({
    storeTab: {
        screen: MyStoreTabs,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/home_active.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/home_inactive.png')} size={10} />
            )
        }
    },
    ordersTab: {
        screen: MyOrdersTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/ordersactive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/ordersinactive.png')} size={10} />
            )
        }
    },
    cartTab: {
        screen: MyCartTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/addtocardActive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/addtocardInActive.png')} size={10} />
            )
        }
    },
    MyChatTab: {
        screen: MyChatTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/chatactive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/chatinactive.png')} size={10} />
            )
        }
    },
    MyStatementSheet: {
        screen: MyStatementsTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/statementsactive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/statementsinactive.png')} size={10} />
            )
        }
    },
},
    {
        initialRouteName:'storeTab',
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
const OrdersActiveTabs = createBottomTabNavigator({
    storeTab: {
        screen: MyStoreTabs,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/home_active.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/home_inactive.png')} size={10} />
            )

        }


    },
    ordersTab: {
        screen: MyOrdersTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/ordersactive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/ordersinactive.png')} size={10} />
            )

        }
    },
    cartTab: {
        screen: MyCartTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/addtocardActive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/addtocardInActive.png')} size={10} />
            )

        }
    },
    MyChatTab: {
        screen: MyChatTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/chatactive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/chatinactive.png')} size={10} />
            )

        }
    },
    MyStatementSheet: {
        screen: MyStatementsTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/statementsactive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/statementsinactive.png')} size={10} />
            )

        }
    },


},
    {
        initialRouteName:'ordersTab',
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

const CartActiveTabs = createBottomTabNavigator({
    storeTab: {
        screen: MyStoreTabs,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/home_active.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/home_inactive.png')} size={10} />
            )

        }


    },
    ordersTab: {
        screen: MyOrdersTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/ordersactive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/ordersinactive.png')} size={10} />
            )

        }
    },
    cartTab: {
        screen: MyCartTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/addtocardActive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/addtocardInActive.png')} size={10} />
            )

        }
    },
    MyChatTab: {
        screen: MyChatTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/chatactive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/chatinactive.png')} size={10} />
            )

        }
    },
    MyStatementSheet: {
        screen: MyStatementsTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/statementsactive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/statementsinactive.png')} size={10} />
            )

        }
    },


},
    {
        initialRouteName:'cartTab',
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

const ChatActiveTabs = createBottomTabNavigator({
    storeTab: {
        screen: MyStoreTabs,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/home_active.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/home_inactive.png')} size={10} />
            )

        }


    },
    ordersTab: {
        screen: MyOrdersTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/ordersactive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/ordersinactive.png')} size={10} />
            )

        }
    },
    cartTab: {
        screen: MyCartTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/addtocardActive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/addtocardInActive.png')} size={10} />
            )

        }
    },
    MyChatTab: {
        screen: MyChatTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/chatactive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/chatinactive.png')} size={10} />
            )

        }
    },
    MyStatementSheet: {
        screen: MyStatementsTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/statementsactive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/statementsinactive.png')} size={10} />
            )

        }
    },


},
    {
        initialRouteName:'MyChatTab',
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

const StatementActiveTabs = createBottomTabNavigator({
    storeTab: {
        screen: MyStoreTabs,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/home_active.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/home_inactive.png')} size={10} />
            )

        }


    },
    ordersTab: {
        screen: MyOrdersTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/ordersactive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/ordersinactive.png')} size={10} />
            )

        }
    },
    cartTab: {
        screen: MyCartTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/addtocardActive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/addtocardInActive.png')} size={10} />
            )

        }
    },
    MyChatTab: {
        screen: Chat,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/chatactive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/chatinactive.png')} size={10} />
            )
        }
    },
    MyStatementSheet: {
        screen: MyStatementsTab,
        navigationOptions: {
            showLabel: false,
            tabBarIcon: ({ focused }) => (
                focused
                    ? <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/statementsactive.png')} size={10} />
                    : <Image resizeMode={'contain'} style={{ width: 25, height: 25 }} source={require('../../assets/icons/statementsinactive.png')} size={10} />
            )
        }
    },
},
    {
        initialRouteName:'MyStatementSheet',
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
// -----------------------STACKS FOR ACTIVE TABS END----------------------//
openDrawer = () => {
    this.navigation.navigate('home');
}

openNavigationDrawer = () => {
    this.navigation.toggleDrawer();
}

openGridView = () => {
    this.props.navigation.navigate('gridview');
}

const ClientStack = createStackNavigator({
    storeTabs: {
        screen: HomeActiveTabs
    },
    Orders: {
        screen: OrdersActiveTabs
    },
    Cart: {
        screen: CartActiveTabs
    },
    Statement: {
        screen: StatementActiveTabs
    },
    Chat: {
        screen: ChatActiveTabs
    },
    Profile: {
        screen: ProfilePage_withHeader
    },
    notification: {
        screen: NotificationStack
    },
    CardNewProduct: {
        screen: CardNewProduct
    },
    OrderSelectedinClientSTack: {
        screen: OrderSelected
    }
},
{
    navigationOptions: {
        header: null
    }
}
)

export const navigationDrawer = createDrawerNavigator({
    Home: {
        screen: ClientStack
    },
},
    {
        contentComponent: SideMenu,
        drawerWidth: 300
    }
);



const AuthenticationStack = createStackNavigator({
    login: Login,
    // register: Register,
    // forgotPassword:ForgotPassword,
}

)

const MainStack = createSwitchNavigator({
    authenticationStack: AuthenticationStack, //stack for login,register,forgotpassword
    navigationDrawer: {
        screen: navigationDrawer
    },
    //stack for tabs when we logged in
})

class Routes extends Component {
    render() {
        return (<MainStack />)
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})