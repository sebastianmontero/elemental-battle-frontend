import { ActionTypes, GameStatus } from '../const';

const initialState = {
    status: GameStatus.NOT_STARTED,
    playedCardIdx: null,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.START_GAME_REQUEST:
        return {
            status: GameStatus.STARTING,
            playedCardIdx: null,
            error: null,
        };
    case ActionTypes.START_GAME_SUCCESS:
        return {
            ...state,
            status: GameStatus.STARTED,
        };
    case ActionTypes.START_GAME_FAILURE:
        return {
            ...state,
            status: GameStatus.START_FAILURE,
            error: action.error,
        };
    case ActionTypes.PLAY_CARD_REQUEST:
        return {
            status: GameStatus.PLAYING_CARD,
            playedCardIdx: action.cardIdx,
            error: null,
        };
    case ActionTypes.PLAY_CARD_SUCCESS:
        return {
            ...state,
            status: GameStatus.PLAYED_CARD,
        };
    case ActionTypes.PLAY_CARD_FAILURE:
        return {
            ...state,
            status: GameStatus.PLAY_CARD_FAILURE,
            error: action.error,
        };
    default:
        return state;
    }
};
