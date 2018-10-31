import { ActionTypes } from '../const';
import { ApiService } from '../services';
import PlayerAction from './PlayerAction';

class GameAction {
    static startGameRequest() {
        return {
            type: ActionTypes.START_GAME_REQUEST,
        };
    }

    static startGameSuccess() {
        return {
            type: ActionTypes.START_GAME_SUCCESS,
        };
    }

    static startGameFailure(error) {
        return {
            type: ActionTypes.START_GAME_FAILURE,
            error: error.toString(),
        };
    }

    static startGame(username) {
        return (dispatch) => {
            dispatch(GameAction.startGameRequest());
            ApiService.startGame(username)
                .then(
                    () => {
                        dispatch(GameAction.startGameSuccess());
                        dispatch(PlayerAction.getUser(username));
                    },
                    error => dispatch(GameAction.startGameFailure(error)),
                );
        };
    }

    static playCardRequest(cardIdx) {
        return {
            type: ActionTypes.PLAY_CARD_REQUEST,
            cardIdx,
        };
    }

    static playCardSucces() {
        return {
            type: ActionTypes.PLAY_CARD_SUCCESS,
        };
    }

    static playCardFailure(error) {
        return {
            type: ActionTypes.PLAY_CARD_FAILURE,
            error: error.toString(),
        };
    }

    static playCard(username, cardIdx) {
        return (dispatch) => {
            dispatch(GameAction.playCardRequest(cardIdx));
            ApiService.playCard(username, cardIdx)
                .then(
                    () => {
                        dispatch(GameAction.playCardSucces());
                        dispatch(PlayerAction.getUser(username));
                    },
                    error => dispatch(GameAction.playCardFailure(error)),
                );
        };
    }

    static nextRoundRequest() {
        return {
            type: ActionTypes.NEXT_ROUND_REQUEST,
        };
    }

    static nextRoundSuccess() {
        return {
            type: ActionTypes.NEXT_ROUND_SUCCESS,
        };
    }

    static nextRoundFailure(error) {
        return {
            type: ActionTypes.NEXT_ROUND_FAILURE,
            error: error.toString(),
        };
    }

    static nextRound(username) {
        return (dispatch) => {
            dispatch(GameAction.nextRoundRequest());
            ApiService.nextRound(username)
                .then(() => {
                    dispatch(GameAction.nextRoundSuccess());
                    dispatch(PlayerAction.getUser(username));
                },
                error => dispatch(GameAction.nextRoundFailure(error)));
        };
    }

    static endGameRequest() {
        return {
            type: ActionTypes.END_GAME_REQUEST,
        };
    }

    static endGameSuccess() {
        return {
            type: ActionTypes.END_GAME_SUCCESS,
        };
    }

    static endGameFailure(error) {
        return {
            type: ActionTypes.END_GAME_FAILURE,
            error: error.toString(),
        };
    }

    static endGame(username) {
        return (dispatch) => {
            dispatch(GameAction.endGameRequest());
            ApiService.endGame(username)
                .then(() => {
                    dispatch(GameAction.endGameSuccess());
                    dispatch(PlayerAction.getUser(username));
                },
                error => dispatch(GameAction.endGameFailure(error)));
        };
    }
}

export default GameAction;
