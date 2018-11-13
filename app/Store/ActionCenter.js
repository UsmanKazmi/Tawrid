import actionType from './action';
import { Alert } from 'react-native';

function doPostRequest({ url, data}) {
    console.log('Data ', JSON.stringify(data))
    return new Promise( resolve => {
        fetch('http://portal.tawrid.store/'+ url, {
            method : 'POST',
            headers: {
                "Content-Type": "application/json",
                 token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MjA5MjAxNiwiZXhwIjoxNTQyMTc4NDE2LCJuYmYiOjE1NDIwOTIwMTYsImp0aSI6Ik4xc2p6YW9Gc3lEU2JocEYifQ.r-ZrvxpBs_C31fEJSH_54chcEmuq7TX18zwtsv7luTQ'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            resolve(success);
            if(success.status=='error'){
                Alert.alert(Error, success.message);
            }
            console.log( 'success from Post',{ success });
        })
        .catch(err => {
            console.log( 'Error in Post Request',{ err });

            Alert.alert(Error, 'An unknown error occured. Please contact App support team');
        });
    })
}

function doGetRequest({url}){
    return new Promise(resolve => {
        fetch('http://portal.tawrid.store/'+ url,{
            method : 'GET',
            headers: {
                token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MjA5MjAxNiwiZXhwIjoxNTQyMTc4NDE2LCJuYmYiOjE1NDIwOTIwMTYsImp0aSI6Ik4xc2p6YW9Gc3lEU2JocEYifQ.r-ZrvxpBs_C31fEJSH_54chcEmuq7TX18zwtsv7luTQ'
            }
        })
        .then(res => res.json())
        .then(success => {
            resolve(success);
            if(success.status=='error'){
                Alert.alert(Error, success.message);
            }
            console.log( 'success from get',{ success });
        })
        .catch(err => {
            console.log( 'Error in Get  Request',{ err });
            Alert.alert(Error, 'An unknown error occured. Please contact App support team');
        });
    })
}
// storing token 
function storeTokenAct(token){
    return dispatch => {
        dispatch({
            type: actionType.storeToken,
            data: token
        })
    }
}

// get order list
function getOrdersDataAct(){
    console.log('Get Orders !!!!');
    return dispatch => {
        doGetRequest({url:'api/v1/order?include=orderProducts'})
        .then(success => {
            console.log('Action ', success)
            dispatch({
                type: actionType.getOrderData,
                data: success.data
            })
        })
        .catch(err => {
            console.log( 'Error in getOrdersDataAct request',{ err });
            Alert.alert(Error, 'An unknown error occured. Please contact App support team');
        });
    }
}
// show balance request
function showBalanceAct(statementData){
    console.log('Statement ', statementData);
    return dispatch => {
        doPostRequest({
            url: 'api/v1/statement/show',
            data: statementData
        })
            .then(success => {
                console.log('Statement Data ', success)
                dispatch({
                    type: actionType.showStatementBalance,
                    data: success.data
                })
            })
            .catch(err => {
                console.log( 'Error in showBalanceAct request',{ err });
                Alert.alert(Error, 'An unknown error occured. Please contact App support team');
    
            });
    }
}
// total statement api
function totalStatementAct(totalStatement) {
    console.log('Total Statement ', totalStatement)
    return dispatch => {
        doPostRequest({
            url: 'api/v1/statement/total',
            data: totalStatement
        })
            .then(success => {
                console.log('Total Statement2 ', success)
                dispatch({
                    type: actionType.totalStatement,
                    data: success.data
                })
            })
            .catch(err => {
                console.log( 'Error in totalStatementAct request',{ err });
                Alert.alert(Error, 'An unknown error occured. Please contact App support team');
    
            });
    }
}

export default {
    getOrdersDataAct,
    showBalanceAct,
    totalStatementAct,
    storeTokenAct,
}