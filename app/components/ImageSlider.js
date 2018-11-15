import React, { Component } from 'react';
import { Image, View, StyleSheet, Dimensions, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';

var imagesObject = {}
var customImage = []
export class ImageSlider extends Component {


    constructor() {
        super();
        this.state = {
          
        };
    }
    _renderItem(item, index) {
        console.log('Item ', item.item)
        return (
            <View style={styles.slide} key={index}>
                <Image source={{uri:`${item.item}`}} style={{
                    backgroundColor: "#fff",
                    width: 100 + '%',
                    height: 100 + '%',
                    resizeMode: 'cover',
                    borderWidth: 1,
                    borderRadius: 7
                }} /> 
            </View>
        );
    }
    
    render() {
        return (
            <View>
                {this.props.image ?
                <Carousel
                    firstItem={1}
                    ref={(c) => { this._carousel = c; }}
                    data={this.props.image}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    sliderHeight={10}
                    itemWidth={itemWidth}
                />
                : null}
            </View>
        )
    }
}

const horizontalMargin = 10;
const slideWidth = 100;

const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;

const itemWidth = slideWidth + horizontalMargin * 4;
const itemHeight = 200;

const styles = StyleSheet.create({
    slide: {
        height: 100 + "%",
        width: 100 + '%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    image: {
        backgroundColor: "#fff",
        width: 100 + '%',
        height: 100 + '%',
        resizeMode: 'cover',
        borderWidth: 1,
        borderRadius: 7
    }
});