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
}

export default GameAction;
