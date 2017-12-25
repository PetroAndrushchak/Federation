import { userConstants } from '../constants';

const getCurrentUser = () => {
    try {
        return JSON.parse(localStorage.getItem(userConstants.LOCAL_STORAGE_USER_KEY));
    } catch (e) {
        return undefined;
    }
};

const setCurrentUser = (currentUser) => {
    localStorage.setItem(userConstants.LOCAL_STORAGE_USER_KEY, JSON.stringify(currentUser));
};

const clearCurrentUser = () => {
    localStorage.removeItem(userConstants.LOCAL_STORAGE_USER_KEY);
}

let currentUser = getCurrentUser();
const initialState = currentUser ? {loggedIn: true, currentUser} : {}

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                currentUser: action.currentUser
            };
        case userConstants.LOGIN_SUCCESS:
            setCurrentUser(action.currentUser);
            return {
                loggedIn: true,
                currentUser: action.currentUser
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            clearCurrentUser();
            return {};
        default:
            return state
    }
}

export {authentication};