import React, { Component } from 'react';
import { AppRegistry, Animated } from 'react-native';

class Helpers extends Component {
    
};

//export Default Colors
export const Colors =  {
    Green: '#00b9b5',
    LineWhite: 'rgba(255,255,255,0.6)',
    White: '#ffffff',
    OpaqueGreen: '#02A7A3',
    DarkGrey: '#5A5859', 
    LightGrey: 'rgba(90,88,89,0.6)',
    LighterGrey: '#E4E4E5',
    ProductGreen: '#5baba9',
    LightestGrey: '#d9d9d9',
    Yellow: '#ffc200',
    LightGreen:'#5baba9',
    Grey:"#bdb2c9",
    Red: '#ff5560',
    
    
};

// export Home Animation
export const LoginAnimation = (logoOpacityAnimation,loginInputAnimation,loginAnimation,passwordInputAnimation) => {

        Animated.sequence([
            Animated.timing(logoOpacityAnimation, {
                toValue: 0.4,
                duration: 350,
                useNativeDriver: true,
            }),
            Animated.timing(logoOpacityAnimation, {
                toValue: 1,
                duration: 350,
                useNativeDriver: true,
            }),
            Animated.timing(loginInputAnimation, {
                toValue: 1,
                duration: 350,
                useNativeDriver: true,
            }),
            Animated.timing(loginAnimation, {
                toValue: 1,
                duration: 350,
                useNativeDriver: true,
            }),
            Animated.timing(passwordInputAnimation, {
                toValue: 1,
                duration: 350,
                useNativeDriver: true,
            }),
        ]).start();
        
}