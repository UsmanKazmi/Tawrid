import React, {Component} from 'react';
import {StyleSheet,Animated,Dimensions,ScrollView,View,StatusBar,Text,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import {Colors} from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';
import RouteProducts from '../config/RouteProducts';
import { Search } from '../components/Search';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import MyProduct from './MyProduct';
import NewProduct from './NewProduct';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: Colors.White }]} />
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: Colors.White }]} />
);
const Width =  {width: Dimensions.get('window').width}


export default class TabProducts extends Component{
  
    
  static navigationOptions = {
    header: null
    
}
    
  openNavigationDrawer = () => {
    this.props.navigation.toggleDrawer();

  }

  openGridView = () => {
    this.props.navigation.navigate('gridview');

  }
  openSearchPage = (data) => {
    alert("searchPage")
    this.props.navigation.navigate('SearchBar',data);
    console.log('SearchPage',data)

  }


    constructor(Props) {
      super(Props);
      
      this.state = {
        search: '',
        index: 0,
        isPress: false,
        routes: [
          { key: 'first', title: 'New Products' },
          { key: 'second', title: 'My Products' },
        ],
      
      }
    };
      

    _renderTabBar = props => {
  
      return (
        <TabBar
        {...props}
        scrollEnabled
        indicatorStyle={styles.indicator}
        style={styles.tabbar}
        tabStyle={styles.tab}
        labelStyle={styles.label}
      />
      );
    }


    
    // before view appear
    componentWillMount() {}    
    // when view appears
    componentDidMount() {}
  
    render() {
      return (
          <View style={styles.container}>
              <StatusBar barStyle="light-content"/>



              
        
            <View style={{backgroundColor:Colors.White}}>
              <View style={styles.searchField}>
                  <Icon name="ios-search"
                      style={{ padding: 10 }}
                      size={25}
                  />

                  <TextInput
                      editable={this.state.textEdit}
                      autoCapitalize="none"
                      maxLength={34}
                      autoCorrect={false}
                      // returnKeyType="Search"
                      underlineColorAndroid="transparent"
                      keyboardAppearance="light"
                      placeholder={'Search'}
                      placeholderTextColor={Colors.LightGrey}
                      style={styles.searchBox}
                      onSubmitEditing={() => {this.openSearchPage(this.state.search)}}
                      blurOnSubmit={false}
                      value={this.state.search}
                      onFocus={this.changeStatus}
                      onChangeText={(search) => this.setState({ search })}
                  />
                  </View>
                </View>
              <View>




              </View>
              <View style={{flex:1,width:100+'%'}}>

              <TabView
          
                  navigationState={this.state}
                        renderScene={SceneMap({
                          first: NewProduct,
                          second: MyProduct,
                        })}
                  onIndexChange={index => this.setState({ index })}
                  renderTabBar={this._renderTabBar}
                  initialLayout={{ width: Dimensions.get('window').width }}
                  indicatorStyle={{
                    backgroundColor:Colors.white
                  }}
                  useNativeDriver
            />
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
    scene: {
      flex: 1,
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
      backgroundColor: Colors.LighterGrey,
      borderRadius: 10,
      marginHorizontal: 20,
      // paddingHorizontal:30
  },
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
    container: {
      flex: 1,
    },
    tabbar: {
      backgroundColor: Colors.White,
    },
    tab: {
      color: Colors.Yellow,

      width: Width.width/2,
    },
    indicator: {
      backgroundColor: Colors.Green,
    },
    label: {
      color: Colors.Grey,
      fontWeight: '500',
    },
  });
  