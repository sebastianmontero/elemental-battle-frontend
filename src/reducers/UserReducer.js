import { ActionTypes } from '../const';

const initialState = {
    name: '',
    winCount: 0,
    lossCount: 0,
    game: null,
};

export default (state = initialState, action) => {
    const {
        name,
        winCount,
        lossCount,
        game,
    } = action;

    switch (action.type) {
    case ActionTypes.SET_USER:

        return {
            name: name === 'undefined' ? state.name : name,
            winCount: winCount || state.winCount,
            lossCount: lossCount || state.lossCount,
            game: game || state.game,
        };
    default:
        return state;
    }
};
