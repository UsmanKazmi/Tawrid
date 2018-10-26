import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import SearchProduct from './SearchProduct';


export default class SearchResult extends Component {
    render() {
        return(
            <View>
                <View>
                    <SearchProduct />                    
                </View>
            </View>
        )
    }
}