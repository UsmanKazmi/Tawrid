import React, {Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {Colors} from '../helpers/Helpers';
import {SwitchNavigator, TabNavigator, StackNavigator, createBottomTabNavigator,navigationOptions  } from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';






//stacks for HomePage Tabs Routing


const productsTab = TabNavigator({

    newProducts:{screen:Home}, 
    myProducts:{screen:Home}, 
   

})

const HomeTabs = createBottomTabNavigator({
    storeTab:{screen:productsTab}, 
    ordersTab:{screen:Home}, 
    cartTab:{screen:Home},
    statementTab:{screen:Home}, 
    profileTab:{screen:Home}, 

 



},


  
);


//for showing icons using react-native-ionicons

// {

//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;

//         if (routeName === 'camera') {
//           iconName = `ios-information-circle${focused ? '' : '-outline'}`;
//         } else if (routeName === 'profile') {
//           iconName = `ios-add-circle${focused ? '' : '-outline'}`;
//         } else if (routeName === 'feed') {
//             iconName = `ios-add-circle${focused ? '' : '-outline'}`;
//           }
//          // You can return any component that you like here! We usually use an
//         // icon component from react-native-vector-icons
//         return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'grey',
//     },
//   }






const AuthenticationStack = StackNavigator({
    login: Login,
    // register: Register,
    // forgotPassword:ForgotPassword,
}



)

const MainStack = SwitchNavigator({
    home:HomeTabs,
    authenticationStack:AuthenticationStack,            //stack for login,register,forgotpassword
                                      //stack for tabs when we logged in
})




class Routes extends Component {
    render() {
        return (
           <MainStack/>
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