
import React, { Component } from 'react';
import { StyleSheet, ScrollView, View,} from 'react-native';
import { CardActiveOrders } from '../components/CardActiveOrders';
import { connect } from 'react-redux';
import Action from '../Store/ActionCenter';

class ActiveOrders extends Component {
    
    UNSAFE_componentWillMount(){
        this.props.getOrderList();
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.mainView}>
                    {   this.props.data ?
                            this.props.data.map((data, index)=> {
                            return (
                                <CardActiveOrders data={data} key={index}/>
                            )
                        }) : null
                    } 
                    {/* <CardActiveOrders />
                    <CardActiveOrders /> */}
                </View>
            </ScrollView>
        )
    }
}

function mapStateToProps(state){
    return {
        data: state.OrderReducer.data
    }
}
function mapDispatchToProps(dispatch){
    return {
        getOrderList: () => {
            return dispatch(Action.getOrdersDataAct())
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrders)

const styles = StyleSheet.create({
    mainView: {
        height: 100 + '%',
        width: 100 + '%',
        flex: 1,
        flexDirection: 'column'
    },
})