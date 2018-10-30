import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PlayerInfo, HandCards } from '..';
import { GameAction } from '../../../../actions';
import './GameMat.css';

const GameMat = ({
    className,
    deckCardCount,
    aiLife,
    aiHandCards,
    aiName,
    playerLife,
    playerHandCards,
    playerName,
    gameStatus,
    onPlayCard,
}) => (
    <table className={`GameMat${className ? ` ${className}` : ''}`}>
        <tbody>
            <tr>
                <td className="mat mat-ai">
                    <PlayerInfo
                        className="ai"
                        name={aiName}
                        life={aiLife}
                    />
                    <div className={`deck ai remain${deckCardCount}`}>
                        {`${aiName}'S Deck (${deckCardCount})`}
                    </div>
                    <HandCards className="ai" cards={aiHandCards} />
                </td>
            </tr>
            <tr>
                <td className="mat mat-player">
                    <PlayerInfo
                        className="player"
                        name={playerName}
                        life={playerLife}
                    />
                    <div className={`deck player remain${deckCardCount}`}>
                        {`${playerName}'S Deck (${deckCardCount})`}
                    </div>
                    <HandCards className="player" cards={playerHandCards} onPlayCard={onPlayCard} />
                </td>
            </tr>
            <tr>
                <td>
                    {`Game Status: ${gameStatus}`}
                </td>
            </tr>
        </tbody>
    </table>
);

GameMat.defaultProps = {
    className: '',
};

GameMat.propTypes = {
    className: PropTypes.string,
    deckCardCount: PropTypes.number.isRequired,
    aiLife: PropTypes.number.isRequired,
    aiHandCards: PropTypes.arrayOf(PropTypes.number).isRequired,
    aiName: PropTypes.string.isRequired,
    playerLife: PropTypes.number.isRequired,
    playerHandCards: PropTypes.arrayOf(PropTypes.number).isRequired,
    playerName: PropTypes.string.isRequired,
    gameStatus: PropTypes.string.isRequired,
    onPlayCard: PropTypes.func.isRequired,
};

const mapStateToProps = ({ player, player: { game: gameData }, game }) => ({
    deckCardCount: gameData.deckCardCount,
    aiLife: gameData.life_ai,
    aiHandCards: gameData.hand_ai,
    aiName: 'COMPUTER',
    playerLife: gameData.life_player,
    playerHandCards: gameData.hand_player,
    playerName: player.name,
    gameStatus: game.status,
});

const mapDispatchToProps = dispatch => ({
    onPlayCard: cardIdx => dispatch((_, getState) => {
        const { login: { username } } = getState();
        dispatch(GameAction.playCard(username, cardIdx));
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameMat);
