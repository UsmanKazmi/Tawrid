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


export class CardActiveOrders extends Component {
    render(){
        return(
                <View style={styles.mainView}>
                    <View style={styles.imageSliderView}>
                        <ImageSlider/>
                    </View>


                    <View style={styles.textView}>
                        <Text style={styles.orderText}>
                        Order:102030
                        </Text>

                        <Text style={styles.priceText}>
                        $3017.4
                        </Text>

                       <Icon name="ios-funnel" style={{}} size={20} color={Colors.Yellow} />

                    
                    </View>

                    <View style={styles.shippingView}>
                        <Icon name="ios-funnel" style={{}} size={20}  />
                        <Text style={styles.shippingText}>
                            Shipping:N/A
                        </Text>

                      

                    
                    </View>
               

                    <View style={{ flexDirection: 'row'}}>
                        <SliderRange/>
                </View>


                        <View style={styles.chatView}>
                            <Icon name="ios-chat" style={{}} size={15} color={Colors.Green} />
                            <Text style={styles.chatText}>
                                Chat Now
                            </Text>

                            <Text style={styles.requiredText}>
                                Required Price Offer
                            </Text>

                  
                            
                
                    </View>

                </View>
            


        )
    }
}


const styles = StyleSheet.create({
 
mainView: {
    borderWidth:2,
    borderColor:Colors.LighterGrey,
    borderRadius:5,
    width:90+ '%',
    height:250,
    marginStart:20,
    marginEnd:20,
    marginBottom:10,
    marginTop:10


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

