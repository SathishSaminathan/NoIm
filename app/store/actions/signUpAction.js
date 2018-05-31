import { SIGN_UP,LOGIN,LOGOUT, ADDIMAGE } from "./actionTypes";

export const signUp = (userFirstName,pickedImage) =>{
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

export const addImage=(pickedImage)=>{
    return{
        type:ADDIMAGE,
        userImage: pickedImage
    }
}