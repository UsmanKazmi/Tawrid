import actiontype from '../action';

const initial_State = {
    token: ''
}

function tokenReducer( state = initial_State , action )
{
    newState = {...state}
    switch(action.type){
        case actiontype.storeToken : {
            return {token: action}
        }
        default : {
            return state   
        } 
    }
}
export default tokenReducer