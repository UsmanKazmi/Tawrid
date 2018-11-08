import React,{Component} from 'react';
import { Image, Text, View, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';


var imagesObject = {}
export class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customWeather: [
                { state: 'sn', stateImage: require('../../assets/images/kitty.jpeg') },
            ]
        };
    }
    _renderItem( item, index ) {
        return (
            <View style={styles.slide} key={index}>              
                <Image source={item.image} style={{ 
                    backgroundColor:"#fff",
                    width: 100 + '%' ,
                    height: 100 +  '%' ,
                    resizeMode:'cover',
                    borderWidth:1,
                    borderRadius:7
                }} />
            </View>
        );
    }
    render(){
        console.log('Image Slider ', this.props.image)
        // this.props.image.forEach(image => {
        //     imagesObject= {
        //         state: 'sn',
        //         image
        //     }
        // });
        // this.state.customWeather.push(imagesObject)
        return (
            <View>
            {this.props.image ?
                <Carousel
                    firstItem={1}
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.customWeather}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    sliderHeight={10}
                    itemWidth={itemWidth}   
                />
                : null
            }
            </View>
        )
    }
}

const horizontalMargin = 10;
const slideWidth = 100 ;

const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;

const itemWidth = slideWidth + horizontalMargin * 4;
const itemHeight = 200;

const styles = StyleSheet.create({
    slide: {
        height:100 +"%" ,
        width: 100+'%', 

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
});
  
