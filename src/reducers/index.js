import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import PlayerReducer from './PlayerReducer';

export default combineReducers({
    login: LoginReducer,
    player: PlayerReducer,
});
