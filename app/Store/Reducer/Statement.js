import actiontype from '../action';

const initial_State = {
}

function statementReducer( state = initial_State , action )
{
    newState = {...state}
    switch(action.type){
        case actiontype.showStatementBalance : {
            return newState = action
        }
        default : {
            return state   
        } 
    }
}
export default statementReducer