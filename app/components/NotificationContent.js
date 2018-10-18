import React, {Component} from 'react';
import {StyleSheet, Platform, View, Text, Image} from 'react-native';
import Swipeout from 'react-native-swipeout';
import AddIcon from 'react-native-vector-icons/Ionicons';
import CardImage from '../../assets/images/kitty.jpeg';

export default class NotificationContent extends Component {
    render () {
        const swipeoutBtns = [
            {
              text: <AddIcon name="md-trash" size={40} color='red' 
              style={{height: 100, width: '90%', borderBottomLeftRadius: 5, 
              borderBottomRightRadius: 5, borderTopLeftRadius: 5, elevation: 1, borderTopRightRadius: 5, textAlign: 'center', textAlignVertical: 'center' }}/>,
              backgroundColor: 'transparent',
           }
        ]

        return (
            <View> 
                <Swipeout right={swipeoutBtns} style={{backgroundColor: '#fff'}} >
                    <View style={styles.SwipeToDeleteView}> 
                        <Image 
                            style={{ width: 70, height: 70 ,borderRadius: 45, marginRight: 15,marginLeft: 10}}
                            source={require('../../assets/images/kitty.jpeg')} />
                        <View style={{flex: 1}}>
                            <Text style={{marginTop: 10, margin: 0, width: '80%', fontSize: 18}}>Swipe To Delete Test </Text>
                            {/* <Text style={{textAlign: 'right', width: '30%'}}>JustNow</Text> */}
                            <Text style={{width: '100%'}} >
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor incididunt
                            </Text>
                        </View>
                    </View>
                </Swipeout>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    SwipeToDeleteView: {
        flexDirection: 'row',
        margin: 10,
        height: 100,
        elevation: 1,
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
})