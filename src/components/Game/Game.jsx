import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    GameMat,
    GameInfo,
    PlayerProfile,
    Resolution,
} from './components';
import { GameStatus } from '../../const';
import './Game.css';

class Game extends Component {
    state = {};

    render() {
        const { gameStarted, status } = this.props;
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
            </section>
        );
    }
}

Game.propTypes = {
    gameStarted: PropTypes.bool.isRequired,
    status: PropTypes.string.isRequired,
};

const mapStateToProps = ({ game }) => ({
    ...game,
    gameStarted: [
        GameStatus.NOT_STARTED,
        GameStatus.STARTING,
        GameStatus.START_FAILURE,
    ].indexOf(game.status) === -1,
});


export default connect(mapStateToProps)(Game);
