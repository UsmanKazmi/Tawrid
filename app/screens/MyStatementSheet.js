import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  FlatList,
  View
} from 'react-native';
import { StatementItem } from '../components/StatementItem';
import { Search } from '../components/Search';
import { connect } from 'react-redux';
import Action from '../Store/ActionCenter';

class MyStatementSheet extends Component {
    static navigationOptions = {
      title: 'My Statement',
    };

    UNSAFE_componentWillMount(){
      let statementData= {
        type: 'user',
        id: 29,
        balance: {"3": '76387.536'},
        offset: 10
      }
      this.props.showBalance(statementData);
    }

    loadItems(){
      dropdown_items = [];

      for(let i=0;i<10; i++){
        //var lang = this.state.lang_values[i];
        dropdown_items.push(
          <StatementItem key={"key_" + i} text="Hello world" />
        );
      }

      return dropdown_items;
    }

    constructor(){
        super();
        this.state = {
            "values" : [
                {price : '$ 203.90', id: '220', track_no: '198345(3534/-3)', price_2: '$2339.16', type: 'TO', date: '2018-07-31', status: 'Awaiting Documents'},
                {price : '$ 103.90', id: '120', track_no: '198345(3534/-3)', price_2: '$35039.16', type: 'FROM', date: '2018-07-31', status: 'Awaiting Documents'},
                {price : '$ 2303.90', id: '430', track_no: '198345(3534/-3)', price_2: '$0239.16', type: 'TO', date: '2018-07-31', status: 'Checking Accounts'},
                {price : '$ 563.90', id: '560', track_no: '198345(3534/-3)', price_2: '$6539.16', type: 'TO', date: '2018-07-31', status: 'Awaiting Documents'},
                {price : '$ 873.90', id: '880', track_no: '198345(3534/-3)', price_2: '$6739.16', type: 'FROM', date: '2018-07-31', status: 'Awaiting Documents'},
                {price : '$ 8903.90', id: '920', track_no: '198345(3534/-3)', price_2: '$839.16', type: 'TO', date: '2018-07-31', status: 'Checking Accounts'},
                {price : '$ 4503.90', id: '700', track_no: '198345(3534/-3)', price_2: '$2039.16', type: 'TO', date: '2018-07-31', status: 'Awaiting Documents'},
              ]
        }
        
    }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.parent}>
            <Search/> 
        
                <View style={{flexDirection: 'row', padding: 30}}>

                  <View style={{ justifyContent:'flex-start',flex:1}}> 

                    <View style={styles.horizontal_label}>
                      <Text> +Value</Text>
                      <Text style={styles.label_blue}> $ 2053.50</Text>
                    </View> 

                    <View style={styles.horizontal_label}>
                      <Text> -Value</Text>
                      <Text style={styles.label_pink}> $ 1345.16</Text>
                    </View>

                  </View>

                  <View style={{alignSelf:'center'}}>
                  <View style={{flexDirection:'row'}}> 
                      <Text style={{justifyContent:'center',alignItems:'center'}}>Total</Text>
                      <Text style={styles.label_orange}> $ 2349.70</Text>
                    </View>
                  </View>
                </View>

                <View style={{backgroundColor:'#E3E3E3', width:100+"%", height:1}}/>

                <FlatList 
                    style={{marginTop:30}}
                    data={this.state.values}
                    renderItem = {({item}) => <StatementItem id={" " +item.id} price_2={item.price_2} track_no={item.track_no} type={item.type} date={item.price} status={item.price} price={item.price} />}
                />
        </View>
      );
    }
  }
  function mapStateToProps(state){
    return {

    }
  }
  function mapDispatchToProps(dispatch){
    return {
      showBalance: (data) => {
        return dispatch(Action.showBalanceAct(data))
      } 
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(MyStatementSheet)

  const styles = StyleSheet.create({
    parent: {
      flex: 1,
      backgroundColor: '#ffffff',
    },

    horizontal_container: {
      flexDirection: 'row',
      width: 100+"%",
      justifyContent: 'space-between',
      alignItems: 'stretch',
    },

    horizontal_label: {
        flexDirection: 'row',
    },

    label_blue: {
      color: '#4ED9E8',
      fontSize: 15,
  },

  label_orange: {
    color: '#EEB808',
    fontSize: 15,
  },

  label_pink: {
    color: '#FF90B8',
    fontSize: 15,
  },

  });