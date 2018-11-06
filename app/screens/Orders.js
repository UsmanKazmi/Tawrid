
import React, { Component } from 'react';
import { StyleSheet, Animated, Dimensions, ScrollView, View, StatusBar, Text, TouchableHighlight, TouchableOpacity, TextInput } from 'react-native';
import { Colors } from '../helpers/Helpers';
import RouteOrders from '../config/RouteOrders';
import { Search } from '../components/Search';
import Action from '../Store/ActionCenter';
import {connect} from 'react-redux';
import { TawridApi } from '../utilities/Api';
import { _retrieveData } from '../helpers/Helpers';

class Orders extends Component {

  constructor(Props) {
    // this.onSuccessLogin = this.onSuccessLogin.bind(this);

    super(Props);
    this.state = {
  
      loading: false,
      response: [],
    }
  }; 

  getProduct_list(){
    let collection = {
    
    }
    collection.email = 'khaled@tawrid.net';
    collection.password = '123456';

    TawridApi.getProduct_list(collection).then(value => {
      this.setState({
          response: value,
      }); 
  })

  .catch(error =>{
    this.setState({
      loading: false,
    });
    console.error(error);
  });
}

  componentDidMount(){
    this.getProduct_list();
    retrieveData('Token for Login')
    
  }

  UNSAFE_componentWillMount(){
    this.props.getOrderData();
  }

  openNavigationDrawer = () => {
    this.props.navigation.toggleDrawer();
  }
  

  render() {

    return (
      <View style={{ backgroundColor: Colors.White }}>
        <View style={styles.searchBox}>
          <Search placeholder={'My Orders'} />
        </View >
        <View style={{
          width: 100 + "%",
          height: 85 + "%"
        }}>
          <RouteOrders />
        </View>
      </View>
    )
  }
}
function mapStateToProps(state){
  return state;
}
function mapDispatchToProps(dispatch){
  return {
    getOrderData: () => {
      return dispatch(Action.getOrdersDataAct())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);


const styles = StyleSheet.create({
  newProductView: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  container: {
    backgroundColor: Colors.White,
    flex: 1,
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.White,
    borderBottomColor: Colors.DarkGrey,
    borderBottomWidth: 1,
  },
  tabFont: {
    fontSize: 15,
    fontFamily: 'DIN Next LT Arabic',
    // textTransform: 'uppercase',
    width: Dimensions.get('window').width / 2,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',

  },
  tabItem: {
    alignItems: 'center',
    flex: 1,
    borderBottomColor: Colors.DarkGrey,
    borderBottomWidth: 1,
  },
  navBar: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,

  },
  navBarTitle: {
    flexDirection: 'row',
    flex: 1,
  },
  navBarText: {
    textAlign: 'left',
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'DIN Next LT Arabic',
    fontWeight: 'bold',
    color: Colors.DarkGrey
  },
  titleText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    // lineHeight: 24,
    fontFamily: 'DIN Next LT Arabic',
    fontWeight: 'bold',
    color: Colors.DarkGrey,


  },
  titleTextView: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    // lineHeight: 24,
    fontFamily: 'DIN Next LT Arabic',
    fontWeight: 'bold',
    color: Colors.DarkGrey,


  },
  navBarButtons: {
    flexDirection: 'row',
  },
  filterIcon: {
    marginRight: 5,
  },
  searchBox: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchField: {
    flexDirection: 'row',
    height: 44,
    width: Dimensions.get('window').width - 40,
    paddingLeft: 10,
    paddingRight: 20,
    backgroundColor: Colors.LighterGrey,
    fontFamily: 'DIN Next LT Arabic',
    fontSize: 17,
    color: Colors.DarkGrey,
    borderRadius: 10,

  }

})