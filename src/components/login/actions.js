import { CLEAN_REDUCER, LOG_IN } from "../../utils/typeOfActions";

export const loginAction = payload => ({
    type: LOG_IN,
    payload
});

export const cleanReducer = _ => ({
    type: CLEAN_REDUCER
})
