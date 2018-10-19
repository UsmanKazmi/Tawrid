import React,{Component} from 'react'
import {StyleSheet,Animated,Dimensions,ScrollView,View,StatusBar,Text,TouchableHighlight,TouchableOpacity,TextInput} from 'react-native';
import {Colors} from '../helpers/Helpers';
import Icon from 'react-native-vector-icons/Ionicons';


export class Search extends Component {
    constructor(Props) {
        super(Props);
        
        this.state = {
          search: '',
          index: 0,
        
        }
      };
    render(){

        

        return (

                <View style={styles.searchBox}>

                                <View style={styles.searchField}>

                                    <Icon name="ios-search"
                                            style={{ padding: 10}}
                                            size={25} 
                                            color={Colors.DarkGrey} 
                                        />

                                    <TextInput 
                                            editable={this.state.textEdit} 
                                            autoCapitalize = "none" 
                                            maxLength={34} 
                                            autoCorrect={false} 
                                            returnKeyType="search" 
                                            underlineColorAndroid="transparent"  
                                            keyboardAppearance="light"
                                            placeholder={this.props.placeholder} 
                                            placeholderTextColor={Colors.LightGrey} 
                                            style={styles.searchBox} 
                                            onSubmitEditing={()=>{}} 
                                            blurOnSubmit={false} 
                                            value={this.state.search} 
                                            onChangeText={(search) => this.setState({search})} 
                                    />
                                </View>
                        </View>
        )
        }
}

   const styles =  StyleSheet.create({

    searchBox: {
        marginBottom: 20,
      },
      searchField: {
        flexDirection:'row',
        height: 44,
        width: Dimensions.get('window').width -40,
        backgroundColor:Colors.LighterGrey,
        fontFamily: 'DIN Next LT Arabic',
        fontSize: 17,
        color: Colors.DarkGrey,
        borderRadius: 10,
    
      },

      searchBox: {
   
        width: Dimensions.get('window').width -40,

    }
   })
