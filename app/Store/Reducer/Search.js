import actiontype from '../action';

const initial_State = {}

function searchReducer( state = initial_State , action )
{
    newState = {...state}
    switch(action.type){
        case actiontype.search : {
            return newState = action
        }
        default : {
            return state   
        } 
    }
}
export default searchReducer