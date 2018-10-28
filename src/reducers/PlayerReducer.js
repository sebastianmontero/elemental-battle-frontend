import { ActionTypes } from '../const';

const initialState = {
    isFetching: false,
    error: '',
    isReady: false,
    data: {
        name: '',
        winCount: 0,
        lossCount: 0,
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.GET_USER_REQUEST:
        return {
            ...state,
            isFetching: true,
            error: '',
            isReady: false,
        };
    case ActionTypes.GET_USER_SUCCESS: {
        const { user } = action;
        return {
            isFetching: false,
            error: '',
            isReady: true,
            data: {
                name: user.name,
                winCount: user.win_count,
                lossCount: user.loss_count,
            },
        };
    }
    case ActionTypes.GET_USER_FAILURE:
        return {
            ...state,
            isFetching: false,
            error: action.error,
            isReady: false,
        };
    default:
        return state;
    }
};
