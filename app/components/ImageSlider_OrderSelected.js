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
            customWeather: this.props.image

        };
    }
    componentDidMount(data) {
        dataFromParams = this.props.image
        // this.setState({images: images.push(dataFromParams.image_secondary)})
        console.log('DATA HAS COME into IMAGE SLIDER ', dataFromParams)

    }

    _renderItem(item, index) {
        console.log('Item ', item.item)
        return (
            <View style={styles.slide} key={index}>
                <Image source={{ uri: `${item.item}` }} style={{
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

    // iterateImages = () => {
    //     this.props.images.forEach(element => {
    //         console.log('For each ', element)
    //     });
    // }

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
});

