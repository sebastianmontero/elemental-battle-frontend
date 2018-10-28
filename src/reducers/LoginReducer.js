import { ActionTypes } from '../const';

const initialState = {
    loggedIn: false,
    loggingIn: false,
    error: '',
    username: '',
};


export default (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:

        return {
            loggedIn: false,
            loggingIn: true,
            error: '',
            username: action.username,
        };
    case ActionTypes.LOGIN_SUCCESS:

        return {
            loggedIn: true,
            loggingIn: false,
            error: '',
        };
    case ActionTypes.LOGIN_FAILURE:

        return {
            loggedIn: false,
            loggingIn: false,
            error: action.error,
        };
    default:
        return state;
    }
};
