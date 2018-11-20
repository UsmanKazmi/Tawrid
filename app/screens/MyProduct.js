import React, { Component } from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { View } from 'react-native';
import CardMyProduct from '../components/CardMyProduct';
import { TawridApi } from  '../utilities/Api';
import Loader from '../components/Loader';
import { _retrieveData, Colors } from '../helpers/Helpers';

export default class MyProduct extends Component {
    constructor(){
        super();
        this.state = {
            response: [],
            loading: true
        }
    }
    
    UNSAFE_componentWillMount(){
        TawridApi.getMyProduct().then(value => {
            console.log('my product ', value.data)
            this.setState({
                response: value.data,
                loading: false
            })
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.mainView}>
                    {
                        this.state.response ? 
                            <CardMyProduct data={this.state.response}/>
                            : 
                            <Loader style={styles.loadingAnimation} loading={this.state.loading} 
                            color={'#000'} size={'large'}  
                            height={100} width={200} />
                    }
                </View>
            </ScrollView>
        )
    }
}
 
const styles = StyleSheet.create({
    mainView: { 
        paddingBottom: 30, 
        backgroundColor:Colors.White 
    }
})

