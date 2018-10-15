import React, {Component } from 'react';
import {View,StyleSheet,ActivityIndicator,Text,Button,Dimensions,Image,TouchableHighlight} from 'react-native';
import {Colors} from '../helpers/Helpers';
import ImageSlider from 'react-native-image-slider';
import IonIcon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';



export default Products = (props) => {

    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      loading: true
    //   }
    // }
    
    console.log(props);
    let images=[            
        'https://4.imimg.com/data4/WG/OW/MY-12592044/2-500x500.jpg',
        'https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2016/04/Casa-Pop-Company-Raj-Crockery.jpg'
    ];
    return(
        //<Image style = {styles.image} source = {require('../../assets/images/product.jpg')} />    
        //<Image source={{uri: "http://placekitten.com/300/505"}} style={styles.image}>
        <View style={styles.productView}>
            <View style= {styles.product}>
                <View style={styles.imageView}>
                    <ImageSlider
                    images={images}
                    customSlide={({ index, item, style, width }) => (
                        // It's important to put style here because it's got offset inside
                        <View key={index} style={[style]} width={Dimensions.get('window').width-40}>
                            <Image source={{ uri: item }} style={styles.image} />
                        </View>
                    )}
                    customButtons={(position, move) => (
                        <View style={styles.sliderButtons}>
                          {images.map((image, index) => {
                            return (
                              <TouchableHighlight
                                key={index}
                                underlayColor="#ccc"
                                onPress={() => move(index)}
                                style={styles.slideButton}
                              >
                                <Text style={position === index && styles.slideButtonSelected}></Text>
                              </TouchableHighlight>
                            );
                          })}
                        </View>
                      )}
                    />
                </View>
            
                <View style={styles.header}>
                    <View style={styles.title}>
                    <Text style={styles.titleText}>30 CM. Crockery Set</Text>
                    </View>
                    <View style={styles.price}>
                    <Text style={styles.priceText}>$ 400.00</Text>
                    </View>
                </View>
                <View style={styles.pieces}>
                    <Text style={styles.piecesText}>20 PIECES in Box</Text>
                </View>
                <View style={styles.tags}>
                    <Text style={styles.tagLabel}>Tag: </Text><Text style={styles.tagsText}>#Ramadan Products, #Home Crockery, #Plates</Text>
                </View>
                <View style={styles.seperator}></View>
                <View style={styles.footer}>
                    
                    
                    
                    
                    <TouchableHighlight style = {styles.filterIcon}>
                        <IonIcon name="ios-information-circle-outline" size={25} color={Colors.LineWhite} />
                    </TouchableHighlight>
                    <TouchableHighlight style = {styles.filterIcon}>
                        <EntypoIcon name="share" size={25} color={Colors.LineWhite} />
                    </TouchableHighlight>
                    <TouchableHighlight style = {styles.filterIcon}>
                        <MaterialIcon name="chat" size={25} color={Colors.LineWhite} />
                    </TouchableHighlight>
                    <TouchableHighlight style = {styles.filterIcon}>
                        <MaterialIcon name="favorite" size={25} color={Colors.LineWhite} />
                    </TouchableHighlight>
                    <TouchableHighlight style = {styles.filterIcon}>
                        <MaterialIcon name="add-shopping-cart" size={25} color={Colors.LineWhite} />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
        

        

    )

}

const styles = StyleSheet.create ({

    productView: {
        width: Dimensions.get('window').width - 40,
        backgroundColor: Colors.ProductGreen,
        margin: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        shadowColor: Colors.DarkGrey,
        shadowOpacity: 0.6,
        shadowRadius: 4,
        shadowOffset: {width:0, height: 0},
        elevation: 1,
        justifyContent:'space-between',
        borderRadius: 4,
    },
    product: {
        borderRadius: 4,
        overflow: 'hidden',
        position: 'relative',
        zIndex: 3,
    },
    imageView: {
        height: 180,
    },
    image: {
        height: 180,
        justifyContent: 'center',
        resizeMode: 'cover',
    },
    sliderButtons: {
        width: Dimensions.get('window').width / 3,
        flexDirection: 'row',
        position: 'absolute',
        bottom: -150,
        left: 20,
        zIndex: 6,

    },
    slideButton: {
        width: 12,
        height: 12,
        marginRight: 5,
        justifyContent:'space-between',
        borderRadius: 12,
        backgroundColor: Colors.White,
        color: Colors.White,
        position: 'relative',
        borderWidth: 0.6,
        borderColor: Colors.LighterGrey,
        overflow: "hidden",

    },
    slideButtonSelected: {
        width: 12,
        height: 12,
        borderRadius: 12,
        backgroundColor: Colors.Yellow,
        color: Colors.Yellow,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    header: {
        flexDirection: 'row',
        paddingTop: 17,
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        flexDirection: 'row',
        flex: 1,
        paddingRight: 15,
    },
    titleText: {
        textAlign: 'left',
        fontSize: 19,
        lineHeight: 24,
        fontFamily: 'DIN Next LT Arabic',
        color: Colors.White
    },
    price: {
        flexDirection: 'row',
    },
    priceText: {
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'DIN Next LT Arabic',
        color: Colors.White
    },
    pieces: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    piecesText: {
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'DIN Next LT Arabic',
        color: Colors.White,
    },
    tags: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 3,
    },
    tagLabel: {
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'DIN Next LT Arabic',
        color: Colors.White,
        flexDirection: 'row',
    },
    tagsText: {
        fontSize: 13,
        lineHeight: 22,
        fontFamily: 'DIN Next LT Arabic',
        color: Colors.White,
        flexDirection: 'row',
        flex: 1,
    },
    seperator: {
        marginTop: 15,
        borderBottomColor: Colors.LineWhite,
        borderBottomWidth: 1,
    },
    footer: {
        padding: 6,
        flexDirection: 'row-reverse',
    },
    filterIcon: {
        marginRight: 6,
        color: Colors.LineWhite,
    },

})