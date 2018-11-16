import React, {Component } from 'react';
import {Alert} from 'react-native';
import {retrieveData} from '../helpers/Helpers';

class Api extends Component {
  constructor(Props) {
    super(Props);
    
  };
};

//Get Token From Local Storage

_retrieveData = async () => {
  try {
    const TokenFromStorage = await AsyncStorage.getItem('Token for Login');
    if (TokenFromStorage !== null) {
      // We have data!!
      alert('TokenFromStorage')
      console.log('The Token from Login is',TokenFromStorage);
    }
   } catch (error) {
     // Error retrieving data
     alert('Cannot Retrieve Token from Local Storage')

   }
}

export const TawridApi = {
  
  async Login(collection) {
    var url = 'http://portal.tawrid.store/api/v1/login';
    return fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(collection), // data can be `string` or {object}!
      headers:({
        'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MjI4MTQ4NiwiZXhwIjoxNTQyMzY3ODg2LCJuYmYiOjE1NDIyODE0ODYsImp0aSI6IlpESnpFRnppTnR5YTNxcG0ifQ.7zFDKHjn_Yz8FgzzawfhGzYEdENNnOav1slNQkbg_7E',
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .then(response => {
      // console.log('Success:', response);
      return response;
    })
    .catch(error => { 
      console.log('Error: ', error);
    });
  },
  
  // get New Products
  async getNewProduct() {
    console.log('started')
    let token = retrieveData('Token for Login');
    console.log('token ', token)
    var url= "http://portal.tawrid.store/api/v1/product/626/show?include=tags,categories,company,features";
    return fetch(url, {
      method: 'GET',
      headers:({
        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MjM0ODExNiwiZXhwIjoxNTQyNDM0NTE2LCJuYmYiOjE1NDIzNDgxMTYsImp0aSI6Im1UbkJ4cENseXlTUkFWdUUifQ.U9J5iLU0dMp6PUWv_mOh4aBaw5VtkBK5-uz5bOwOoPE'
      })
    })
      .then(res => res.json())
      .then(response => {
        console.log('Success', response)
        return response;
      })
      .catch(err => {
        console.log('Error ', err)
      })
  },
  
  async getProduct_list(collection) {
    console.log("Collection is ", collection)
    var url = 'http://portal.tawrid.store/api/v1/product/626/show?include=tags,categories,company,features';
    return fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(collection), // data can be `string` or {object}!
      headers:({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .then(response => {
      // console.log('Success:', response);
      return response;

    })
    .catch(error => {
      console.log('Error: ', error);
    });
  },
  
  // get favourite of my product
  async getMyProduct(){
    var url= "http://portal.tawrid.store/api/v1/favorite/list?include=product";
    return fetch(url, {
      method: 'GET',
      headers:({
        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MjM0ODExNiwiZXhwIjoxNTQyNDM0NTE2LCJuYmYiOjE1NDIzNDgxMTYsImp0aSI6Im1UbkJ4cENseXlTUkFWdUUifQ.U9J5iLU0dMp6PUWv_mOh4aBaw5VtkBK5-uz5bOwOoPE'
      })
    })
      .then(res => res.json())
      .then(response => {
        // console.log('Success', response)
        return response;
      })
      .catch(err => {
        console.log('Error ', err)
      })
  },

  // get order list
  async getOrderList(){
    var url= "http://portal.tawrid.store/api/v1/order?include=orderProducts";
    return fetch(url, {
      method: 'GET',
      headers:({
        'token': 
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MjM0ODExNiwiZXhwIjoxNTQyNDM0NTE2LCJuYmYiOjE1NDIzNDgxMTYsImp0aSI6Im1UbkJ4cENseXlTUkFWdUUifQ.U9J5iLU0dMp6PUWv_mOh4aBaw5VtkBK5-uz5bOwOoPE'
      })
    })
      .then(res => res.json())
      .then(response => {
        console.log('Success', response)
        return response;
      })
      .catch(err => {
        console.log('Error ', err)
      })
  },

  // cart list
  async cartList(){
    var url= "http://portal.tawrid.store/api/v1/cart/list?include=product";
    return fetch(url,  {
      method: 'GET',
      headers:({
        'token': 
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MjM0ODExNiwiZXhwIjoxNTQyNDM0NTE2LCJuYmYiOjE1NDIzNDgxMTYsImp0aSI6Im1UbkJ4cENseXlTUkFWdUUifQ.U9J5iLU0dMp6PUWv_mOh4aBaw5VtkBK5-uz5bOwOoPE'
      })
    })
      .then(res => res.json())
      .then(response => {
          console.log('My Cart List ', response)
          return response;
      })
      .catch(err => {
        console.log('Error ', err)
        return err
      })
  },

  // my cart info 
  async cartInfo() {
    var url= "http://portal.tawrid.store/api/v1/cart/info";
    return fetch(url,  {
      method: 'GET',
      headers:({
        'token': 
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MjM0ODExNiwiZXhwIjoxNTQyNDM0NTE2LCJuYmYiOjE1NDIzNDgxMTYsImp0aSI6Im1UbkJ4cENseXlTUkFWdUUifQ.U9J5iLU0dMp6PUWv_mOh4aBaw5VtkBK5-uz5bOwOoPE'
      })
    })
      .then(res => res.json())
      .then(response => {
          console.log('My Cart Info ', response)
          return response;
      })
      .catch(err => {
        console.log('Error ', err)
        return err
      })
  },



  //Add to favourite Service
  async addToFav() {
    var url= "http://portal.tawrid.store/api/v1/favorite/9463/add";
    return fetch(url,  {
      method: 'GET',
      headers:({
        'token': 
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MjM0ODExNiwiZXhwIjoxNTQyNDM0NTE2LCJuYmYiOjE1NDIzNDgxMTYsImp0aSI6Im1UbkJ4cENseXlTUkFWdUUifQ.U9J5iLU0dMp6PUWv_mOh4aBaw5VtkBK5-uz5bOwOoPE'
      })
    })
      .then(res => res.json())
      .then(response => {
          console.log('Add To Favourute Service response: ', response)
          return response;
      })
      .catch(err => {
        console.log('Error ', err)
        Alert.alert(Error, 'An unknown error occured in Add To Favourute Service. Please contact App support team');

        return err
      })
  },


  async removeFromFav() {
    var url= "http://portal.tawrid.store/api/v1/favorite/9467/remove";
    return fetch(url,  {
      method: 'GET',
      headers:({
        'token': 
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MjM0ODExNiwiZXhwIjoxNTQyNDM0NTE2LCJuYmYiOjE1NDIzNDgxMTYsImp0aSI6Im1UbkJ4cENseXlTUkFWdUUifQ.U9J5iLU0dMp6PUWv_mOh4aBaw5VtkBK5-uz5bOwOoPE'
      })
    })
      .then(res => res.json())
      .then(response => {
          console.log('remove from favourite Service response: ', response)
          return response;
      })
      .catch(err => {
        console.log('Error ', err)
        Alert.alert(Error , 'An unknown error occured in remove from favorite Service. Please contact App support team');
        return err
      })
  }
}
