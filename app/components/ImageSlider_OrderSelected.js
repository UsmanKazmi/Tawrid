import React, { Component } from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { ScrollView } from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export class ImageSlider_OrderSelected extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customWeather: []
        };
    }
    componentDidMount(data) {
        let images = []
        let dataFromParams = []
        dataFromParams.push(this.props.image)
        dataFromParams.forEach(element => {
            images.push(element[9394])
            images.push(element[9395])
            images.push(element[9396])
            images.push(element[9397])
            images.push(element[9398])
        });
        // this.setState({images: images.push(dataFromParams.image_secondary)})
        console.log('DATA HAS COME into IMAGE SLIDER ', images)
        this.setState({customWeather: images})
    }

    _renderItem(item, index) {
        console.log('Item ', item.item)
        return (
            <View style={styles.slide} key={index}>
                <Image source={{uri: `${item}`}} style={styles.imageStyle} />
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
                        data={this.state.customWeather}
                        renderItem={this._renderItem}
                        sliderWidth={sliderWidth}
                        sliderHeight={sliderHeight}
                        itemWidth={itemWidth}
                    />
                    : null}

            </View>
        )
    }
}

const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;

const itemWidth = sliderWidth / 1.5;
const itemHeight = 200;

const styles = StyleSheet.create({
    slide: {
        height: 100 + "%",
        width: 100 + '%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    imageStyle: {
        backgroundColor: "#fff",
        width: 100 + '%',
        height: 100 + '%',
        resizeMode: 'cover',
        borderWidth: 1,
        borderRadius: 7
    }
});

