import React, {Component} from 'react';
import {StyleSheet, Platform, View, Dimensions, Text} from 'react-native';
import NotificationContent from '../components/NotificationContent';
import { Colors } from '../helpers/Helpers';

const {height} = Dimensions.get('window');

export default class Notification extends Component {
    render () {
        return (
            <View>
                <View>
                    <View style={{paddingHorizontal: height/30,paddingTop: height/50,paddingBottom: height/80, backgroundColor: Colors.White}}> 
                        <Text style={{fontWeight:'bold', fontSize: 16}}> Today </Text>
                    </View>
                    <View>
                        <NotificationContent />
                    </View>
                    <View>
                        <NotificationContent />
                    </View>
                    <View>
                        <NotificationContent />
                    </View>
                    <View>
                        <NotificationContent />
                    </View>
                </View>
            </View>
        )
    }
}