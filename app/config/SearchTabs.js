import React, { Component } from "react";
import SearchOrder from '../screens/SearchOrder';
import SearchProduct from '../screens/SearchProduct';
import SearchResult from '../screens/SearchResult';
import SearchStatement from '../screens/SearchStatement';
import { TabNavigator } from 'react-navigation';
import { Colors } from '../helpers/Helpers';


const SearchTabs = TabNavigator({
    All: {
        screen: SearchResult,
        tabBarOptions: {
            tabStyle: {
                 width: 30 //Padding 0 here
            },
    }
},
    Products: {
        screen: SearchProduct
    },
    Orders: {
        screen: SearchOrder
    },
    Statement: {
        screen: SearchStatement
    }
},
    {
        tabBarOptions: {
            labelStyle: { 
                fontSize: 10,
                fontWeight:'bold',
                justifyContent:'center',
                alignItems:'center'
                },
            indicatorStyle: {
                backgroundColor: Colors.White,
                borderBottomWidth:2,
                borderBottomColor:Colors.Green,
    
            },
            backgroundColor: Colors.White,
            activeTintColor: Colors.Green,
            inactiveTintColor: 'grey',
            pressColor: 'white',
            
            style: {
                backgroundColor: Colors.White,
            }
        }
    }
)
function mapStateToProps(state){
    return {}
}
function mapDispatchToProps(dispatch){
    return {
        search: (txt)=> {
            return dispatch(Action.searchAct(txt))
        }
    }   
}
export default class SearchBar extends Component {
    componentDidMount(){
        const searchValue = this.props.navigation.state.params;
        console.log('searchValue', searchValue)

    }
    render() {
        return(
            <SearchTabs />
        )
    }
}