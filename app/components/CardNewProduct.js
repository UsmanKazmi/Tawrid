import React, { Component } from 'react';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, Platform, Share} from 'react-native';
import Swiper from 'react-native-swiper';
import Loader from '../components/Loader';
import { TawridApi } from '../utilities/Api';
import { withNavigation } from 'react-navigation';

const { height } = Dimensions.get('window')

var images = []
class CardNewProduct extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        //to fix react-native-swiper in android bug
        if (Platform.OS === 'android') {
            setTimeout(() => {
                this.setState({ visiableSwiper: true })
            }, 0)
        }
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
        //OPEN Product Detail PAGE
        console.log('DATA FROM STACK', data)
        this.props.navigation.navigate('productDetails', data)
    }

    shareData = (data) => {
        console.log('Share ', data)

        Share.share({
            message: data.description,
            url: data.image_primary,
            title: data.name
        }, {
                // Android only:
                dialogTitle: data.name,
                // iOS only:
                excludedActivityTypes: [
                    'com.apple.UIKit.activity.PostToTwitter'
                ]
            })
    }

    openChat = (data) => {
        console.log('CHAT')
        this.props.navigation.navigate('chatScreen', data)
    }

    removeFromFav = () => {
        TawridApi.removeFromFav().then(value => {
            this.setState({
                response: value,
            });
            if (this.state.response) {
                console.log(' removeFromFav response from server ', this.state.response)
                if (this.state.response.status == 'success') {
                    alert("Removed from favourite")
                } else if (this.state.response.status == 'error') {
                    Alert.alert(this.state.response.message);
                } else {
                    Alert.alert(Error, 'An unknown error occured. Please contact App support team');
                }
            } else {
                Alert.alert(Error, 'Request Terminated. Please check your internet or contact our support.');
            }

        })
    }

    addtoFav = () => {
        TawridApi.addToFav().then(value => {
            this.setState({
                response: value,
            });
            if (this.state.response) {
                console.log('addtoFav response from server ', this.state.response)
                if (this.state.response.status == 'success') {
                    alert("added to favourite")
                } else if (this.state.response.status == 'error') {
                    Alert.alert(this.state.response.message);
                } else {
                    Alert.alert(Error, 'An unknown error occured. Please contact App support team');
                }
            } else {
                Alert.alert(Error, 'Request Terminated. Please check your internet or contact our support.');
            }
        })
    }

    tags = (tag) => {
        console.log('Tags ', tag)
    }


    addtoCart = () => {

        let collection = {
        }
        collection.productID = '626';
        collection.method = 'add';
        collection.note = 'Test';
        collection.quantity = '11';

        TawridApi.AddtoCart(collection).then(value => {
            console.log('value', value)
            this.setState({
                response: value,

            });
            if (this.state.response) {
                console.log('Success:  Response from AddtoCart Method ', this.state.response);
                if (this.state.response.status == 'success') {
                    alert("Product is successfully added to Cart")
                } else if (this.state.response.status == 'error') {
                    Alert.alert(this.state.response.message);
                } else {
                    Alert.alert(Error, 'An unknown error occured. Please contact App support team');
                }
            } else {
                Alert.alert(Error, 'Request Terminated. Please check your internet or contact our support.');
            }

        })
            .catch(error => {
                this.setState({
                    // loading: false,
                });
                console.log('Error: AddtoCart Method ', error);
            });

    }

    render() {
        console.log('Props ', this.props);
        return (
            <View style={styles.mainView}>
                <Swiper style={styles.wrapper} showsButtons={false} showsButtons={false} index={2} autoplay
                    autoplayTimeout={5}
                    activeDot={<View style={styles.slideView} />}>
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
                        }) :
                        <Loader style={styles.loadingAnimation} loading={this.state.loading}
                            color={'#000'} size={'small'}
                            height={100} width={200} />
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
                                <TouchableOpacity style={styles.bottomButtons}
                                    onPress={() => this.addtoCart()}>


                                    <Image style={styles.bottomImage}
                                        source={require('../../assets/icons/addtocart.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bottomButtons}
                                    onPress={() => this.addtoFav()}>
                                    <Image style={styles.bottomImage}
                                        source={require('../../assets/icons/fav.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bottomButtons}
                                    onPress={() => this.openChat(data)}

                                >
                                    <Image style={styles.bottomImage}
                                        source={require('../../assets/icons/comment.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bottomButtons}
                                    onPress={() => this.shareData(data)}
                                >
                                    <Image style={styles.bottomImage}
                                        source={require('../../assets/icons/share.png')}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.bottomButtons}
                                    onPress={() => this.info(data)}
                                >
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
export default withNavigation(CardNewProduct)

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

