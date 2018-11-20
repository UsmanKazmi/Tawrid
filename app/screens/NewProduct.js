import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { View } from 'react-native';
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
            loading: true
        }
    }
    
    UNSAFE_componentWillMount(){
        TawridApi.getNewProduct().then(value => {
            let abc = []
            let img = []
            img.push(value.data.image_secondary)
            abc.push(value.data)
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
                <View style={styles.mainView}>
                    {this.state.loading ? 
                        <Loader style={styles.loadingAnimation} loading={this.state.loading} 
                        color={'#000'} size={'large'}  
                        height={200} width={200} />
                        :
                        <CardNewProduct data={[this.state.response, this.state.img]}/>
                    }
                </View>
            </ScrollView>
        )
    }
}
export default NewProduct


const styles = StyleSheet.create({
    mainView: { 
        paddingBottom: 30, 
        backgroundColor:Colors.White 
    }
})