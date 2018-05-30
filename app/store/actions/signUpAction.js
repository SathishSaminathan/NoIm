import { SIGN_UP,LOGIN,LOGOUT } from "./actionTypes";

export const signUp = (userFirstName) =>{
    return{
        type: SIGN_UP,
        userDetails: userFirstName
    }
}

export const login =(userDetails)=>{
    return{
        type:LOGIN,
        userDetails:userDetails
    }
}

export const logout=(userDetails)=>{
    return{
        type:LOGOUT,
        userDetails:userDetails
    }
}