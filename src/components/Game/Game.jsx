import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    GameMat,
    GameInfo,
    PlayerProfile,
    Resolution,
    WaitCursor,
} from './components';
import { GameStatus } from '../../const';
import './Game.css';

class Game extends Component {
    state = {};

    render() {
        const { gameStarted, status, isLoading } = this.props;
        return (
            <section className="Game">
                {
                    !gameStarted
                        ? <PlayerProfile />
                        : (
                            <div className="container">
                                <GameMat />
                                {status === GameStatus.PLAYED_CARD && <Resolution />}
                                <GameInfo />
                            </div>
                        )
                }
                <WaitCursor show={isLoading} />
            </section>
        );
    }
}

Game.propTypes = {
    gameStarted: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ game }) => ({
    ...game,
    gameStarted: [
        GameStatus.NOT_STARTED,
        GameStatus.STARTING,
        GameStatus.START_FAILURE,
    ].indexOf(game.status) === -1,
    isLoading: [
        GameStatus.STARTING,
        GameStatus.PLAYING_CARD,
        GameStatus.CHANGING_ROUND,
        GameStatus.ENDING_GAME,
    ].indexOf(game.status) !== -1,
});


export default connect(mapStateToProps)(Game);
