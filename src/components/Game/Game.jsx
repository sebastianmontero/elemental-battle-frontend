import React, { Component } from 'react';
import './Game.css';
import PlayerProfile from '../PlayerProfile';

class Game extends Component {
    state = {};

    render() {
        return (
            <section className="Game">
                <PlayerProfile />
            </section>
        );
    }
}

export default Game;
