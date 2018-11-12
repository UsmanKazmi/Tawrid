import actionType from './action';

function doPostRequest({ url, data}) {
    console.log('Data ', JSON.stringify(data))
    return new Promise( resolve => {
        fetch('http://portal.tawrid.store/'+ url, {
            method : 'POST',
            headers: {
                "Content-Type": "application/json",
                 token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MjAwMzI5MSwiZXhwIjoxNTQyMDg5NjkxLCJuYmYiOjE1NDIwMDMyOTEsImp0aSI6ImVqMTRJR1pDczZoallJS1AifQ.hiTLrRsCGIvSfWPbk6ACpHqAFqm00QxiV7eNR_kifPg'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            resolve(success);
        })
        .catch(err => {
            console.log({ err });
        });
    })
}

function doGetRequest({url}){
    return new Promise(resolve => {
        fetch('http://portal.tawrid.store/'+ url,{
            method : 'GET',
            headers: {
                token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MjAwMzI5MSwiZXhwIjoxNTQyMDg5NjkxLCJuYmYiOjE1NDIwMDMyOTEsImp0aSI6ImVqMTRJR1pDczZoallJS1AifQ.hiTLrRsCGIvSfWPbk6ACpHqAFqm00QxiV7eNR_kifPg'
            }
        })
        .then(res => res.json())
        .then(success => {
            resolve(success);
        })
        .catch(err => {
            console.log({ err });
        });
    })
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
    }
}

export default {
    getOrdersDataAct,
    showBalanceAct,
    totalStatementAct,
}