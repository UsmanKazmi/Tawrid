import React, { Component } from 'react'
import { ScrollView } from 'react-native';
import { Colors } from '../helpers/Helpers';
import { View } from 'react-native';
import { CardNewProduct } from '../components/CardNewProduct';
import { connect } from 'react-redux';
import Action from '../Store/ActionCenter';

class NewProduct extends Component {
    render() {
        return (
            <ScrollView >
                <View style={{ paddingBottom: 30 }}>

                    <CardNewProduct />

                    <CardNewProduct />

                    <CardNewProduct />

                    <CardNewProduct />
                </View>
            </ScrollView>
        )
    }
}
function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewProduct)


