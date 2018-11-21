
import React, { Component } from 'react';
import { StyleSheet, Animated, Dimensions, ScrollView, View, StatusBar, Text, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';

export default class OrderSelectedDetails extends Component {

    render() {
        return (
            <View style={styles.mainView}>
                {
                    this.props.screenProps.data ?
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
                                Product Name

                                </Text>

                            <Text style={{
                                textAlign: 'right',
                                color: Colors.DarkGrey,
                                fontFamily: 'bold',
                                fontSize: 13
                            }}>
                                {this.props.screenProps.data.name}
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
                                Company
                            </Text>
                            <Text style={{
                                textAlign: 'right',
                                color: Colors.DarkGrey,
                                fontFamily: 'bold',
                                fontSize: 13
                            }}>
                                {this.props.screenProps.data.company && this.props.screenProps.data.company.data.name}
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
                                Company Code
                            </Text>
                            <Text style={{
                                textAlign: 'right',
                                color: Colors.DarkGrey,
                                fontFamily: 'bold',
                                fontSize: 13
                            }}>
                                {this.props.screenProps.data.company_code}
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
                                Company Barcode
                            </Text>
                            <Text style={{
                                textAlign: 'right',
                                color: Colors.DarkGrey,
                                fontFamily: 'bold',
                                fontSize: 13
                            }}>
                                null
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
                                Code
                            </Text>
                            <Text style={{
                                textAlign: 'right',
                                color: Colors.DarkGrey,
                                fontFamily: 'bold',
                                fontSize: 13
                            }}>
                                {this.props.screenProps.data.id}
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
                                Barcode
                            </Text>
                            <Text style={{
                                textAlign: 'right',
                                color: Colors.DarkGrey,
                                fontFamily: 'bold',
                                fontSize: 13
                            }}>
                                null
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
                                Price Note
                            </Text>
                            <Text style={{
                                textAlign: 'right',
                                color: Colors.DarkGrey,
                                fontFamily: 'bold',
                                fontSize: 13
                            }}>
                                null
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
    },




})