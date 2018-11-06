import React, { Component } from 'react'
import { StyleSheet, Animated, Dimensions, ScrollView, View, StatusBar, Text, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchTags from './SearchTags';

export class Search extends Component {
    constructor(Props) {
        super(Props);

        this.state = {
            search: '',
            index: 0,
            isPress: false
        }
    };



    
    changeStatus = () => {
        this.setState({
            isPress: !this.state.isPress
        })
    }

    closeSearch = () => {
        this.setState({
            isPress: !this.state.isPress
        })
    }

    render() {
        return (
            <View style={styles.searchBox}>
                {
                    this.state.isPress ? 
                <View style={{flexDirection: 'row', justifyContent: 'space-between', height: 50, marginVertical: 10, marginHorizontal: 20}}>
                    <Text style={{fontWeight: 'bold', }}>Reset</Text>
                    <Text style={{fontWeight: 'bold', }}>Filter</Text>
                    <Icon name='ios-close-circle-outline' size={22} 
                    onPress={this.closeSearch}
                    />              
                </View>
                : null
                }
                <View style={styles.searchField}>
                    <Icon name="ios-search"
                        style={{ padding: 10 }}
                        size={25}
                        color={Colors.DarkGrey}
                    />

                    <TextInput
                        editable={this.state.textEdit}
                        autoCapitalize="none"
                        maxLength={34}
                        autoCorrect={false}
                        returnKeyType="search"
                        underlineColorAndroid="transparent"
                        keyboardAppearance="light"
                        placeholder={this.props.placeholder}
                        placeholderTextColor={Colors.LightGrey}
                        style={styles.searchBox}
                        onSubmitEditing={() => { }}
                        blurOnSubmit={false}
                        value={this.state.search}
                        onFocus={this.changeStatus}
                        onChangeText={(search) => this.setState({ search })}
                    />
                </View>
                {
                    this.state.isPress ? 
                <View>
                    <SearchTags />
                </View>: 
                    null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({

    searchBox: {
        width:100 +'%',
    },
    searchField: {
        flexDirection: 'row',
        height: 44,
        width: Dimensions.get('window').width - 40,
        backgroundColor: Colors.LighterGrey,
        borderRadius: 10,
        marginHorizontal: 20
    },
})
