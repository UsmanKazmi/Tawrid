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
        fetch('http://portal.tawrid.store/'+ url,{
            method : 'GET',
            headers: {
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MTIzNjI0OCwiZXhwIjoxNTQxMzIyNjQ4LCJuYmYiOjE1NDEyMzYyNDgsImp0aSI6ImVVYmxZQnpTeWJhWFhmWTkifQ.GjZ99HY09t4YBTViXKhW77ZR-19AxFtsE_d4ApCk4ZM"
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

function getOrdersDataAct(){
    console.log('Get Orders !!!!');
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

function getNewProductsAct(){
    console.log('New Products !!!!');
    return dispatch => {
        fetch('http://portal.tawrid.store/api/v1/product/626/show?include=tags,categories,company,features',{
            headers: {
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsYW5nIjoiZW4iLCJzdWIiOjMsImlzcyI6Imh0dHA6Ly9wb3J0YWwudGF3cmlkLnN0b3JlL2FwaS92MS9sb2dpbiIsImlhdCI6MTU0MTM5ODQxNiwiZXhwIjoxNTQxNDg0ODE2LCJuYmYiOjE1NDEzOTg0MTYsImp0aSI6IlcxU2RlQ2hGTlJCTXRjZ0QifQ.F5lJe9aVErMwJC-0_M8zerVMQkj445QzKNZzhJ-XviQ"
            }
        })
        .then(res => res.json())
        .then(success => {
            dispatch({
                type: actionType.getNewProducts,
                data: success.data
            })
        })
        .catch(err => {
            console.log(err );
        });
    }   
}



export default {
    getOrdersDataAct,
    getNewProductsAct,
}