import { SIGN_UP,LOGIN,LOGOUT, ADDIMAGE } from "../actions/actionTypes";
import images from "../../assets/img/sachuImg.jpg";

const initialState = {
    loggedIn: false,
    userFirstName:"Sathish",
    userLastName:"Saminathan",
    profileImage:images
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return{
                ...state,
                userFirstName:action.userDetails
            }
        return;
        case LOGIN:
        
        return;
        case LOGOUT:
        
        return;
        case ADDIMAGE:
            return{
                ...state,
                profileImage:action.userImage
            }
    
        default:
            return state;
    }
}

export default reducer;