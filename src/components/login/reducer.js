import { CLEAN_REDUCER, LOG_IN, LOG_IN_ERROR, LOG_IN_SUCCESS } from "../../utils/typeOfActions";

const initialState = {};
export default function(state = initialState, action){
    switch(action.type){
        case LOG_IN:
            return {error: undefined, loading: true}
        case LOG_IN_SUCCESS:
            return {error: false, loading: false, ...action.result}
    
        case LOG_IN_ERROR:
            return {error: action.result, loading: false}
        case CLEAN_REDUCER:
            return {}
        default:
            return state;
    }
}