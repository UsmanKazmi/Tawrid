import React, {Component} from 'react';
import { View, ScrollView } from 'react-native';
import SearchProduct from './SearchProduct';
import SearchOrder from './SearchOrder';
import { Colors } from '../helpers/Helpers';

export default class SearchResult extends Component {
    render() {
        return(
                <ScrollView>
            <View>
                    <View style={{paddingBottom: 0,backgroundColor:Colors.White}}>
                        <SearchProduct />                    
                    </View>
                    <View>
                        <SearchOrder />
                    </View>
            </View>
                </ScrollView>
        )
    }
}