import action from '../action';

const initial_State = {
}

function orderReducer( state = initial_State , action )
{
    const newState = {...state}
    switch(action.type){
        case action.getOrderData : {
            return newState.orders = action.data
        }
        default : {
            return state   
        } 
    }
}
export default orderReducer