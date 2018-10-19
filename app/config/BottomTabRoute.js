// import React, {
//     Component
// } from 'react';
// import {
//     StyleSheet,
//     View,
//     Text,
//     TouchableHighlight
// } from 'react-native';

// import {
//     SwitchNavigator,
//     createDrawerNavigator,
//     TabNavigator,
//     StackNavigator,
//     createBottomTabNavigator,
//     navigationOptions,

// } from 'react-navigation';

// import Home from '../screens/Home';
// import Store from '../screens/Store';
// import TabProducts from '../screens/TabProducts';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import CardGridVew from '../screens/CardGridVew';



// export default HomeTabs = createBottomTabNavigator({
//     ordersTab: {
//         screen: CardGridVew
//     },
//     cartTab: {
//         screen: Home
//     },
//     statementTab: {
//         screen: Home
//     },
//     profileTab: {
//         screen: Home
//     },

// },



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

// );

// const GridView = StackNavigator({

//     tabproduct: {
//         screen: TabProducts
//     },
//     gridview: {
//         screen: Home
//     },

// }


// )