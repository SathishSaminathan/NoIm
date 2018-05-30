import { SIGN_UP,LOGIN,LOGOUT } from "../actions/actionTypes";

const initialState = {
    loggedIn: false,
    userFirstName:"Sathish",
    userLastName:"Saminathan"
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
    
        default:
            return state;
    }
}

export default reducer;