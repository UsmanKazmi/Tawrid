import React, { Component } from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { ScrollView } from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import TabProducts from './TabProducts';
import { CardMain } from '../components/CardMain';
import { SmallProductCard } from '../components/SmallProductCard';

const { height } = Dimensions.get('window')

export default class CardGridView extends Component {
    static navigationOptions = {
        header: null

    }
    render() {
        return (
            <ScrollView style={styles.mainView}>
                <CardMain />
                <View style={styles.newProductView}>
                    <Text style={styles.newProductText}>
                        New Products
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>
                            View all
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.newProductCards}>
                    <SmallProductCard imageUrl={'https://www.dike.lib.ia.us/images/sample-2.jpg/image'} />
                    <SmallProductCard imageUrl={'https://www.dike.lib.ia.us/images/sample-1.jpg/image'} />
                    <SmallProductCard imageUrl={'https://www.dike.lib.ia.us/images/sample-3.jpg/image'} />
                </View>
                <View style={styles.myProductView}>
                    <Text style={styles.myProductText}>
                        My Products
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>
                            View all
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.myProductCards}>
                    <SmallProductCard imageUrl={'https://www.dike.lib.ia.us/images/sample-1.jpg/image'} />
                    <SmallProductCard imageUrl={'https://www.dike.lib.ia.us/images/sample-2.jpg/image'} />
                    <SmallProductCard imageUrl={'https://www.dike.lib.ia.us/images/sample-3.jpg/image'} />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    newProductView: {
        paddingTop: 10,
        paddingBottom: 10,

        flexDirection: 'row',
    },
    newProductText: {
        flex: 1,
        fontWeight: 'bold',
        color: 'grey',


    },
    myProductView: {
        paddingTop: 10,
        paddingBottom: 10,

        flexDirection: 'row',
    },
    myProductText: {
        flex: 1,
        fontWeight: 'bold',
        color: 'grey',
    },
    viewAllText: {
        textAlign: 'center',
        fontSize: 12
    },
    mainView: {
        backgroundColor:Colors.White,
        margin: 15,
        backgroundColor: Colors.White
    },
    newProductCards: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    myProductCards: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    }




});

