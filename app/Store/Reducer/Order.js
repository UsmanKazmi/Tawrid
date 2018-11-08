import actiontype from '../action';

const initial_State = {
}

function orderReducer( state = initial_State , action )
{
    newState = {...state}
    switch(action.type){
        case actiontype.getOrderData : {
            return newState = action
        }
        default : {
            return state   
        } 
    }
}
export default orderReducer