import React, { Component } from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { ScrollView } from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Search } from '../components/Search';
import { ImageSlider_OrderSelected } from '../components/ImageSlider_OrderSelected'
import RouteCardSelected from '../config/RouteCardSelected';


const cardTitle = {
    cardTitle: {

    }
}

export default class OrderSelected extends Component {

    constructor(){
        super()
        this.state = {
            images: []
        }
    }

    componentDidMount(){
        console.log('dataFromParams', this.props.navigation.state.params)
        dataFromParams = this.props.navigation.state.params
        // this.setState({images: images.push(dataFromParams.image_secondary)})
        console.log('DATA REACHED ORDER SELECTED ',dataFromParams.name)
        console.log('Img ', this.props.navigation.state.params)
        // console.log('asddsa', this.state.images)
    }


    render() {
        return (
            <View style={{ paddingBottom: 30, backgroundColor: Colors.White,paddingTop:5 }}>
            {this.props.navigation.state.params ? 
                <ScrollView >
                    <View style={{
                        flex: 1,
                        borderWidth: StyleSheet.hairlineWidth,
                        borderColor: Colors.LighterGrey
                    }}>
                    </View>
                    <View style={{
                        paddingVertical: 5,
                        height: screenHeight/2.5,
                    }}>
                        <ImageSlider_OrderSelected 
                        image={this.props.navigation.state.params.image_secondary} />
                    </View>
                    <View style={{
                        margin: 20
                    }}>
                        <View style={{
                            flexDirection: "row",
                            flex: 3,
                        }}>
                            <View style={{
                                padding: 5,
                                borderRadius: 20,
                                backgroundColor: Colors.Grey,
                                flexDirection: "row",
                            }}>
                                <Image
                                    style={{ width: 10, height: 10, marginHorizontal: 3 }}
                                    source={require('../../assets/icons/briefcase.png')} />

                                <Text style={{ fontSize: 7, color: Colors.White }}>
                                {
                                    this.props.navigation.state.params.company &&
                                        this.props.navigation.state.params.company.data.brand_name
                                }
                              </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <Text
                                style={styles.cardTitle}>{this.props.navigation.state.params.name}
                            </Text>
                            <Image
                                style={{ height: 20, width: 20, marginHorizontal: 5, alignSelf: 'center' }}
                                source={require('../../assets/icons/loayalitybadgeGreen.png')}
                            />
                            <Text
                                style={styles.cardPrice}>{this.props.navigation.state.params.currency}{this.props.navigation.state.params.price}
                            </Text>
                        </View>
                        <Text style={styles.cardSubTitle}> {this.props.navigation.state.params.quantity} {this.props.navigation.state.params.unit} in {this.props.navigation.state.params.package} / {this.props.navigation.state.params.weight} KG
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                        <Text style={{fontSize: 9, color: Colors.Grey,flex:1}}>Tags: </Text>
                        {
                            this.props.navigation.state.params.tags &&
                            this.props.navigation.state.params.tags.data.map((tag, index)=>{
                            return (
                                <View key={index}>
                                    <Text
                                        style={{
                                                flex: 1,
                                                color: Colors.Grey,
                                                fontSize: 9,
                                                alignSelf: 'flex-end'
                                            }}>{tag.name}
                                    </Text>
                                </View>
                        )})}

                            <Image
                                style={{ height: 18, width: 18 }}
                                source={require('../../assets/icons/addtocartplus.png')}
                            />
                        </View>
                    </View>
                    <View style={{
                        height: screenHeight / 2
                    }}>
                        <RouteCardSelected data={this.props.navigation.state.params}  />
                    </View>
                </ScrollView>
                : null
            }

            </View>
        )
    }
}
const screenHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    newProductView: {
        paddingTop: 10,
        paddingBottom: 10,
    },

    container: {
        backgroundColor: Colors.White,
        flex: 1,
        alignItems: 'center',
    },
    tabBar: {
        flexDirection: 'row',
        backgroundColor: Colors.White,
        borderBottomColor: Colors.DarkGrey,
        borderBottomWidth: 1,
    },
    tabFont: {
        fontSize: 15,
        fontFamily: 'DIN Next LT Arabic',
        // textTransform: 'uppercase',
        width: Dimensions.get('window').width / 2,
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',

    },
    tabItem: {
        alignItems: 'center',
        flex: 1,
        borderBottomColor: Colors.DarkGrey,
        borderBottomWidth: 1,
    },
    navBar: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 20,
        paddingRight: 20,

    },
    navBarTitle: {
        flexDirection: 'row',
        flex: 1,
    },
    navBarText: {
        textAlign: 'left',
        fontSize: 20,
        lineHeight: 24,
        fontFamily: 'DIN Next LT Arabic',
        fontWeight: 'bold',
        color: Colors.DarkGrey
    },
    titleText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 15,
        // lineHeight: 24,
        fontFamily: 'DIN Next LT Arabic',
        fontWeight: 'bold',
        color: Colors.DarkGrey,


    },
    titleTextView: {
        flex: 1,
        textAlign: 'center',
        fontSize: 15,
        // lineHeight: 24,
        fontFamily: 'DIN Next LT Arabic',
        fontWeight: 'bold',
        color: Colors.DarkGrey,


    },
    navBarButtons: {
        flexDirection: 'row',
    },
    filterIcon: {
        marginRight: 5,
    },
    searchBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    searchField: {
        flexDirection: 'row',
        height: 44,
        width: Dimensions.get('window').width - 40,
        paddingLeft: 10,
        paddingRight: 20,
        backgroundColor: Colors.LighterGrey,
        fontFamily: 'DIN Next LT Arabic',
        fontSize: 17,
        color: Colors.DarkGrey,
        borderRadius: 10,

    },
    cardTitle: {
        flex: 1,
        color: Colors.DarkGrey,
        fontSize: 17,
        marginBottom: 5,
        marginTop: 10,
        fontWeight: "bold"

    },
    cardSubTitle: {
        color: Colors.DarkGrey,
        fontSize: 11,
        marginBottom: 3
    },
    cardPrice: {
        fontWeight: "bold",
        color: Colors.Green,
        fontSize: 15,
        textAlign: 'right',
        marginRight: 15,
        marginBottom: 5,
        marginTop: 10,

    },

})