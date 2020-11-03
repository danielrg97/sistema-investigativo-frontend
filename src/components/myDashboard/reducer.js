import { 
    CLEAN_REDUCER, 
    INVESTIGATIVE_PROJECTS_1_GET, 
    INVESTIGATIVE_PROJECTS_1_GET_SUCCESS,
    INVESTIGATIVE_PROJECTS_1_GET_ERROR,
    INVESTIGATIVE_PROJECTS_2_GET,
    INVESTIGATIVE_PROJECTS_2_GET_SUCCESS,
    INVESTIGATIVE_PROJECTS_2_GET_ERROR,
    INVESTIGATIVE_PROJECTS_3_GET,
    INVESTIGATIVE_PROJECTS_3_GET_SUCCESS,
    INVESTIGATIVE_PROJECTS_3_GET_ERROR 
} from "../../utils/typeOfActions";

const initialState = {};
export default function(state = initialState, action){
    switch(action.type){
        case INVESTIGATIVE_PROJECTS_1_GET:
            return {error: undefined, loading: true}
        case INVESTIGATIVE_PROJECTS_1_GET_SUCCESS:
            return {error: false, loading: false, result1 : action.result}
        case INVESTIGATIVE_PROJECTS_1_GET_ERROR:
            return {error: action.result, loading: false}
        case INVESTIGATIVE_PROJECTS_2_GET:
            return {error: undefined, loading: true}
        case INVESTIGATIVE_PROJECTS_2_GET_SUCCESS:
            return {error: false, loading: false, result2 : action.result}
        case INVESTIGATIVE_PROJECTS_2_GET_ERROR:
            return {error: action.result, loading: false}
        case INVESTIGATIVE_PROJECTS_3_GET:
            return {error: undefined, loading: true}
        case INVESTIGATIVE_PROJECTS_3_GET_SUCCESS:
            return {error: false, loading: false, result3 : action.result}
        case INVESTIGATIVE_PROJECTS_3_GET_ERROR:
            return {error: action.result, loading: false}
        case CLEAN_REDUCER:
            return {}
        default:
            return state;
    }
}