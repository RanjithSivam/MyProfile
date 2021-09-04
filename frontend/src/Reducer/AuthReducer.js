import {SIGN_IN,SIGN_IN_FAILURE,SIGN_IN_SUCCESS,SIGN_OUT,REGISTER_FAILURE,REGISTER,REGISTER_SUCCESS} from '../Actions/AuthActions'

const initialState = {
    loading: false,
    authenticated: false,
    user:{},
    error:"",
    message:""
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SIGN_IN:
            return {...state,loading:true}
        case SIGN_IN_SUCCESS:
            return {...state,loading:false,authenticated:true,user:action.payload,error:""}
        case SIGN_IN_FAILURE:
            return {...state,loading:false,error:action.payload,user:{}}
        case SIGN_OUT:
            return {...state,authenticated:false,user:{}}
        case REGISTER:
            return {...state,loading:true,message:"",error:{}}
        case REGISTER_SUCCESS:
            return {...state,message:action.payload,error:{},loading:false};
        case REGISTER_FAILURE:
            return {...state,error:action.payload,message:"",loading:false}
        default:
            return state;
    }
}

export default reducer;