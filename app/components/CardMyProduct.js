import React, { Component } from 'react';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { TawridApi } from '../utilities/Api';
import Loader from '../components/Loader';
import { withNavigation } from 'react-navigation';
import { Share } from 'react-native';

const { height } = Dimensions.get('window')

class CardMyProduct extends Component {
    constructor() {
        super();
        this.state = {
            loadingFav: false,
            loadingAddtoCart: false,
            loadingShare:false
        }
    }

    handleChange = (info, name) => {
        this.setState({
            ['name']: !info
        })
    }
    info = (data) => {
        //OPEN Product Detail PAGE
        console.log('DATA FROM STACK', data)
        this.props.navigation.navigate('OrderSelectedinClientSTack', data)
    }

    shareData = (data) => {
        this.setState({
            loadingShare: true,
        });
        console.log('Share ', data)

        Share.share({
            message: "Name:  " + data.name +"\n" + "Description:  " +data.description +"\n" + "Link:  " + data.image_primary,
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

            this.setState({
                loadingShare: false,
            });
          
         }

    openChat = (data) => {
        // console.log(data)
        this.props.navigation.navigate('chat', data)
    }

    removeFromFav = () => {
        TawridApi.removeFromFav().then(value => {
            this.setState({
                response: value,
                loading: false
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

    addtoFav = (data) => {
        this.setState({
            loadingFav: true,
        });
        
        const productID = data.id
        TawridApi.addToFav(productID).then(value => {
            this.setState({
                response: value,
                loadingFav: false,

            });
            if (this.state.response) {
                console.log('addtoFav response from server ', this.state.response)
                if (this.state.response.status == 'success') {
                alert(data.name + " is added to favourite")    
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


    addtoCart = (data) => {
        this.setState({
            loadingAddtoCart: true,
        });
        let collection = {
            
        }
        collection.productID = data.id;
        collection.method = 'add';
        collection.note = 'Test';
        collection.quantity = '11';

        TawridApi.AddtoCart(collection).then(value => {
            console.log('value', value)
            this.setState({
                response: value,
                loadingAddtoCart: false,

            });
            if (this.state.response) {
                console.log('Success:  Response from AddtoCart Method ', this.state.response);
                if (this.state.response.status == 'success') {
                    alert(data.name + " is successfully added to Cart")
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
        console.log('dataa', this.props.data);
        return (
            <View style={styles.mainView}>
              
                {this.props.data.map((data, index) => {
                    console.log('data ', data)
                    return (
                        <View key={index} style={{ backgroundColor: Colors.LightGreen, marginBottom: 20 }}>



                        <Swiper style={styles.wrapper} showsButtons={false} showsButtons={false} index={2} autoplay
                        autoplayTimeout={5}
                        activeDot={<View style={styles.slideView} />}>


                            {data.image_secondary.map((image,index2) => {
                                console.log('image_secondary',image)
                                    return (
                                    <View style={styles.slide1} key={index2}>
                                        <Image
                                            style={styles.image}
                                            source={{ uri: image }}
                                        />
                                    </View>
                                
                                    )
                                    })
                                    } 
                        
                    </Swiper>







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

                            {
                                this.state.loadingAddtoCart ?
                                    <View style={{alignItems: 'center', justifyContent: 'flex-start',}}>
                                        <Loader style={[styles.loadingAnimation,]} loading={this.state.loadingAddtoCart}
                                            color={'#fff'} size={'small'} />
                                    </View>
                                    :

                                <TouchableOpacity style={styles.bottomButtons}
                                    onPress={() => this.addtoCart(data)}>
                                    <Image style={styles.bottomImage}
                                        source={require('../../assets/icons/addtocart.png')}
                                    />
                                </TouchableOpacity>
                            }
                                {
                                this.state.loadingFav ?
                                    <View style={{alignItems: 'center', justifyContent: 'flex-start',}}>
                                        <Loader style={[styles.loadingAnimation,]} loading={this.state.loadingFav}
                                            color={'#fff'} size={'small'} />
                                    </View>
                                    :
                                <TouchableOpacity style={styles.bottomButtons}
                                    onPress={() => this.addtoFav(data)}>

                                    <Image style={styles.bottomImage}
                                        source={require('../../assets/icons/fav.png')}
                                    />
                                    
                                </TouchableOpacity>

                                }
                                <TouchableOpacity style={styles.bottomButtons}
                                    onPress={() => this.openChat(data)}
                                >
                                    <Image style={styles.bottomImage}
                                        source={require('../../assets/icons/comment.png')}
                                    />
                                </TouchableOpacity>

                                {
                                    this.state.loadingShare ?
                                        <View style={{alignItems: 'center', justifyContent: 'flex-start',}}>
                                            <Loader style={[styles.loadingAnimation,]} loading={this.state.loadingShare}
                                                color={'#fff'} size={'small'} />
                                        </View>
                                        :


                                <TouchableOpacity style={styles.bottomButtons}
                                    onPress={() => this.shareData(data)}
                                >
                                    <Image style={styles.bottomImage}
                                        source={require('../../assets/icons/share.png')}
                                    />
                                </TouchableOpacity>
                                }



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
export default withNavigation(CardMyProduct)


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

