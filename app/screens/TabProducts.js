import React, {Component} from 'react';
import {StyleSheet,Animated,Dimensions,ScrollView,View,StatusBar,Text,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import {Colors} from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import RouteProducts from '../config/RouteProducts';
import { Search } from '../components/Search';


export default class TabProducts extends Component{
    
  static navigationOptions = {
    header: null
    
}
    
  openNavigationDrawer = () => {
    this.props.navigation.toggleDrawer();

  }

  openGridView = () => {
    alert("asd")
    this.props.navigation.navigate('gridview');

  }
  openSearchPage = () => {
    alert("searchPage")
    this.props.navigation.navigate('searchPage');

  }


    constructor(Props) {
      super(Props);
      
      this.state = {
        search: '',
        index: 0,
        isPress: false
      
      }
    };
      
    // before view appear
    componentWillMount() {}    
    // when view appears
    componentDidMount() {}
  
    render() {
      return (
          <View style={styles.container}>
              <StatusBar barStyle="light-content"/>



              
        
              
              <View style={styles.searchField}>
                  <Icon name="ios-search"
                      style={{ padding: 10 }}
                      size={25}
                      color={Colors.DarkGrey}
                  />

                  <TextInput
                      editable={this.state.textEdit}
                      autoCapitalize="none"
                      maxLength={34}
                      autoCorrect={false}
                      returnKeyType="Search"
                      underlineColorAndroid="transparent"
                      keyboardAppearance="light"
                      placeholder={'search'}
                      placeholderTextColor={Colors.LightGrey}
                      style={styles.searchBox}
                      onSubmitEditing={() => {this.openSearchPage()}}
                      blurOnSubmit={false}
                      value={this.state.search}
                      onFocus={this.changeStatus}
                      onChangeText={(search) => this.setState({ search })}
                  />
              </View>
              <View>




              </View>
              <View style={{flex:1,width:100+'%'}}>
                <RouteProducts/>
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
    titleText: {
        flex:1,
        textAlign: 'center',
        fontSize: 15,
        // lineHeight: 24,
        fontFamily: 'DIN Next LT Arabic',
        fontWeight: 'bold',
        color: Colors.DarkGrey,


      },
      titleTextView: {
        flex:1,
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
      marginBottom: 20,
    },
    searchBox: {
      width:100 +'%',
  },
  searchField: {
      flexDirection: 'row',
      height: 44,
      width: Dimensions.get('window').width - 40,
      backgroundColor: Colors.LighterGrey,
      borderRadius: 10,
      marginHorizontal: 20
  },
    // searchField: {
    //   flexDirection:'row',
    //   height: 44,
    //   width: Dimensions.get('window').width -40,
    //   paddingLeft: 10,
    //   paddingRight: 20,
    //   backgroundColor:Colors.LighterGrey,
    //   fontFamily: 'DIN Next LT Arabic',
    //   fontSize: 17,
    //   color: Colors.DarkGrey,
    //   borderRadius: 10,
    // }
  });
  