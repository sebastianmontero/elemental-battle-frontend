import { ActionTypes } from '../const';
import { ApiService, LStorage } from '../services';


class LoginAction {
    static loginRequest() {
        return {
            type: ActionTypes.LOGIN_REQUEST,
        };
    }

    static loginSuccess() {
        return {
            type: ActionTypes.LOGIN_SUCCESS,
        };
    }

    static loginFailure(error) {
        return {
            type: ActionTypes.LOGIN_FAILURE,
            error: error.toString(),
        };
    }

    static login({ username, key }) {
        return (dispatch) => {
            dispatch(LoginAction.loginRequest());
            ApiService.login({ username, key })
                .then(
                    () => dispatch(LoginAction.loginSuccess()),
                    error => dispatch(LoginAction.loginFailure(error)),
                );
        };
    }

    static autoLogin() {
        return (dispatch) => {
            if (LStorage.isAccountStored()) {
                return dispatch(LoginAction.login({ username: LStorage.cardgameAccount(), key: LStorage.cardgameKey() }));
            }
            return Promise.resolve();
        };
    }
}

export default LoginAction;
