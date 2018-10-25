import React,{Component} from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {ScrollView} from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';


export class ImageSlider_OrderSelected extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            customWeather: [
            { state: 'sn', stateImage: require('../../assets/images/product.jpg') },
            { state: 'sl', stateImage: require('../../assets/images/product.jpg') },
            { state: 'h', stateImage: require('../../assets/images/product.jpg') },
            { state: 't',  stateImage: require('../../assets/images/product.jpg') },
            { state: 'hr', stateImage: require('../../assets/images/product.jpg') },
            { state: 'lr',  stateImage: require('../../assets/images/kitty.jpeg') },
            { state: 's',  stateImage: require('../../assets/images/kitty.jpeg') },
            { state: 'hc',  stateImage: require('../../assets/images/kitty.jpeg') },
            { state: 'lc',  stateImage: require('../../assets/images/kitty.jpeg') },
            { state: 'c',  stateImage: require('../../assets/images/kitty.jpeg') }
            ],
          

        };
    }

    

    _renderItem({ item, index }) {
        return (
            <View style={styles.slide}>
            
              
                <Image source={item.stateImage} style={{ 
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



        return (
            <Carousel
                firstItem='1'
                ref={(c) => { this._carousel = c; }}
                data={this.state.customWeather}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                sliderHeight={sliderHeight}
                itemWidth={itemWidth}
                
            />
            
        )
  }
}

const horizontalMargin = 10;
const slideWidth = 100 ;

const sliderWidth = Dimensions.get('window').width;
const sliderHeight = Dimensions.get('window').height;

const itemWidth = sliderWidth/1.5;
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
  
