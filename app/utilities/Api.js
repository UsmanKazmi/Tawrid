import React, {Component } from 'react';
import {Alert} from 'react-native';

class Api extends Component {
  constructor(Props) {
    super(Props);
  };
};

export const TawridApi = {
  
  async Login(collection) {
    var url = 'http://portal.tawrid.store/api/v1/login';
    return fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(collection), // data can be `string` or {object}!
      headers:({
        'Content-Type': 'application/json'
      })
    }).then(res => res.json())
    .then(response => {
      console.log('Success:', response);
      return response;

    })
    .catch(error => {
      console.log('Error: ', error);
    });
  }
  
}