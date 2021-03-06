import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import { View, alert } from 'react-native';
import CardNewProduct from '../components/CardNewProduct';
import { TawridApi } from  '../utilities/Api';
import { _retrieveData, Colors } from '../helpers/Helpers';


class NewProduct extends Component {
    constructor(){
        super();
        this.state = {
            response: [],
            img: []
        }
    }
    
    UNSAFE_componentWillMount(){
        TawridApi.getNewProduct().then(value => {
            let abc = []
            let img = []
            img.push(value.data.image_secondary)
            abc.push(value.data)
            // console.log('as ', abc)
            this.setState({
                response: value.data,
                img
            })
        })
    }

    render() {
        return (
            <ScrollView >
                <View style={{ paddingBottom: 30,backgroundColor:Colors.White }}>
                    {this.state.response ? 
                        <CardNewProduct data={[this.state.response, this.state.img]}/>
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


