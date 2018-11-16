
import React, { Component } from 'react';
import { StyleSheet, ScrollView, View,} from 'react-native';
import { CardActiveOrders } from '../components/CardActiveOrders';
import { connect } from 'react-redux';
import Action from '../Store/ActionCenter';
import Loader from '../components/Loader';


class ActiveOrders extends Component {
    constructor(){
        super();
        this.state = {
            loading: false
        }
    }

    UNSAFE_componentWillMount(){
        this.props.getOrderList();
        this.setState({loading: true})
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        this.setState({loading: false})
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.mainView}>
                    {   this.state.loading ?
                            <Loader style={styles.loadingAnimation} loading={this.state.loading} 
                            color={'#000'} size={'small'}  
                            height={100} width={200} /> 
                            :
                            this.props.data.map((data, index)=> {
                                return (
                                    <CardActiveOrders data={data} key={index}/>
                                )
                            }) 
                             
                    } 
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