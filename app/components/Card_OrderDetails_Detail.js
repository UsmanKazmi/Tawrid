import React,{Component} from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import {ScrollView} from 'react-native';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';
import { ImageSlider } from './ImageSlider';
import { SliderRange } from './SliderRange';
import RangeSlider from 'react-native-range-slider'


export class Card_OrderDetails_Detail extends Component {
    render(){
        alert(screenHeight)
        return(
                <View style={styles.mainView}>
                        <Image
                            style={{ 
                                resizeMode:'contain',
                                height:100,
                                width:100,               
                                }}
                                source={require('../../assets/images/product.jpg')}
                         />
                </View>
            


        )
    }
}

const screenHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
 
mainView: {
    borderWidth:2,
    borderColor:Colors.LighterGrey,
    borderRadius:5,
 


},
textView:{
    marginTop:20,
    marginRight:10,
    marginLeft:10,


    flexDirection:'row',
    
},
orderText:{
    
    fontWeight:'bold',
    textAlign:'left'
},
priceText:{
    flex:1,
    fontWeight:'bold',

    textAlign:'right'

},
shippingText:{
    marginLeft:5,

    fontSize:11,
    textAlign:'left'
},
shippingView:{
    marginBottom:1,
    marginRight:10,
    marginLeft:10,
    flexDirection:'row',
},
chatView:{
    marginBottom:10,
    marginRight:10,
    marginLeft:10,
    flexDirection:'row',
},
chatText:{
    fontSize:12,
    textAlign:'left',
    color:Colors.Green
},
requiredText:{
    color:'red',
    fontSize:10,
    flex:1,
    textAlign:'right'
},
imageSliderView:{
    marginTop:10,
    flex:1
}


      

    
   
});

