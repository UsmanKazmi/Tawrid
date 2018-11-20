import React, { Component } from 'react'
import { StyleSheet, Animated, Dimensions, ScrollView, View, StatusBar, Text, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchTags from './SearchTags';
import { TawridApi } from '../utilities/Api';
import {connect} from 'react-redux';
import Action from '../Store/ActionCenter';

class Search extends Component {
    constructor(Props) {
        super(Props);
        this.state = {
            index: 0,
            isPress: false,
            response: [],
            result: []
        }
    };

    // searchFilter(text) {
    //     let search = text.toLowerCase();
    //     this.setState({
    //         result: this.state.response.filter(obj => obj.name.toLowerCase().includes(search))
    //     });
    // }
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

    onSubmitEdit = () => {
        this.props.search(this.state.search)
        this.props.navigation.navigate('SearchTags')
    }

    render() {
        return (
                // <View style={styles.searchBox}>
                //     {
                //         this.state.isPress ?
                //             <View style={styles.head}>
                //                 <Text style={{ fontWeight: 'bold', }}>Reset</Text>
                //                 <Text style={{ fontWeight: 'bold', }}>Filter</Text>
                //                 <Icon name='ios-close-circle-outline' size={22}
                //                     onPress={this.closeSearch}
                //                 />
                //             </View>
                //             : null
                //     }
                    <View style={styles.searchField} >
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
                            blurOnSubmit={false}
                            onSubmitEditing={this.onSubmitEdit}
                            value={this.state.search}
                            onFocus={this.changeStatus}
                            onChangeText={(search) => this.setState({search})}
                        />
                    </View>
                    // {
                    //     this.state.isPress ?
                    //         <View>
                    //             <SearchTags />
                    //         </View> :
                    //         null
                    // } 
                // </View>
        )
    }
}
function mapStateToProps(state){
    return {}
}
function mapDispatchToProps(dispatch){
    return {
        search: (txt)=> {
            return dispatch(Action.searchAct(txt))
        }
    }   
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        marginVertical: 10,
        marginHorizontal: 20
    },
    searchBox: {
        width: 100 + '%',
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
