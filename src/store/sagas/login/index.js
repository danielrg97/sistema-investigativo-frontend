import { call, put, takeLatest } from "redux-saga/effects";
import { POST } from "../../../utils/globalConstants";
import { LOG_IN, LOG_IN_ERROR, LOG_IN_SUCCESS } from "../../../utils/typeOfActions";
import { apiCall } from "../apiCalls";

function* getSessionToken({payload}){
    try{
        const data = yield call(apiCall, POST, payload, 'http://192.168.0.20:8090/login');
        localStorage.setItem("Authorization", data.token);
        localStorage.setItem("UserInSession", data.user.userName);
        localStorage.setItem("UserRole", data.user.role.name); 
        yield put({type: LOG_IN_SUCCESS, result: data});
    }catch(error){
        yield put({type: LOG_IN_ERROR, result: error});
    }
}

export default function* login(){
    yield takeLatest(LOG_IN, getSessionToken);
}