import React, {Component } from 'react';
import {Alert} from 'react-native';

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
        'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MTQwNDI2NywiZXhwIjoxNTQxNDkwNjY3LCJuYmYiOjE1NDE0MDQyNjcsImp0aSI6IkZoN0xZeUZidUtTSG0xdWIifQ.E3cED3cD49b6pQ0YY9eNHYGSb-zfRk7JqNy0bHHYdF8',
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
    var url= "http://portal.tawrid.store/api/v1/product/626/show?include=tags,categories,company,features";
    return fetch(url, {
      method: 'GET',
      headers:({
        'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MTQwNDI2NywiZXhwIjoxNTQxNDkwNjY3LCJuYmYiOjE1NDE0MDQyNjcsImp0aSI6IkZoN0xZeUZidUtTSG0xdWIifQ.E3cED3cD49b6pQ0YY9eNHYGSb-zfRk7JqNy0bHHYdF8'
      })
    })
      .then(res => res.json())
      .then(response => {
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
  }
  
}
