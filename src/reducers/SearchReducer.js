import {SEARCH_START} from '../../actions/Types';
import {SEARCH_SUCCESS} from '../../actions/Types';
import {SEARCH_FAIL} from '../../actions/Types';
const   INITIAL_STATE={
        data:{},
        loaderLoading:true
}
    export const SearchReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SEARCH_START:{
            return {
                ...state, loaderLoading:(state.loaderLoading) 
                
        }
    }
        case SEARCH_SUCCESS:{
           
            return{
                ...state, loaderLoading:(state.loaderLoading=false),
               data:action.payload

            }
        }
    
    case SEARCH_FAIL:{
        return{
            ...state , loaderLoading:(state.data.loaderLoading=false)
        }
    }
        default:
            return state
}
}