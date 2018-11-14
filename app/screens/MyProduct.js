import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import { View, alert } from 'react-native';
import CardMyProduct from '../components/CardMyProduct';
import { TawridApi } from  '../utilities/Api';
import { _retrieveData, Colors } from '../helpers/Helpers';

export default class MyProduct extends Component {
    constructor(){
        super();
        this.state = {
            response: [],
        }
    }
    
    UNSAFE_componentWillMount(){
        TawridApi.getMyProduct().then(value => {
            // console.log('my ', value.data)
            this.setState({
                response: value.data,
            })
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={{ paddingBottom: 30,backgroundColor:Colors.White }}>
                    {
                        this.state.response ? 
                            <CardMyProduct data={this.state.response}/>
                        : 
                            null
                    }
                </View>
            </ScrollView>
        )
    }
}
 


