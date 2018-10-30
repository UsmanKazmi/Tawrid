import React, { Component } from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { ScrollView } from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export class Card_OrderDetails_Detail extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0
        }
    }

    addNumber = (num) => {
        if (num === this.state.number1)
            this.setState({ number1: ++num })
        else if (num === this.state.number2)
            this.setState({ number2: ++num })
        else
            this.setState({ number3: ++num })
    }

    subNumber = (num) => {
        if (num === this.state.number1)
            this.setState({ number1: --num })
        else if (num === this.state.number2)
            this.setState({ number2: --num })
        else
            this.setState({ number3: --num })
    }


    render() {
        return (
            <View >
                <Image
                    style={{
                        height: 175,
                        width: 165,
                        borderRadius: 10, position: 'relative'
                    }}
                    source={require('../../assets/images/product.jpg')}
                />
                <Tag />
                <View style={{ position: 'absolute', marginLeft: 120 }}>
                    <View style={styles.icons}>
                        <Icon name="heart" size={25} color={'white'}
                            style={styles.iconStyle} />
                    </View>
                    <View style={styles.icons}>
                        <Image source={require('../../assets/icons/comment.png')}
                            style={{ height: 25, width: 25, marginLeft: 5, marginTop: 7, padding: 5 }} />
                    </View>
                    <View style={styles.icons}>
                        <Icon name="cart-plus" size={25} color={'white'}
                            style={styles.iconStyle} />
                    </View>
                </View>
                <View
                    style={{ position: 'absolute', flexDirection: 'row', marginTop: 140, }}>
                    <TouchableOpacity onPress={() => this.subNumber(this.state.number1)}
                        style={styles.btnStyle}>
                        <Text style={styles.subtractBtnText} > - </Text>
                    </TouchableOpacity >
                    <Text style={styles.showText}>
                        {this.state.number1}
                    </Text>
                    <TouchableOpacity onPress={() => this.addNumber(this.state.number1)}
                        style={styles.btnStyle}>
                        <Text style={styles.addBtnText}> + </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>KRM HEDIYELIK</Text>
                    <Text> $244</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>
                        Kare Tepsi Buyuk
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../assets/icons/statementsinactive.png')}
                        style={{ width: 20, height: 20 }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 13 }}>12 pieces per Box</Text>
                    <Text> (Box) </Text>
                </View>
                <View>
                    <Text>
                        Code: 1078
                    </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text>Total Quantity: 24 pieces</Text>
                </View>
                <View>
                    <Text>Total IBM CBM: 0.0 M³</Text>
                </View>
            </View>
        )
    }
}

class Tag extends Component {
    render() {
        return (
            <View style={styles.imageStyle}>
                <Image source={require('../../assets/icons/question.png')} style={{ width: 20, height: 20 }} />
                <Text style={{ color: Colors.White }}> s51.89 </Text>
            </View>
        )
    }
}

const screenHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
    textView: {
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        flexDirection: 'row',
    },
    icons: {
        backgroundColor: Colors.LightGreen,
        width: 35,
        height: 35,
        borderRadius: 20,
        marginTop: 6,
        opacity: 0.8
    },
    iconStyle: {
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 5,
    },
    orderText: {
        fontWeight: 'bold',
        textAlign: 'left'
    },
    priceText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    shippingText: {
        marginLeft: 5,

        fontSize: 11,
        textAlign: 'left'
    },
    shippingView: {
        marginBottom: 1,
        marginRight: 10,
        marginLeft: 10,
        flexDirection: 'row',
    },
    chatView: {
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10,
        flexDirection: 'row',
    },
    chatText: {
        fontSize: 12,
        textAlign: 'left',
        color: Colors.Green
    },
    requiredText: {
        color: 'red',
        fontSize: 10,
        flex: 1,
        textAlign: 'right'
    },
    imageSliderView: {
        marginTop: 10,
        flex: 1
    },
    subtractBtnText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 22
    },
    showText: {
        height: 30,
        borderRadius: 50,
        backgroundColor: 'white',
        width: 60,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },
    addBtnText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 22
    },
    btnStyle: {
        height: 30,
        borderRadius: 50,
        backgroundColor: 'white',
        width: 30,
        margin: 10,
        marginTop: 0
    },
    imageStyle: {
        position: 'absolute',
        marginTop: 10,
        marginLeft: 6,
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: Colors.Green,
        padding: 1,
    },
});

