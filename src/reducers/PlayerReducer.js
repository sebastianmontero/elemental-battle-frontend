import { ActionTypes } from '../const';

const initialState = {
    isFetching: false,
    error: '',
    isReady: false,
    data: {
        name: '',
        winCount: 0,
        lossCount: 0,
        game: null,
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
        const { user, user: { game_data: game } } = action;
        return {
            isFetching: false,
            error: '',
            isReady: true,
            data: {
                name: user.name,
                winCount: user.win_count,
                lossCount: user.loss_count,
                game: {
                    ...game,
                    deckCardCount: game.deck_ai.length,
                    handCardCount: game.hand_ai.filter(x => x > 0).length,
                },
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
