import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Alert, View, Dimensions, Image, TouchableWithoutFeedback, Keyboard, TouchableHighlight,Navigator, Animated, StatusBar, TextInput} from 'react-native';
import {LoginAnimation, Colors} from '../helpers/Helpers';
import Api, { TawridApi } from '../utilities/Api';
import {Actions} from 'react-native-router-flux';
import Loader from '../components/Loader';
import Toast from '../components/Toasts';

import Home from './Home';


// const DismissKeyboard = ({ children }) => (
//   <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss() }>
//     {children}
//   </TouchableWithoutFeedback>
// );

export default class Login extends Component {

  static navigationOptions = {
    header: null
    
}

  constructor(Props) {
    // this.onSuccessLogin = this.onSuccessLogin.bind(this);

    super(Props);
    this.state = {
      logoOpacityAnimation: new Animated.Value(0),
      loginInputAnimation: new Animated.Value(0),
      loginAnimation: new Animated.Value(0),
      forgetPasswordAnimation: new Animated.Value(0),
      email: '',
      password:'',
      loading: false,
      textEdit: true,
      response: [],
      forgotPassword: true,
    }
  };

  // before view appear
  componentWillMount() {}
  
  // when view appears
  componentDidMount() {
    LoginAnimation(this.state.logoOpacityAnimation,this.state.loginInputAnimation,this.state.loginAnimation,this.state.forgetPasswordAnimation);
  }


  forgotPasswordMethod() {
    this.setState({forgotPassword: true})
  }

  signIn() {

    this.state.email="khaled@tawrid.net";
    this.state.password="123456";

    let emailSubmit= false;
    let passwordSubmit= false;

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    let reg = new RegExp(regex);
    
    if (this.state.email) {
      if (this.state.email === "") {
        Alert.alert('Please enter Email Address');
        return false;
      } 
      if (reg.test(this.state.email) == false) {
        Alert.alert('Please enter valid Email Address');
        return false;
      } else {
        emailSubmit= true;
      }
    } else {
      Alert.alert('Please enter Email Address');
      return false;
    } 

    if (this.state.password) {
      if (this.state.password === "") {
        Alert.alert('Please enter Password');
        return false;
      } else {
        passwordSubmit= true;
      }
    } else {
      Alert.alert('Please enter Password');
      return false;
    }  

    if (emailSubmit == true && passwordSubmit == true) {

      this.setState({loading: true});
      this.setState({textEdit: false});

      let collection = {}
      collection.email = this.state.email;
      collection.password = this.state.password;

      TawridApi.Login(collection).then(value => {
        this.setState({
            response: value,
            loading: false,
            textEdit: true
        }); 
        if (this.state.response) {
          if (this.state.response.status == 'success') {
            this.onSuccessLogin()
            // Actions.home(this.state.response.data); 

          } else if (this.state.response.status == 'error') {
            Alert.alert(this.state.response.message);
          } else {
            Alert.alert('An unknown error occured. Please contact App support team');
          }
        } else {
            Alert.alert('Request Terminated. Please check your internet or contact our support.');
        }
        
      })
      .catch(error =>{
        this.setState({
          loading: false,
          textEdit: true
        });
        console.error(error);
      });
    }
  }

  onSuccessLogin() {
    this.props.navigation.navigate("storeTab");
    // this.refs.toast.show('hello world!');

  }

  render() {




    // Logo Animation
    const logoAnimationStyle = {
      opacity: this.state.logoOpacityAnimation
    };

    // Login Input Animation
    const loginInputAnimationStyle = {
      opacity: this.state.loginInputAnimation
    }

    // Login Input Animation
    const forgetPasswordAnimationStyle = {
      opacity: this.state.forgetPasswordAnimation
    }

    // Login Animation
    const loginAnimationStyle = {
      opacity: this.state.loginAnimation,
    }

    
    return (
      <View style={styles.container} keyboardShouldPersistTaps={true}>
          
          <StatusBar barStyle="light-content" backgroundColor={Colors.Green}/>
            <Animated.View style={[logoAnimationStyle,styles.logo]}>
                <Image style={styles.logo} resizeMode={"contain"} source={require('../../assets/images/whitelogo3x.png')} />  
            </Animated.View>
            
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Animated.View style={[loginInputAnimationStyle,styles.formFields]}>
            
            
            <TextInput editable={this.state.textEdit} autoCapitalize = "none" maxLength={40} 
              autoCorrect={false} returnKeyType="next" underlineColorAndroid="transparent" 
              textContentType="emailAddress" keyboardType="email-address" 
              keyboardAppearance="light" placeholder="Email Address" 
              placeholderTextColor="rgba(255,255,255,0.6)" style={styles.inputField}
              ref={(input) => { this.Email = input; }}
              onSubmitEditing={()=>{ this.Password.focus() }} blurOnSubmit={false} 
              value={this.state.email} onChangeText={(email) => this.setState({email})} />
            
            
            
            
            <TextInput editable={this.state.textEdit} autoCapitalize="none" maxLength={24} 
              autoCorrect={false} returnKeyType="go" underlineColorAndroid="transparent" secureTextEntry={true} 
              keyboardAppearance="light" placeholder="Password" placeholderTextColor="rgba(255,255,255,0.6)" 
              style={styles.passwordField} ref={(input) => { this.Password = input; }}
              onSubmitEditing={()=>{ this.signIn() }} blurOnSubmit={false} 
              value={this.state.password} onChangeText={(password) => this.setState({password})}/>
            
            </Animated.View>
            </TouchableWithoutFeedback>
            <Animated.View style={[styles.loginAnimation, loginAnimationStyle]}>
            <TouchableHighlight style={styles.login} onPress={() => { this.signIn() } } activeOpacity={75 / 100} underlayColor={"rgba(51,51,51,0.6)"}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableHighlight>
            <Loader style={styles.loadingAnimation} loading= {this.state.loading} color={'#ffffff'} size= {'small'} position = {'absolute'} float = {'right'} height= {48} width= {284} />
            </Animated.View>
            
            <Animated.View style={[styles.forgetPassword, forgetPasswordAnimationStyle]}>
            <TouchableHighlight style={styles.forgetPassword} onPress={() => { this.forgotPasswordMethod() } } activeOpacity={75 / 100} underlayColor={"rgba(51,51,51,0.6)"}>
                <Text style={styles.forgetPasswordText}>Forget Password?</Text>
            </TouchableHighlight>
            </Animated.View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {   
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: Colors.Green,
    justifyContent: 'center',
  },
  logo: {
    width: 190,
    height:74,
    marginTop: 0,
  },
  formFields: {
    width: 284,
    marginTop: 50,
    marginBottom: 50,
  },
  inputField: {
    height: 55,
    width: 284,
    backgroundColor:'transparent',
    fontFamily: 'DIN Next LT Arabic',
    fontSize: 18,
    color: 'rgba(255,255,255,1)',
    borderBottomColor: Colors.LineWhite,
    borderBottomWidth: 1,
  },
  passwordField: {
    height: 55,
    width: 284,
    backgroundColor:'transparent',
    fontFamily: 'DIN Next LT Arabic',
    fontSize: 18,
    color: Colors.White,
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
  loginAnimation: {
    marginTop: 0,
    height: 48,
    width: 284,
    marginBottom: 120,
    position: 'relative',
  },
  login: {
    backgroundColor: Colors.OpaqueGreen,
    paddingTop: 8,
    height: 48,
    width: 284,
    borderRadius: 10,
  },
  loginText: {
    color: Colors.White,
    fontSize: 20,
    fontFamily: 'DIN Next LT Arabic',
    textAlign: 'center',
    
  },
  forgetPassword: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    height: 30,
    width: 160,
    
  },
  forgetPasswordText: {
    color: Colors.White,
    fontSize: 16,
    fontFamily: 'DIN Next LT Arabic',
    textDecorationLine: 'underline',
    textAlign: 'center',
  }
});
