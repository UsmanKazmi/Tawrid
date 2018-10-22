import React,{Component} from 'react'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

import { Image, Text, View, StyleSheet,TouchableOpacity,Dimensions } from 'react-native';

import Slider from "react-native-slider";


export class SliderRange extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            sliderValue: 0.2



        };
    }

   
  


    render(){



        return (
            <View style={styles.container}>
            <Slider
              value={this.state.value}
              trackStyle={{
                backgroundColor:'grey',
                color:'green'
              }}

        
            minimumTrackTintColor='red'

              thumbStyle={{
                backgroundColor:'red',
                color:'blue'
              }}
              onValueChange={value => this.setState({ value })}

            />
          
          </View>
            
        )
  }
}



const styles = StyleSheet.create({
 
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center"
      },
      trackStyle: {
          color:'red'
      }
   
    
   
  });
  