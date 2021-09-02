import {SIGN_IN,SIGN_IN_FAILURE,SIGN_IN_SUCCESS,SIGN_OUT} from '../Actions/AuthActions'

const initialState = {
    loading: false,
    authenticated: false,
    user:{},
    error:{}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_IN:
            return {...state,loading:true}
        case SIGN_IN_SUCCESS:
            return {...state,loading:false,authenticated:true,user:action.payload,error:{}}
        case SIGN_IN_FAILURE:
            return {...state,loading:false,error:action.payload}
        case SIGN_OUT:
            return {...state,authenticated:false,user:{}}
        default:
            return state;
    }
}

export default reducer;