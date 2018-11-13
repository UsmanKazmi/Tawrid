import actiontype from '../action';

const initial_State = {
    showBalance: [],
    total: []
}

function statementReducer( state = initial_State , action )
{
    newState = {...state}
    switch(action.type){
        case actiontype.showStatementBalance : {
            return {showBalance: showBalance.push(action)}
        }
        case actiontype.totalStatement: {
            return {total: total.push(action)}
        }
        default : {
            return state   
        } 
    }
}
export default statementReducer