import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GameMat, GameInfo, PlayerProfile } from './components';
import { GameStatus } from '../../const';
import './Game.css';

class Game extends Component {
    state = {};

    render() {
        const { gameStarted } = this.props;
        return (
            <section className="Game">
                {
                    !gameStarted
                        ? <PlayerProfile />
                        : (
                            <div className="container">
                                <GameMat />
                                <GameInfo />
                            </div>
                        )
                }
            </section>
        );
    }
}

const mapStateToProps = ({ game }) => ({
    gameStarted: [
        GameStatus.NOT_STARTED,
        GameStatus.STARTING,
        GameStatus.START_FAILURE,
    ].indexOf(game.status) === -1,
});


export default connect(mapStateToProps)(Game);
