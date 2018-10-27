import { ActionTypes } from '../const';
import { ApiService } from '../services';

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
        return function loginThunk(dispatch) {
            dispatch(LoginAction.loginRequest());
            ApiService.login({ username, key })
                .then(
                    () => dispatch(LoginAction.loginSuccess()),
                    error => dispatch(LoginAction.loginFailure(error)),
                );
        };
    }
}

export default LoginAction;
