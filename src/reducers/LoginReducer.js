import { ActionTypes } from '../const';

export default (state = { loggedIn: false, loggingIn: false, error: '' }, action) => {
    switch (action.type) {
    case ActionTypes.LOGIN_REQUEST:

        return {
            loggedIn: false,
            loggingIn: true,
            error: '',
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
