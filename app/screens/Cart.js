import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { Search } from '../components/Search';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../helpers/Helpers';

export default class Cart extends Component {
    constructor(){
        super()
        this.state = {
            isChat: false
        }
    }
    
    openChat = () => {
        let {isChat} = this.state;
        if(isChat === false)
            this.setState({isChat: true})
        else
            this.setState({isChat: false})
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, paddingTop: 10 }} > MyCart</Text>
                </View>
                <View style={{ alignItems: 'center', paddingVertical: 4, borderBottomWidth: 1, borderColor: 'gray' }}>
                    <Search placeholder={'Search Cart'} />
                </View>
                <View style={{ paddingHorizontal: 15, paddingVertical: 3, borderBottomWidth: 1 }}>
                    <Text style={{ color: 'grey' }}> Subtotal <Text style={styles.SubTotalAmount}> $2039.4 </Text></Text>
                    <Text style={{ color: 'cyan' }}> CBM <Text style={styles.cbmText}> 0.00 M </Text> </Text>
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
                            <View style={{position: 'absolute', marginTop: 25, borderRadius: 5,
                            marginLeft: 60, borderWidth: 1, backgroundColor: Colors.Green}}>
                                <Text><Icon name="questioncircle" size={12}/> s51.89 </Text>
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
                            <TouchableOpacity 
                            style={{ height: 30, borderRadius: 50, backgroundColor: 'white', width: 30 }}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'blue', fontSize: 22 }}> - </Text>
                            </TouchableOpacity >
                            <Text
                                style={{
                                    height: 30, borderRadius: 50, backgroundColor: 'white', width: 60,
                                    textAlign: 'center', fontWeight: 'bold', fontSize: 18
                                }}>
                                02
                         </Text>
                            <TouchableOpacity 
                            style={{ height: 30, borderRadius: 50, backgroundColor: 'white', width: 30 }}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'blue', fontSize: 22 }}> + </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.openChat}
                            style={{ height: 30, borderRadius: 5, backgroundColor: 'cyan', width: 90 }}>
                                <Text><Icon name="chat-bubble-outline" size={20} color={'white'} /> Chat Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 30, borderRadius: 5, backgroundColor: '#ffc200', width: 90 }}>
                                <Text> <Icon name="chat-bubble-outline" size={20} /> s$1244.2</Text>
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
                            <View style={{position: 'absolute', marginTop: 25, borderRadius: 5,
                            marginLeft: 60, borderWidth: 1, backgroundColor: Colors.Green}}>
                                <Text><Icon name="questioncircle" size={12}/> s51.89 </Text>
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
                            <TouchableOpacity style={{ height: 30, borderRadius: 50, backgroundColor: 'white', width: 30 }}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'blue', fontSize: 22 }}> - </Text>
                            </TouchableOpacity >
                            <Text
                                style={{
                                    height: 30, borderRadius: 50, backgroundColor: 'white', width: 60,
                                    textAlign: 'center', fontWeight: 'bold', fontSize: 18
                                }}>
                                02
                         </Text>
                            <TouchableOpacity 
                                style={{ height: 30, borderRadius: 50, backgroundColor: 'white', width: 30 }}>
                                <Text 
                                style={{ textAlign: 'center', fontWeight: 'bold', color: 'blue', fontSize: 22 }}> + </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.openChat}
                            style={{ height: 30, borderRadius: 5, backgroundColor: 'cyan', width: 90 }}>
                                <Text><Icon name="chat-bubble-outline" size={20} color={'white'} /> Chat Now</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 30, borderRadius: 5, backgroundColor: '#ffc200', width: 90 }}>
                                <Text> <Icon name="chat-bubble-outline" size={20} /> s$1244.2</Text>
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
                            <View style={{position: 'absolute', marginTop: 25, borderRadius: 5,
                            marginLeft: 60, borderWidth: 1, backgroundColor: Colors.Green}}>
                                <Text style={{textAlign: 'center'}}><Icon name="questioncircle" size={12}/> s51.89 </Text>
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
                            <TouchableOpacity style={{ height: 30, borderRadius: 50, backgroundColor: 'white', width: 30 }}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'blue', fontSize: 22 }}> - </Text>
                            </TouchableOpacity >
                            <Text
                                style={{
                                    height: 30, borderRadius: 50, backgroundColor: 'white', width: 60,
                                    textAlign: 'center', fontWeight: 'bold', fontSize: 18
                                }}>
                                02
                         </Text>
                            <TouchableOpacity style={{ height: 30, borderRadius: 50, backgroundColor: 'white', width: 30 }}>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold', color: 'blue', fontSize: 22 }}> + </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={this.openChat} 
                            style={{ height: 30, borderRadius: 5, backgroundColor: 'cyan', width: 90 }}>
                                <Text>
                                    <Icon name="chat-bubble-outline" size={20} color={'white'}/> 
                                        Chat Now
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 30, borderRadius: 5, backgroundColor: '#ffc200', width: 90 }}>
                                <Text> <Icon name="chat-bubble-outline" size={20} style={styles.tagBtnIcon}/> s$1244.2</Text>
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
        color: 'black',
        fontWeight: 'bold'
    },
    cbmText: {
        color: 'cyan',
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
        color: Colors.White,
        fontWeight: 'bold',
        fontSize: 18,
    },
    imageView: {
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'space-between',
    },
})