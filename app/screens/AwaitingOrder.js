
import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { CardActiveOrders } from '../components/CardActiveOrders';

export default class AwaitingOrder extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.mainView}>
                    <CardActiveOrders />
                    <CardActiveOrders />
                    <CardActiveOrders />
                </View>
            </ScrollView>
        )

    }
}

const styles = StyleSheet.create({
    mainView: {
        height: 100 + '%',
        width: 100 + '%',
        flex: 1,
        flexDirection: 'column'
    },
})