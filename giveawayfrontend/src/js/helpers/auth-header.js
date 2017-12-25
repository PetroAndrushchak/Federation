import {userConstants} from '../constants'

export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem(userConstants.LOCAL_STORAGE_USER_KEY));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}