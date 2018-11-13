import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Search } from '../components/Search';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../helpers/Helpers';
import { TawridApi } from '../utilities/Api';

export default class Cart extends Component {
    constructor() {
        super()
        this.state = {
            isChat: false,
            number1: 0,
            number2: 0,
            number3: 0,
            response: [],
            resList: []
        }
    }
    openChat = () => {
        let { isChat } = this.state;
        if (isChat === false)
            this.setState({ isChat: true })
        else
            this.setState({ isChat: false })
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

    UNSAFE_componentWillMount() {
        TawridApi.cartList().then(value => {
            console.log('My Cart List 1 ', value.data)
            this.setState({
                resList: value.data
            })
        })
        TawridApi.cartInfo().then(value => {
            console.log('My Cart Info ', value.data)
            this.setState({
                response: value.data
            })
        })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: Colors.White }}>
                <View style={styles.searchStyle}>
                    <Search placeholder={'Search Cart'} />
                </View>
                {this.state.response ?
                    <View style={{ paddingHorizontal: 15, paddingVertical: 3, borderBottomWidth: 1 }}>
                        <Text style={{ color: 'grey' }}> Subtotal <Text style={styles.SubTotalAmount}> {this.state.response.total} </Text></Text>
                        <Text style={{ color: Colors.Green }}> CBM <Text style={styles.cbmText}> {this.state.response.total_cbm} M³ </Text> </Text>
                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.createOrderBtn}>
                                <Text style={styles.btnText}>create order</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.createOrderBtn}>
                                <Text style={styles.btnText}>add note</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    : null
                }
                <ScrollView >
                    {this.state.resList ?
                        this.state.resList.map((data, index) => {
                            return (
                                <View style={{ paddingHorizontal: 15, borderBottomWidth: 1, borderBottomColor: Colors.LightestGrey }} key={index}>
                                    <View style={styles.imageView}>
                                        <View style={styles.imageStyle}>
                                            <Image style={styles.setImage}
                                                source={{ uri: data.product.data.image_primary }}
                                            />
                                            <View
                                                style={{
                                                    position: 'absolute', borderRadius: 5, flexDirection: 'row',
                                                    marginLeft: 35, backgroundColor: Colors.Green, padding: 1
                                                }}>
                                                <Image source={require('../../assets/icons/question.png')}
                                                    style={{ width: 20, height: 20 }} />
                                                <Text style={{ color: Colors.White }}>{data.product.data.currency}{data.product.data.price} </Text>
                                            </View>
                                        </View>
                                        <View>
                                            <View style={{ flexDirection: 'row' }} >
                                                <Text style={{ fontWeight: 'bold', width: '60%' }}>{data.product.data.name} </Text>
                                                <Icon name="message" size={20} style={{width: '35%'}}/>
                                            </View>
                                            <Text style={{ width: '100%', fontSize: 10, fontWeight: 'bold'}} >{data.product.data.quantity} {data.product.data.unit} per {data.package} (Package Box)</Text>
                                            <Text style={{ width: '100%', fontSize: 10,}}>Code: {data.product.data.company_code}</Text>
                                            <Text> </Text>
                                            <Text style={{fontSize: 10,}}>Total Quantity: {data.quantity} {data.unit}</Text>
                                            <Text style={{fontSize: 10,}}>Total Item CBM: {data.product.data.cbm} M</Text>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
                                        <TouchableOpacity onPress={() => this.subNumber(this.state.number1)}
                                            style={{ height: 30, borderRadius: 50, backgroundColor: 'white', width: 30 }}>
                                            <Text style={styles.subtractBtnText} > - </Text>
                                        </TouchableOpacity >
                                        <Text style={styles.showText}>
                                            {this.state.number1}
                                        </Text>
                                        <TouchableOpacity onPress={() => this.addNumber(this.state.number1)}
                                            style={{ height: 30, borderRadius: 50, backgroundColor: 'white', width: 30 }}>
                                            <Text style={styles.addBtnText}> + </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={this.openChat}
                                            style={styles.chatBtn}>
                                            <Icon name="chat-bubble-outline" size={20} color={'white'} />
                                            <Text style={{ color: Colors.White }}> Chat Now</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.tagBtn}>
                                            <Image source={require('../../assets/icons/loyalitybadge.png')} style={{ width: 20, height: 20 }} />
                                            <Text style={{ color: Colors.White,}}>{data.product.data.currency}{data.product.data.price}</Text>
                                        </TouchableOpacity>
                                    </View>
                                    {this.state.isChat ?
                                        <View>
                                            <TextInput
                                                multiline={true}
                                            />
                                        </View>
                                        :
                                        null
                                    }
                                </View>
                            )
                        })
                        : null
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchStyle: {
        alignItems: 'center',
        paddingVertical: 4,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    SubTotalAmount: {
        color: Colors.Grey,
        fontWeight: 'bold'
    },
    cbmText: {
        color: Colors.Green,
        fontWeight: 'bold'
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 10,
        paddingBottom: 10
    },
    createOrderBtn: {
        width: '45%',
        backgroundColor: Colors.Red,
        height: 40,
        justifyContent: 'center',
        borderRadius: 12
    },
    btnText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.White,
    },
    imageView: {
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'space-between',
    },
    imageStyle: {
        width: 120,
        height: 120,
    },
    setImage: {
        width: 120, 
        borderWidth: 1,
        height: 120, 
        position: 'relative',
    },
    subtractBtnText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'blue',
        fontSize: 22,
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
        fontSize: 22,
    },
    chatBtn: {
        flexDirection: 'row',
        height: 30,
        borderRadius: 5,
        backgroundColor: Colors.Green,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tagBtn: {
        flexDirection: 'row',
        height: 30,
        borderRadius: 5,
        backgroundColor: Colors.Yellow,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
    }
})