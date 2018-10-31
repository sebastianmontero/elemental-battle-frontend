import { ActionTypes, GameStatus } from '../const';

const initialState = {
    status: GameStatus.NOT_STARTED,
    playedCardIdx: null,
    error: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
    case ActionTypes.START_GAME_REQUEST:
        return {
            status: GameStatus.STARTING,
            playedCardIdx: null,
            error: '',
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
            error: '',
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
    case ActionTypes.NEXT_ROUND_REQUEST:
        return {
            status: GameStatus.CHANGING_ROUND,
            playedCardIdx: null,
            error: '',
        };
    case ActionTypes.NEXT_ROUND_SUCCESS:
        return {
            ...state,
            status: GameStatus.STARTED,
        };
    case ActionTypes.NEXT_ROUND_FAILURE:
        return {
            ...state,
            status: GameStatus.CHANGE_ROUND_FAILURE,
            error: action.error,
        };
    case ActionTypes.END_GAME_REQUEST:
        return {
            status: GameStatus.ENDING_GAME,
            playedCardIdx: null,
            error: '',
        };
    case ActionTypes.END_GAME_SUCCESS:
        return {
            ...state,
            status: GameStatus.NOT_STARTED,
        };
    case ActionTypes.END_GAME_FAILURE:
        return {
            ...state,
            status: GameStatus.END_GAME_FAILURE,
            error: action.error,
        };
    default:
        return state;
    }
};
