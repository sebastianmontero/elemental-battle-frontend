import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import PlayerReducer from './PlayerReducer';
import GameReducer from './GameReducer';

export default combineReducers({
    login: LoginReducer,
    player: PlayerReducer,
    game: GameReducer,
});
