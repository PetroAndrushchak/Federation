import { userConstants } from '../constants';

const logout = () => (
    {
        type: userConstants.LOGOUT
    }
);

function login (authInfo, history){
    return (dispatch, getState) => (
        authRequest(authInfo, 'http://localhost:8081/api/auth/signin')
            .then(currentUser => (
                dispatch(success(currentUser))
            ), error => (
                console.log("dsfdsf")
            )
            )
            .then(() => history.push('/'))
    )
    function success(currentUser) { return { type: userConstants.LOGIN_SUCCESS, currentUser } }
};

const authRequest = (authInfo, url) => {
    return fetch(url, {
        method: "post",
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(authInfo)
    })
        .then(resp => {
            if (!resp.ok) {
                if (resp.status >= 400 && resp.status < 500) {
                    return resp.json().then(data => {
                        let err = { authErrorMessage: data.message };
                        throw err;
                    })
                } else {
                    let err = { authErrorMessage: "Please try again later.  Server not responding." };
                    throw err;
                }
            }
            return resp.json();
        });
}

export const userActions = {
    logout,
    login
}

