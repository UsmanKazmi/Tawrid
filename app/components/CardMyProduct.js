import React, { Component } from 'react';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const { height } = Dimensions.get('window')

class CardMyProduct extends Component {
    constructor() {
        super();
    }

    handleChange = (info, name) => {
        this.setState({
            ['name']: !info
        })
    }
    info = (data) => {
        console.log('Info ', data)
    }
    tags = (tag) => {
        console.log('Tags ', tag)
    }
    render() {
        // console.log('My Products: ', this.props.data[0]);
        return (
            <View style={styles.mainView}>
                {
                    this.props.data ?
                        this.props.data.map((data, index) => {
                            console.log('image ', data.product.data.image_primary)
                            return (
                                <View key={index} style={styles.card}>
                                    <Swiper style={styles.wrapper} showsButtons={false}
                                        activeDot={<View style={styles.slideView} />}
                                    >
                                        <View style={styles.slide1} >
                                            <Image style={styles.image}
                                                source={{ uri: data.product.data.image_primary }}
                                            />
                                        </View>
                                    </Swiper>
                                    <View style={{
                                        backgroundColor: Colors.LightGreen,
                                    }}>
                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={styles.cardTitle}>
                                                {data.product.data.name}
                                            </Text>
                                            <Image style={styles.tagImage}
                                                source={require('../../assets/icons/loyalitybadge.png')}
                                            />
                                            <Text style={styles.cardPrice}>
                                                {data.product.data.currency}{data.product.data.price}
                                            </Text>
                                        </View>
                                        <Text style={styles.cardSubTitle}>
                                            {data.product.data.quantity} {data.product.data.unit} in
                                            {data.product.data.package}
                                        </Text>
                                        <View
                                            style={{
                                                borderBottomColor: 'white',
                                                borderBottomWidth: StyleSheet.hairlineWidth,
                                            }}
                                        />
                                        <View style={{ flexDirection: "row", justifyContent: 'space-evenly' }}>
                                            <TouchableOpacity style={styles.bottomButtons}
                                            onPress={() => this.handleChange(data.product.data.in_cart, 'cart')}>
                                                <Image
                                                    style={{ height: 20, width: 20, }}
                                                    source={require('../../assets/icons/addtocart.png')}
                                                />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.bottomButtons}
                                              onPress={() => this.handleChange(data.product.data.is_favorite, 'fav')}>
                                                <Image
                                                    style={{ height: 20, width: 20, }}
                                                    source={require('../../assets/icons/fav.png')}
                                                />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.bottomButtons}>
                                                <Image
                                                    style={{ height: 20, width: 20, }}
                                                    source={require('../../assets/icons/comment.png')}
                                                />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.bottomButtons}>
                                                <Image
                                                    style={{ height: 20, width: 20, }}
                                                    source={require('../../assets/icons/share.png')}
                                                />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.bottomButtons}
                                                onPress={() => this.info(data.product.data.size_information)}>
                                                <Image
                                                    style={{ height: 20, width: 20, }}
                                                    source={require('../../assets/icons/info.png')}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        }) :
                        null
                }
            </View>
        );
    }
}
export default CardMyProduct


const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'column',
        margin: 15
    },
    card: {
        marginBottom: 20
    },
    slideView: {
        backgroundColor: Colors.Yellow,
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    },
    image:
    {
        width: 100 + '%',
        height: 100 + '%',
    },
    cardTitle: {
        flex: 1,
        color: 'white',
        fontSize: 15,
        marginLeft: 15,
        marginBottom: 5,
        marginTop: 10,
        fontWeight: "bold"
    },
    cardSubTitle: {
        color: 'white',
        fontSize: 10,
        marginLeft: 15,
        marginBottom: 10
    },
    cardPrice: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 15,
        textAlign: 'right',
        marginRight: 15,
        marginBottom: 5,
        marginTop: 10,
    },
    bottomButtons: {
        alignSelf: 'center',
        padding: 5,
    },
    wrapper: {
        width: 100 + '%',
        height: height / 3
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    tagImage: {
        height: 20,
        width: 20,
        marginHorizontal: 5,
        alignSelf: 'center'
    }
});

