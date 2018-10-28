import { ActionTypes } from '../const';
import { ApiService } from '../services';

class UserAction {
    static getUserRequest() {
        return {
            type: ActionTypes.GET_USER_REQUEST,
        };
    }

    static getUserSuccess(user) {
        return {
            type: ActionTypes.GET_USER_SUCCESS,
            user,
        };
    }

    static getUserFailure(error) {
        return {
            type: ActionTypes.GET_USER_FAILURE,
            error: error.toString(),
        };
    }

    static getUser(username) {
        return (dispatch) => {
            dispatch(UserAction.getUserRequest());
            ApiService.getUserByName(username)
                .then(
                    user => dispatch(UserAction.getUserSuccess(user)),
                    error => dispatch(UserAction.getUserFailure(error)),
                );
        };
    }
}

export default UserAction;
