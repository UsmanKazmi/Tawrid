import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text
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
    navigationOptions
} from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Store from '../screens/Store';
import TabProducts from '../screens/TabProducts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SideMenu from '../components/SideMenu.js';
import { CardGridVew } from '../screens/CardGridVew';
import { TopHeaderBar } from '../components/TopHeaderBar';
import Notification from '../screens/Notification'




//stacks for HomePage Tabs Routing


const GridView = StackNavigator({

    tabproduct:{screen:TabProducts}, 

    gridview:{screen:Home}, 

}


)





const HomeTabs = createBottomTabNavigator({
        storeTab: {
            screen: GridView

        },
        ordersTab: {
            screen: Home
        },
        cartTab: {
            screen: Home
        },
        statementTab: {
            screen: Home
        },
        profileTab: {
            screen: Home
        },





    },





    {
        navigationOptions: ({
            navigation
        }) => ({
            tabBarIcon: ({
                focused,
                horizontal,
                tintColor
            }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'storeTab') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'ordersTab') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                } else if (routeName === 'cartTab') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                } else if (routeName === 'statementTab') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                } else if (routeName === 'profileTab') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name = {
                    iconName
                }
                size = {
                    horizontal ? 20 : 25
                }
                color = {
                    tintColor
                }
                />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#fdc300',
            inactiveTintColor: '#5b5959',
        },
    }

);
const navigationDrawer = createDrawerNavigator({
        storeTabs: { screen: HomeTabs },
        home: { screen: HomeTabs,},
        order: {  screen: Home, }
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
        screen: navigationDrawer },
    //stack for tabs when we logged in
})




class Routes extends Component {
    render() {
        return ( <MainStack/>
        )
    }
}






// class HomeScreen extends React.Component {
//     render() {
//       return (
//         <View style={{ flex: 1}}>
//           <Home></Home>
//         </View>
//       );
//     }
//   }


//   class LoginScreen extends React.Component {
//     render() {
//       return (
//         <View style={{ flex: 1 }}>
//           <Login></Login>
//         </View>
//       );
//     }
//   }
// export default createStackNavigator({

//     Login: {screen: LoginScreen,
//         navigationOptions: () => ({
//             header: null,
//           }),
//         },
//     Home: {screen: HomeScreen}
// },
//     {


//     // direction:'vertical'
// });



// const styles = StyleSheet.create({
//     header: {
//         paddingTop: 2,
//         paddingBottom: 2,
//         backgroundColor: 'white',
//         borderBottomColor: 'transparent',
//         borderBottomWidth: 0,
//     },
//     text: {
//         textAlign: 'left',
//         fontSize: 20,
//         lineHeight: 24,
//         fontFamily: 'DIN Next LT Arabic',
//         fontWeight: 'bold',
//         color: Colors.DarkGrey
//     }
// });
export default Routes;