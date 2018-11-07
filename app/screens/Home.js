import React, {Component} from 'react';
import {StyleSheet,Animated,Dimensions,ScrollView,View,StatusBar,Text,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import {Colors} from '../helpers/Helpers';
import Api, { TawridApi } from '../utilities/Api';
import Products  from '../components/Products';

const MyProducts = () => (
  
  <ScrollView>
    <Products/>
    <Products/>
    <Products/>
  </ScrollView>
  
  
);
const NewProducts = () => (
  <ScrollView>
  <Products/>
  <Products/>
  <Products/>
</ScrollView>

);

export default class Home extends Component {
  
  constructor(Props) {
    super(Props);
    this.state = {
      search: '',
      index: 0,
    
    }
  };  
  // before view appear
  componentWillMount() {}
  
  // when view appears
  componentDidMount() {

  }


  render() {
    
    
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.searchBox}>
              <TextInput editable={this.state.textEdit} autoCapitalize = "none" maxLength={34} 
              autoCorrect={false} returnKeyType="search" underlineColorAndroid="transparent"  
              keyboardAppearance="light" placeholder="Search Products..." 
              placeholderTextColor={Colors.LightGrey} style={styles.searchField} 
              onSubmitEditing={()=>{}} blurOnSubmit={false} 
              value={this.state.search} onChangeText={(search) => this.setState({search})} />
            </View>
            <View style={{backgroundColor:Colors.LightestGrey, flex:1}}>
            </View>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    flex: 1,
    alignItems: 'center',
  },
  tabBar: {
    flexDirection:'row',
    backgroundColor: Colors.White,
    borderBottomColor: Colors.DarkGrey,
    borderBottomWidth: 1,
  },
  tabFont: {
    fontSize: 15,
    fontFamily: 'DIN Next LT Arabic',
    // textTransform: 'uppercase',
    width: Dimensions.get('window').width/2,
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
  navBarButtons: {
    flexDirection: 'row',
  },
  filterIcon: {
    marginRight: 5,
  },
  searchBox: {
    marginBottom: 20,
  },
  searchField: {
    height: 44,
    width: Dimensions.get('window').width -40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor:Colors.LighterGrey,
    fontFamily: 'DIN Next LT Arabic',
    fontSize: 17,
    color: Colors.DarkGrey,
    borderRadius: 10,

  }


});
