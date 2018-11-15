import React, { Component } from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { ScrollView } from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

const { height } = Dimensions.get('window')

export class CardChat extends Component {

    componentDidMount(data){
        dataFromParams = this.props.data
        // this.setState({images: images.push(dataFromParams.image_secondary)})
        console.log('DATA HAS COME from Chat ',dataFromParams)
        // console.log('asddsa', this.state.images)
    }

    render() {
        return (
            <View style={styles.mainView}>


              <View style={styles.slide1}>
              {this.props.data ?

                    <Image
                        style={styles.image}
                        source={{ uri: this.props.data.image_primary }}
                        />
                        :null}

                </View>
                <View style={{
                    borderBottomLeftRadius: 7,
                    borderBottomRightRadius: 7,
                }}>
                    <View style={{ flexDirection: "row" }}>
                    {this.props.data ?

                        <Text
                            style={styles.cardTitle}>{this.props.data.name}
                        </Text>
                        :null}


                    </View>
                    {this.props.data ?
                    <Text style={styles.cardSubTitle}>{this.props.data.description}</Text>
                    :null }
                    <View
                        style={{
                            borderBottomColor: 'white',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                    />

                    <View style={{ flexDirection: "row", marginHorizontal: 10 }}>

                        <TouchableOpacity style={styles.bottomButtons}>
                            <View style={{
                                flexDirection: "row"

                            }}>

                                <Image
                                    style={{
                                        resizeMode: 'contain',
                                        height: 15,
                                        width: 15,
                                        paddingHorizontal:10
                                    }}
                                    source={require('../../assets/icons/shipping.png')}

                                    />

                                {this.props.data ?

                                <Text style={{
                                    fontSize: 12,
                                    color: Colors.Grey
                                }}>
                                    {`http://portal.tawrid.store/product/${this.props.data.id}/shop`}
                                </Text>
                                : null }
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </View>


            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        margin: 15,
        borderWidth: 1,
        borderColor: Colors.LightestGrey,
        borderRadius: 7
    },
    image:
    {
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        width: 100 + '%',
        height: 100 + '%',
    },
    cardTitle: {
        color: Colors.DarkGrey,
        fontSize: 18,
        marginLeft: 15,
        marginBottom: 5,
        marginTop: 10,
        fontWeight: "bold"

    },
    cardSubTitle: {
        color: Colors.Grey,
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
        alignSelf: 'stretch',
        paddingBottom: 10,
    },
    wrapper: {
        width: 100 + '%',
        height: height / 3
    },
    slide1: {
        width: 100 + '%',
        height: height / 5,
        justifyContent: 'center',
        alignItems: 'center',
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
    }



});

