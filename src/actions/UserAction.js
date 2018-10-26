import { ActionTypes } from '../const';

class UserAction {
    static setUser({
        name,
        winCount,
        lossCount,
        game,
    }) {
        return {
            type: ActionTypes.SET_USER,
            name,
            winCount,
            lossCount,
            game,
        };
    }
}

export default UserAction;
