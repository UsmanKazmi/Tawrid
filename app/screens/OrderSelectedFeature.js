
import React, { Component } from 'react';
import { StyleSheet, Animated, Dimensions, ScrollView, View, StatusBar, Text, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import RouteOrders from '../config/RouteOrders';
import { Search } from '../components/Search';
import { CardActiveOrders } from '../components/CardActiveOrders';

export default class OrderSelectedFeature extends Component {
    render() {
        return (

            <View style={styles.mainView}>
                {this.props.screenProps.data ?
                    <View style={{
                        marginHorizontal: 40,
                        marginVertical: 20
                    }}>
                    <View style={{
                        marginVertical: 7,
                        flexDirection: 'row',
                        width: 100 + '%'
                    }}>
                        <Text style={{
                            textAlign: 'left',
                            flex: 1,
                            color: Colors.LightGrey,
                            fontSize: 12
                        }}>
                            id
                        </Text>
                        <Text style={{
                            textAlign: 'right',
                            color: Colors.DarkGrey,
                            fontFamily: 'bold',
                            fontSize: 13
                        }}>
                            { 
                                this.props.screenProps.data.features && 
                                this.props.screenProps.data.features.data[0].id
                            }
                        </Text>
                    </View>


                        <View style={{
                            marginVertical: 7,
                            flexDirection: 'row',
                            width: 100 + '%'
                        }}>
                            <Text style={{
                                textAlign: 'left',
                                flex: 1,
                                color: Colors.LightGrey,
                                fontSize: 12
                            }}>
                                Name
                            </Text>
                            <Text style={{
                                textAlign: 'right',
                                color: Colors.DarkGrey,
                                fontFamily: 'bold',
                                fontSize: 13
                            }}>
                                { 
                                    this.props.screenProps.data.features && 
                                    this.props.screenProps.data.features.data[0].name
                                }
                            </Text>
                        </View>
                        <View style={{
                            marginVertical: 7,
                            flexDirection: 'row',
                            width: 100 + '%',
                        }}>
                            <Text style={{
                                textAlign: 'left',
                                flex: 1,
                                color: Colors.LightGrey,
                                fontSize: 12
                            }}>
                                Value
                            </Text>
                            <Text style={{
                                textAlign: 'right',
                                color: Colors.DarkGrey,
                                fontFamily: 'bold',
                                fontSize: 13
                            }}>
                                {
                                    this.props.screenProps.data.features && 
                                    this.props.screenProps.data.features.data[0].value
                                }

                            </Text>
                        </View>





                    </View>
                    : null}

            </View>
        )

    }
}


const styles = StyleSheet.create({
    mainView: {
        height: 100 + '%',
        width: 100 + '%',
        flex: 1,
        flexDirection: 'column'
    },




})