import jwtDecode from 'jwt-decode';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

function requestLogin(credentials) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        credentials
    };
}

function receiveLogin({ token, credentials }) {
    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        isAdmin: credentials.scope === 'admin',
        token: token
    };
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    };
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false,
        isAdmin: false
    };
}

function loginError(error) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        isAdmin: false,
        error
    };
}

export function loginUser({ username, password }) {
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accepts: 'application/json'
        },
        body: JSON.stringify({ username, password })
    };

    return async dispatch => {
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestLogin({ username, password }));

        try {
            const result = await fetch('/api/auth/admin', config);
            if (!result) {
                throw new Error('No result from authentication request');
            }
            if (!result.ok) {
                dispatch(loginError(authentication));
                throw new Error(response.status);
            }
            const { token } = await result.json();
            const credentials = jwtDecode(token);

            // If login was successful, set the token in local storage
            sessionStorage.setItem('token', token);
            // Dispatch the success action
            dispatch(receiveLogin({ token, credentials }));
        } catch (e) {
            throw e;
        }
    };
}

export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        sessionStorage.removeItem('token');
        dispatch(receiveLogout());
    };
}
