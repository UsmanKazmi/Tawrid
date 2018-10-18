import React, {Component} from 'react';
import {StyleSheet, Platform, View, StatusBar, Text, Colors} from 'react-native';
import NotificationContent from '../components/NotificationContent';

export default class Notification extends Component {
    render () {
        return (
            <View>
                <View style={{alignItems: 'center', height: 60, borderBottomWidth: 1, justifyContent: 'center'}}>
                    <Text> Notification </Text>
                </View>
                <View>
                    <Text> Today </Text>
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