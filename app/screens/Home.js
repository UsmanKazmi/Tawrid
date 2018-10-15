import React, {Component} from 'react';
import {StyleSheet,Animated,Dimensions,ScrollView,View,StatusBar,Text,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import {Colors} from '../helpers/Helpers';
import Api, { TawridApi } from '../utilities/Api';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { ListItem } from 'react-native-elements';
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

export default class Home extends Component<Props> {
  

    

  constructor(Props) {
    super(Props);
    this.state = {
      search: '',
      index: 0,
    
    }
  };


  // _renderTabBar = props => {
  //   const inputRange = props.navigationState.routes.map((x, i) => i);

  //   return (
  //     <View style={styles.tabBar}>
  //       {props.navigationState.routes.map((route, i) => {
  //         const color = props.position.interpolate({
  //           inputRange,
  //           outputRange: inputRange.map(
  //             inputIndex => (inputIndex === i ? Colors.White : Colors.DarkGrey)
  //           ),
  //         });
  //         const backgroundColor = props.position.interpolate({
  //           inputRange,
  //           outputRange: inputRange.map(
  //             inputIndex => (inputIndex === i ? Colors.Green : Colors.White)
  //           ),
  //         });
  //         return (
            
  //             <TouchableOpacity
  //               style={styles.tabItem}
  //               onPress={() => this.setState({ index: i })}>
  //               <Animated.Text  style={[styles.tabFont, { color }, {backgroundColor}]}>{route.title}</Animated.Text>
  //             </TouchableOpacity>
            
  //         );
  //       })}
  //       </View>
  //   );
  // };


  
  // before view appear
  componentWillMount() {}
  
  // when view appears
  componentDidMount() {

  }


  render() {
    
    
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.navBar}>
                <View style={styles.navBarTitle}>
                  <Text style={styles.navBarText}>{this.props.title}</Text>
                </View>
                <View style={styles.navBarButtons}>
                  <TouchableHighlight style = {styles.filterIcon}>
                    <Icon name="ios-funnel" size={25} color={Colors.DarkGrey} />
                  </TouchableHighlight>
                  <TouchableHighlight>
                    <Icon name="ios-settings" size={25} color={Colors.DarkGrey} />
                  </TouchableHighlight>
                </View>
            </View>

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
