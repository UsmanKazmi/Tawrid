import React, { Component } from 'react';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';

const { height } = Dimensions.get('window')

var images = []
class CardNewProduct extends Component {
    constructor() {
        super();
    }

    UNSAFE_componentWillReceiveProps(next) {
        console.log('abc ', next.data[1])
        next.data[1].forEach(element => {
            images.push(element[9394])
            images.push(element[9395])
            images.push(element[9396])
            images.push(element[9397])
            images.push(element[9398])
        });
        next.data.splice(1, 1)
    }
    info = (data) => {
        console.log('Info ', data)
    }
    tags = (tag) => {
        console.log('Tags ', tag)
    }

    render() {
        // console.log('sd ', this.props.data);
        return (
            <View style={styles.mainView}>
                <Swiper style={styles.wrapper} showsButtons={false}
                    activeDot={<View style={styles.slideView} />}
                >
                    {this.props.data ?
                        images.map((image, index) => {
                            return (
                                <View style={styles.slide1} key={index}>
                                    <Image
                                        style={styles.image}
                                        source={{ uri: image }}
                                    />
                                </View>
                            )
                        }) : null
                    }
                </Swiper>
                {this.props.data.map((data, index) => {
                    return (
                        <View key={index} style={{
                            backgroundColor: Colors.LightGreen,
                        }}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.cardTitle}>
                                    {data.name}
                                </Text>
                                <TouchableOpacity style={styles.tagBtn} onPress={() => this.tags(data.tags)}>
                                    <Image style={styles.tagImage}
                                        source={require('../../assets/icons/loyalitybadge.png')}
                                    />
                                </TouchableOpacity>
                                <Text style={styles.cardPrice}>
                                    {data.currency}{data.price}
                                </Text>
                            </View>
                            <Text style={styles.cardSubTitle}>
                                {data.quantity} {data.unit} in {data.package}
                            </Text>
                            <View
                                style={{
                                    borderBottomColor: 'white',
                                    borderBottomWidth: StyleSheet.hairlineWidth,
                                }}
                            />
                            <View style={styles.bottomIcons}>
                                <TouchableOpacity style={styles.bottomButtons} >
                                    <Image style={styles.bottomImage}
                                        source={require('../../assets/icons/addtocart.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bottomButtons}>
                                    <Image style={styles.bottomImage}
                                        source={require('../../assets/icons/fav.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bottomButtons}>
                                    <Image style={styles.bottomImage}
                                        source={require('../../assets/icons/comment.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bottomButtons}>
                                    <Image style={styles.bottomImage}
                                        source={require('../../assets/icons/share.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bottomButtons}
                                    onPress={() => this.info(data)} >
                                    <Image style={styles.bottomImage}
                                        source={require('../../assets/icons/info.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
            </View>
        );
    }
}
export default (CardNewProduct)

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'column',
        margin: 15
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
    },
    bottomIcons: {
        flexDirection: "row",
        justifyContent: 'space-evenly'
    },
    bottomImage: {
        height: 20,
        width: 20
    },
    tagBtn: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

