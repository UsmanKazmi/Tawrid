import React, {Component } from 'react';
import {Alert} from 'react-native';

export class Api extends Component {
  constructor(Props) {
    super(Props);
    
  };
};

//Get Token From Local Storage
let TokenFromStorage = ''
_retrieveData = async () => {
  try {
    TokenFromStorage = await AsyncStorage.getItem('Token for Login');
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

let storeToken = ''
export const TawridApi = {
  async Login(collection) {
    var url = 'http://portal.tawrid.store/api/v1/login';
    return fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(collection), // data can be `string` or {object}!
      headers:({
        'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MjQ2NTkwMywiZXhwIjoxNTQyNTUyMzAzLCJuYmYiOjE1NDI0NjU5MDMsImp0aSI6Ilgwa0FDY0kyNHg5TUJVa2wifQ.P0GaRvQLeckQO9aWms_oNFezAW7u81IBB6vvUMyT4zk',
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .then(response => {
      storeToken = response.data.token.toString()
      console.log('login Response ', storeToken);
      return response;
    })
    .catch(error => { 
      console.log('Error: ', error);
    });
  },
  
  // get New Products
  async getNewProduct() {
    console.log('started')
    var url= "http://portal.tawrid.store/api/v1/product/list?include=tags,categories,company,features";
    return fetch(url, {
      method: 'POST',
      headers:({
        token: storeToken
      }),
      body: JSON.stringify()
    })
      .then(res => res.json())
      .then(response => {
        console.log('Success Get My Product', response)
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
      console.log('Success1:', response);
      return response;

    })
    .catch(error => {
      console.log('Error: ', error);
    });
  },
  
  // get favourite of my product
  async getMyProduct(){
    var url= "http://portal.tawrid.store/api/v1/product/list?include=tags,categories,company,features";
    return fetch(url, {
      method: 'POST',
      headers:({
        token: storeToken
      }),
      body: JSON.stringify({my_product: 1})
    })
      .then(res => res.json())
      .then(response => {
        console.log('Success1', response)
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
        'token': storeToken
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
        token: storeToken
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
        token: storeToken
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
  async addToFav(productID) {
    var url= `http://portal.tawrid.store/api/v1/favorite/${productID}/add`;
    return fetch(url,  {
      method: 'GET',
      headers:({
        token: storeToken
      })
    })
      .then(res => res.json())
      .then(response => {
          console.log('Add To Favourute Service response: ', response)
          return response;
      })
      .catch(err => {
        console.log('Error ', err)
        Alert.alert(Error, 
          'An unknown error occured in Add To Favourute Service. Please contact App support team');
        return err
      })
  },

  async removeFromFav() {
    var url= "http://portal.tawrid.store/api/v1/favorite/9467/remove";
    return fetch(url,  {
      method: 'GET',
      headers:({
        token: storeToken
      })
    })
      .then(res => res.json())
      .then(response => {
          console.log('remove from favourite Service response: ', response)
          return response;
      })
      .catch(err => {
        console.log('Error ', err)
        Alert.alert(Error , 
          'An unknown error occured in remove from favorite Service. Please contact App support team');
        return err
      })
  },

  async AddtoCart(collection) {
    console.log("Collection in AddtoCart is ", collection)
    var url = 'http://portal.tawrid.store/api/v1/cart/'+collection.productID+'/'+collection.method;
    return fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(collection), // data can be `string` or {object}!
      headers:({
        token: storeToken
      })
    }).then(res => res.json())
    .then(response => {
      console.log('Success: from AddtoCart Service', response);
      return response;
    })
    .catch(error => {
      console.log('Error: ', error);
      Alert.alert(Error , 
        'An unknown error occured in remove from AddtoCart Service. Please contact App support team');
    });
  },
}
