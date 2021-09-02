import { users } from "../Json/User";

export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_FAILURE = 'SIGN_OUT_FAILURE';
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';

export const signIn = () => ({
    type: SIGN_IN
});

export const success = (payload) => ({
    type: SIGN_IN_SUCCESS,
    payload: payload
})

export const failure = (payload) => ({
    type: SIGN_IN_FAILURE,
    payload: payload
})

export const signOut = () => ({
    type:SIGN_OUT
});


export const authSignIn = ({email,password}) => {
    return async (dispatch) => {
        dispatch(signIn());

        try{
            await setTimeout(()=>{},3000);
            const user = users.filter((user)=>user.email===email && user.login.password===password);
            if(!user || user.length==0)
            throw Error("User Not Found!")
            dispatch(success(user));
        }catch(err){
            dispatch(failure(err))
        }
    }
}