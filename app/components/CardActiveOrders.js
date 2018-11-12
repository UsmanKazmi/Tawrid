import React, { Component } from 'react'
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet} from 'react-native';
import { ImageSlider } from './ImageSlider';
import { SliderRange } from './SliderRange';

export class CardActiveOrders extends Component {
    render() {
        console.log('Card Active Orders ', this.props.data)
        return (
            <View style={styles.mainView}>
                {this.props.data ?
                    <View style={{width:100+'%',height:'100%'}}>
                        <View style={styles.imageSliderView}>
                            <ImageSlider image={this.props.data.list_image_order}/>
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.orderText}>
                                Order: {this.props.data.order_no}
                            </Text>
                            <Text style={styles.priceText}>
                                {this.props.data.total_products_price}
                            </Text>
                            <Image
                                style={{ height: 20, width: 20, }}
                                source={require('../../assets/icons/question.png')}
                            />
                        </View>
                        <View style={styles.shippingView}>
                            <Image
                                style={{ height: 15, width: 15, }}
                                source={require('../../assets/icons/shipping.png')}
                            />
                            <Text style={styles.shippingText}>
                                Shipping:N/A
                                </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <SliderRange />
                        </View>
                        <View style={styles.chatView}>
                            <Image
                                style={styles.chatImage}
                                source={require('../../assets/icons/chatBlue.png')}
                            />
                            <Text style={styles.chatText}>
                                Chat Now
                                </Text>
                            <Text style={styles.requiredText}>
                                {this.props.data.status}
                            </Text>
                        </View>
                    </View>
                    : <View>
                    <View style={styles.imageSliderView}>
                        <ImageSlider />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.orderText}>
                            Order: 
                        </Text>
                        <Text style={styles.priceText}>
                        </Text>
                        <Image
                            style={{ height: 20, width: 20, }}
                            source={require('../../assets/icons/question.png')}
                        />
                    </View>
                    <View style={styles.shippingView}>
                        <Image
                            style={{ height: 15, width: 15, }}
                            source={require('../../assets/icons/shipping.png')}
                        />
                        <Text style={styles.shippingText}>
                            Shipping:N/A
                            </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <SliderRange />
                    </View>
                    <View style={styles.chatView}>
                        <Image
                            style={styles.chatImage}
                            source={require('../../assets/icons/chatBlue.png')}
                        />
                        <Text style={styles.chatText}>
                            Chat Now
                            </Text>
                        <Text style={styles.requiredText}>
                            
                        </Text>
                    </View>
                </View>
            } 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView: {
        borderWidth: 2,
        borderColor: Colors.LighterGrey,
        borderRadius: 5,
        width: 90 + '%',
        height: 280,
        marginStart: 20,
        marginEnd: 20,
        marginBottom: 10,
        marginTop: 10
    },
    textView: {
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        flexDirection: 'row',
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
    chatImage: {
        height: 10,
        width: 10,
        marginHorizontal: 5,
        alignSelf: 'center'
    }
});

