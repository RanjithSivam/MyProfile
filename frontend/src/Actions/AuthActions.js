import axios from 'axios';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_FAILURE = 'SIGN_OUT_FAILURE';
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const signIn = () => ({
    type: SIGN_IN
});

export const register = () => ({
    type: REGISTER
});

export const signInSuccess = (payload) => ({
    type: SIGN_IN_SUCCESS,
    payload: payload
})

export const registerSuccess = (payload) => ({
    type: REGISTER_SUCCESS,
    payload: payload
})

export const signInFailure = (payload) => ({
    type: SIGN_IN_FAILURE,
    payload: payload
})

export const registerFailure = (payload) => ({
    type: REGISTER_FAILURE,
    payload: payload
})

export const signOut = () => ({
    type:SIGN_OUT
});


export const authSignIn = ({email,password}) => {
    return async (dispatch) => {
        dispatch(signIn());

        try{
            const result = await axios.post('/api/auth/login',{
                email,
                password
            })

            if(result.status !== 200)
            throw Error(result.data);

            dispatch(signInSuccess(result.data));
        }catch(err){
            dispatch(signInFailure(err))
        }
    }
}

export const authRegister = ({email,password,username,name}) => {
    return async (dispatch) => {
        dispatch(register());

        try{
            const result = await axios.post('/api/auth/register',{
                email,
                password,
                username,
                name
            });

            if(result.status !== 200)
            throw Error(result.data)

            dispatch(registerSuccess(result.data))
        }catch(err){
            dispatch(registerFailure(err))
        }
    }
}