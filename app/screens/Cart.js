import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Search } from '../components/Search';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../helpers/Helpers';

export default class Cart extends Component {
    constructor(){
        super()
        this.state = {
            isChat: false,
            number1: 0,
            number2: 0,
            number3: 0
        }
    }
    
    openChat = () => {
        let {isChat} = this.state;
        if(isChat === false)
            this.setState({isChat: true})
        else
            this.setState({isChat: false})
    }

    addNumber = (num) => {
        if(num === this.state.number1)
            this.setState({number1: ++num})
        else if(num === this.state.number2)
            this.setState({number2: ++num})
        else
            this.setState({number3: ++num})
    }

    subNumber= (num) => {
        if(num === this.state.number1)
            this.setState({number1: --num})
        else if(num === this.state.number2)
            this.setState({number2: --num})
        else
            this.setState({number3: --num})
    }   

    render() {
        return (
            <View style={{ flex: 1,backgroundColor:Colors.White }}>
            
                <View style={{ alignItems: 'center', paddingVertical: 4, borderBottomWidth: 1, borderColor: 'gray' }}>
                    <Search placeholder={'Search Cart'} />
                </View>
                <View style={{ paddingHorizontal: 15, paddingVertical: 3, borderBottomWidth: 1 }}>
                    <Text style={{ color: 'grey' }}> Subtotal <Text style={styles.SubTotalAmount}> $2039.4 </Text></Text>
                    <Text style={{ color: 'cyan' }}> CBM <Text style={styles.cbmText}> 0.00 M³ </Text> </Text>
                    <View style={styles.buttonView}>
                        <TouchableOpacity style={styles.createOrderBtn}>
                            <Text style={styles.btnText}>create order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.createOrderBtn}>
                            <Text style={styles.btnText}>add note</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ paddingHorizontal: 15, borderBottomWidth: 1, }}>
                        <View style={styles.imageView}>
                            <Image
                                style={{
                                    width: 120, borderWidth: 1,
                                    height: 120, position: 'relative'
                                }}
                                source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
                            />
                            <View 
                            style={{position: 'absolute', marginTop: 25, borderRadius: 5, flexDirection: 'row',
                            marginLeft: 45,  backgroundColor: Colors.Green,padding:1}}>
                                <Image source={require('../../assets/icons/question.png')} 
                                style={{width: 20, height: 20}}/>
                                <Text style={{color: Colors.White}}> s51.89 </Text>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 5 }}>Kare Tepsi Buyuk          </Text>
                                    <Icon name="message" size={20} />
                                </View>
                                <Text style={{ width: '100%', paddingLeft: 5 }} >12 pieces per Box (Package Box)</Text>
                                <Text style={{ width: '100%', paddingLeft: 5 }}>Code: 1034</Text>
                                <Text> </Text>
                                <Text> Total Quality: 24 pieces</Text>
                                <Text> Total Item CBM: 0 M</Text>
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
                                <Text style={{color: Colors.White}}> Chat Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tagBtn}>
                                <Image source={require('../../assets/icons/loyalitybadge.png')} style={{width: 20, height: 20}}/>
                                <Text style={{color: Colors.White}}>  s$1244.2</Text>
                            </TouchableOpacity>
                        </View>
                        {this.state.isChat ?
                            <View>
                                <TextInput 
                                    multiline= {true}
                                />
                            </View>
                            : 
                            null
                        }
                    </View>
                    <View style={{ paddingHorizontal: 15, borderBottomWidth: 1 }}>
                        <View style={styles.imageView}>
                            <Image
                                style={{
                                    width: 120, borderWidth: 1,
                                    height: 120,
                                    position: 'relative'
                                }}
                                source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
                            />
                            <View style={{position: 'absolute', marginTop: 25, borderRadius: 5, flexDirection: 'row',
                            marginLeft: 45, borderWidth: 1, backgroundColor: Colors.Green}}>
                                <Image source={require('../../assets/icons/question.png')} style={{width: 20, height: 20}}/>
                                <Text style={{color: Colors.White}}> s51.89 </Text>
                            </View>
                            <View >
                                <View style={{flexDirection: 'row' }} >
                                    <Text style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 5 }}>Kare Tepsi Buyuk          </Text>
                                    <Icon name="message" size={20} />
                                </View>
                                <Text style={{ width: '100%', paddingLeft: 5 }} >12 pieces per Box (Package Box)</Text>
                                <Text style={{ width: '100%', paddingLeft: 5 }}>Code: 1034</Text>
                                <Text> </Text>
                                <Text> Total Quality: 24 pieces</Text>
                                <Text> Total Item CBM: 0 M</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
                            <TouchableOpacity onPress={() => this.subNumber(this.state.number2)}
                            style={{ height: 30, borderRadius: 50, backgroundColor: 'white', width: 30 }}>
                                <Text style={styles.subtractBtnText}> - </Text>
                            </TouchableOpacity >
                            <Text style={styles.showText}> {this.state.number2} </Text>
                            <TouchableOpacity onPress={() => this.addNumber(this.state.number2)}
                                style={{ height: 30, borderRadius: 50, backgroundColor: 'white', width: 30 }}>
                                <Text style={styles.addBtnText}> + </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.openChat}
                            style={styles.chatBtn}>
                                <Icon name="chat-bubble-outline" size={20} color={'white'} />
                                <Text style={{color: Colors.White}}> Chat Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tagBtn}>
                                <Image source={require('../../assets/icons/loyalitybadge.png')} style={{width: 20, height: 20}}/>
                                <Text style={{color: Colors.White}}>  s$1244.2</Text>
                            </TouchableOpacity>
                        </View>
                        {this.state.isChat ?
                            <View>
                                <TextInput 
                                    multiline= {true}
                                />
                            </View>
                            : 
                            null
                        }
                    </View>
                    <View style={{ paddingHorizontal: 15, borderBottomWidth: 1 }}>
                        <View style={styles.imageView}>
                            <Image
                                style={{
                                    width: 120, borderWidth: 1,
                                    height: 120, position: 'relative'
                                }}
                                source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
                            />
                            <View style={{position: 'absolute', marginTop: 25, borderRadius: 5, flexDirection: 'row',
                            marginLeft: 45, borderWidth: 1, backgroundColor: Colors.Green}}>
                                <Image source={require('../../assets/icons/question.png')} style={{width: 20, height: 20}}/>
                                <Text style={{color: Colors.White}}> s51.89 </Text>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row' }} >
                                    <Text 
                                    style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 5 }}>Kare Tepsi Buyuk          </Text>
                                    <Icon name="message" size={20} />
                                </View>
                                <Text style={{ width: '100%', paddingLeft: 5 }} >12 pieces per Box (Package Box)</Text>
                                <Text style={{ width: '100%', paddingLeft: 5 }}>Code: 1034</Text>
                                <Text> </Text>
                                <Text> Total Quality: 24 pieces</Text>
                                <Text> Total Item CBM: 0 M</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
                            <TouchableOpacity onPress={() => this.subNumber(this.state.number3)}
                            style={{ height: 30, borderRadius: 50, backgroundColor: 'white', width: 30 }}>
                                <Text style={styles.subtractBtnText}> - </Text>
                            </TouchableOpacity >
                            <Text style={styles.showText}>
                                {this.state.number3}
                            </Text>
                            <TouchableOpacity onPress={() => this.addNumber(this.state.number3)}
                            style={{ height: 30, borderRadius: 50, backgroundColor: 'white', width: 30 }}>
                                <Text style={styles.addBtnText}> + </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.openChat} 
                            style={styles.chatBtn}>
                                <Icon name="chat-bubble-outline" size={20} color={'white'}/>
                                <Text style={{color: Colors.White}}>
                                        Chat Now
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.tagBtn}>
                                <Image source={require('../../assets/icons/loyalitybadge.png')} style={{width: 20, height: 20}}/>
                                <Text style={{color: Colors.White}}>  s$1244.2</Text>
                            </TouchableOpacity>
                        </View>
                        {this.state.isChat ?
                            <View>
                                <TextInput 
                                    multiline= {true}
                                />
                            </View>
                            : 
                            null
                        }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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