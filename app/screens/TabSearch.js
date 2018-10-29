import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {Search} from '../components/Search';
import SearchBar from '../config/SearchTabs';
import SearchProduct from './SearchProduct';
import {Colors} from '../helpers/Helpers';

export default class TabSearch extends Component {
    render() {
        return(
            /* for rendering search tabs*/
            <View>
                <View style={styles.header}>
                    <Search />
                    <View style={{
                        height: '100%', 
                        elevation: 1
                        }}>
                        <SearchBar />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        borderBottomColor: Colors.LightestGrey,
        borderBottomWidth: 0.5,
        marginBottom: 20,
        marginTop: 20,
    }
})