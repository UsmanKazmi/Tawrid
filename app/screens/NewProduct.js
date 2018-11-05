import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import { Colors } from '../helpers/Helpers';
import { View, alert } from 'react-native';
import { CardNewProduct } from '../components/CardNewProduct';
import { connect } from 'react-redux';
import Action from '../Store/ActionCenter';
import { TawridApi } from  '../utilities/Api';
import { _retrieveData } from '../helpers/Helpers';

class NewProduct extends Component {
    constructor(){
        super();
        this.state = {
            response: []
        }
    }
    
    UNSAFE_componentWillMount(){
        TawridApi.getNewProduct().then(value => {
            console.log('as ', value.data)
            this.setState({
                response: value.data
            })
        })

        console.log('here')
    }

    render() {
        return (
            <ScrollView >
                <View style={{ paddingBottom: 30 }}>
                    {this.state.response ? 
                        <CardNewProduct data={this.state.response}/>
                        : null
                    }
                    {/* <CardNewProduct />

                    <CardNewProduct />

                    <CardNewProduct /> */}
                </View>
            </ScrollView>
        )
    }
}
export default NewProduct


