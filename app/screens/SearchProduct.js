import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Colors } from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Entypo';

export default class SearchProduct extends Component {
    render() {
        return (
            <View style={{flex: 1,backgroundColor:Colors.White}}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <View style={styles.Header}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 20 }}> Products </Text>
                    </View>
                    <View style={styles.body}>
                        <Image source={require('../../assets/images/product.jpg')} style={styles.imageStyle} />
                        <Text style={styles.bodyText}> 30 CM. Crockery Set </Text>
                    </View>
                    <View style={styles.body}>
                        <Image source={require('../../assets/images/product.jpg')} style={styles.imageStyle} />
                        <Text style={styles.bodyText}> 30 CM. Crockery Set </Text>
                    </View>
                    <View style={styles.body}>
                        <Image source={require('../../assets/images/product.jpg')} style={styles.imageStyle} />
                        <Text style={styles.bodyText}> 30 CM. Crockery Set </Text>
                    </View>
                    <View style={styles.body}>
                        <Image source={require('../../assets/images/product.jpg')} style={styles.imageStyle} />
                        <Text style={styles.bodyText}> 30 CM. Crockery Set </Text>
                    </View>
                    <View style={styles.viewAllBtnView}>
                        <TouchableOpacity style={styles.viewAllBtn}>
                            <Text>View All</Text>
                            <Icon name="chevron-right" size={20} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Header: {
        borderBottomWidth: 0.5,
        height: 50,
        justifyContent: 'center',
        borderBottomColor: Colors.LightestGrey,
        borderTopColor: Colors.LightestGrey,
        borderTopWidth: 0.5,
        marginTop: 20,
    },
    body: {
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
        marginTop: 15,
        height: 100,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.LightestGrey
    },
    imageStyle: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    bodyText: {
        paddingLeft: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewAllBtnView: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        marginBottom: 15,
        borderBottomColor: Colors.LightestGrey,
        borderTopColor: Colors.LightestGrey,
    },
    viewAllBtn: {
        flexDirection: 'row',
        backgroundColor: Colors.White,
    },
})