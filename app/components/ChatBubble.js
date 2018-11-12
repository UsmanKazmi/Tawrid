import React, { Component } from 'react';
import { Colors } from '../helpers/Helpers';
import { Image, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const { height } = Dimensions.get('window')

export class ChatBubble extends Component {
    render() {
        return (
            <Text style={{
                borderWidth: 1,
                borderColor: Colors.LighterGrey,
                width: Dimensions.get('window').width / 1.5,
                paddingHorizontal: 20,
                paddingVertical: 20,
                borderRadius: 5,
                backgroundColor: this.props.backgroundColor,
                color: this.props.color,
            }}>
                {this.props.chatText}
            </Text>
        );
    }
}