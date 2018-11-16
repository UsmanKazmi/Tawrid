import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import { View, alert } from 'react-native';
import CardNewProduct from '../components/CardNewProduct';
import { TawridApi } from  '../utilities/Api';
import { _retrieveData, Colors } from '../helpers/Helpers';
import Loader from '../components/Loader';

class NewProduct extends Component {
    constructor(){
        super();
        this.state = {
            response: [],
            img: [],
            loading: false
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
                img,
                loading: false
            })
        })
    }

    render() {
        return (
            <ScrollView >
                <View style={{ paddingBottom: 30,backgroundColor:Colors.White }}>
                    {this.state.response ? 
                        <CardNewProduct data={[this.state.response, this.state.img]}/>
                        : 
                        <Loader style={styles.loadingAnimation} loading={this.state.loading} 
                        color={Colors.Green} size={'medium'} position={'absolute'} float={'right'} 
                        height={48} width={284} />
                    }
                </View>
            </ScrollView>
        )
    }
}
export default NewProduct


