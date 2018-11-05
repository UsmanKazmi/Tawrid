import actionType from '../action';

const initial_State = {
}

function productReducer( state = initial_State , action )
{
    newState = {...state}
    switch(action.type){
        case actionType.getNewProducts : {
            return newState = action
        }
        default : {
            return state   
        } 
    }
}
export default productReducer;