import actionType from './action';

function doPostRequest({ url, data}) {
    return new Promise( resolve => {
        fetch('http://portal.tawrid.store/'+ url, {
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
                 token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MjAwMzI5MSwiZXhwIjoxNTQyMDg5NjkxLCJuYmYiOjE1NDIwMDMyOTEsImp0aSI6ImVqMTRJR1pDczZoallJS1AifQ.hiTLrRsCGIvSfWPbk6ACpHqAFqm00QxiV7eNR_kifPg'
            },
            body: JSON.stringify({ bodyData: data })
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

function showBalanceAct(statementData){
    console.log('Statement ', statementData);
    return dispatch => {
        doPostRequest({
            url: 'api/v1/statement/show',
            data: statementData
        })
            .then(success => {
                console.log('statement Data ', success)
                dispatch({
                    type: actionType.showStatementBalance,
                    data: success.data
                })
            })
    }
}

export default {
    getOrdersDataAct,
    showBalanceAct,
}