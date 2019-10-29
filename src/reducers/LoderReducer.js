import {FETCHING_SUCCESS} from '../../actions/Types';
import {FETCHING_FAIL} from '../../actions/Types';
import {FETCH_STARTED} from '../../actions/Types'
const INITIAL_STATE={
    dataSource:{
        currently:{},
        daily:{
            data:[]
        }
    },
    isLoading:false,
    error:''
}
export const LoaderReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case FETCH_STARTED:{
         
            return{
                ...state, isLoading:(state.isLoading=true)
                   }
        }
        case FETCHING_SUCCESS:{
         
            return{
                ...state, dataSource:action.payload, isLoading:false
            }
        }
        case FETCHING_FAIL:{
            return{
                ...state, error:"fail data fetching", isLoading:(state.isLoading=true)
            }
        }
        default:
            {
                return state
            }
    }


}