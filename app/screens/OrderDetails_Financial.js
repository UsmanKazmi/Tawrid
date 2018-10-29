
import React, { Component } from 'react';
import { StyleSheet, Animated, Dimensions, Modal, ScrollView, View, StatusBar, Text, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card_OrderDetails_Detail } from '../components/Card_OrderDetails_Detail';

export default class OrderDetails_Financial extends Component {
    constructor(){
        super();
        this.state = {
            visible: false
        }
    }
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    render() {
        
        return (
            <ScrollView style={styles.mainView}>

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
                            Total Product Amount
                        </Text>

                        <Text style={styles.pirceText}>
                            $330.54
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
                            Shipping Cost
                        </Text>

                        <Text style={styles.pirceText}>
                            $1,650
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
                            Commission Cost
                        </Text>

                        <Text style={styles.pirceText}>
                            $500
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
                            Other Costs or Discount
                        </Text>

                        <Text style={styles.pirceText}>
                            $0
                        </Text>
                    </View>
                    <View style={styles.grandTotalView}>
                        <Text style={{ fontSize: 18 }}> Grand Total </Text>
                        <Text style={{ color: Colors.Yellow }}> $40,700 </Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <ImageBackground source={require('../../assets/icons/gradient.png')}
                        style={styles.gradientImage}>

                        <Text style={{ fontSize: 34, fontWeight: 'bold', color: Colors.White }}>$40,700</Text>
                        <Text style={{ color: Colors.White, fontSize: 12 }}>Total Invoice Amount</Text>
                        <TouchableOpacity style={styles.NotesBtn}>
                            <Text style={{ color: Colors.White, fontSize: 12 }}>View Financial Notes</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: 'space-evenly'
                }}>
                    <Card_OrderDetails_Detail />
                    <Card_OrderDetails_Detail />
                </View>

            </ScrollView>
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
    pirceText: {
        textAlign: 'right',
        color: Colors.DarkGrey,
        fontFamily: 'bold',
        fontSize: 13
    },
    grandTotalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: Colors.LightestGrey,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 10
    },
    gradientImage: {
        width: 300,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
    },
    NotesBtn: {
        borderColor: Colors.White,
        borderWidth: 1,
        width: 150,
        height: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }



})