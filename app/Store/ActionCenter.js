import actionType from './action';

function doPostRequest({ url, data}) {
    return new Promise( resolve => {
        fetch('http://portal.tawrid.store/'+ url, {
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json"
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
        fetch('http://portal.tawrid.store/'+ url)
        .then(res => res.json())
        .then(success => {
            resolve(success);
        })
        .catch(err => {
            console.log({ err });
        });
    })
}

function getOrdersDataAct(){
    console.log('yes !!!!');
    return dispatch => {
        doGetRequest({url:'api/v1/order?include=orderProducts'})
        .then(success => {
            dispatch({
                type: actionType.getOrderData,
                data: success.data
            })
        })
    }
}


export default {
    getOrdersDataAct,
}