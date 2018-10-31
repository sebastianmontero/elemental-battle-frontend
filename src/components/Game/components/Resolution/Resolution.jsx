import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../Button';
import Card from '../Card';
import { GameAction } from '../../../../actions';
import './Resolution.css';

const Resolution = ({
    roundPlayed,
    aiCard,
    aiName,
    aiLost,
    playerCard,
    playerName,
    playerLost,
    status,
    onNextRound,
    onEndGame,
}) => {
    let aiRoundResult = '';
    let playerRoundResult = '';

    if (aiLost === 0 && playerLost === 0) {
        aiRoundResult = 'DRAW';
        playerRoundResult = 'DRAW';
    } else if (aiLost === 0) {
        aiRoundResult = 'WIN';
        playerRoundResult = (
            <span>
                {`- ${playerLost}`}
            </span>
        );
    } else {
        playerRoundResult = 'WIN';
        aiRoundResult = (
            <span>
                {`- ${aiLost}`}
            </span>
        );
    }

    return (
        <div className={`Resolution${roundPlayed ? ' card-selected' : ''}`}>
            <div>
                {status === 1 && <div className="result win">VICTORY</div>}
                {status === -1 && <div className="result lost">DEFEATED</div>}
                <div className="player">
                    <p className="round-result">{playerRoundResult}</p>
                    <Card cardId={playerCard} />
                    <p className="name">{playerName}</p>
                </div>
                <div className="vs">VS</div>
                <div className="ai">
                    <p className="round-result">{aiRoundResult}</p>
                    <Card cardId={aiCard} />
                    <p className="name">{aiName}</p>
                </div>
                <div className="buttons">
                    {
                        status === 0
                        && <Button onClick={onNextRound}>NEXT ROUND</Button>
                    }
                    {
                        status !== 0
                        && <Button onClick={onEndGame} className="red">QUIT</Button>
                    }
                </div>
            </div>
        </div>
    );
};

Resolution.propTypes = {
    roundPlayed: PropTypes.bool.isRequired,
    aiCard: PropTypes.number.isRequired,
    aiName: PropTypes.string.isRequired,
    aiLost: PropTypes.number.isRequired,
    playerCard: PropTypes.number.isRequired,
    playerName: PropTypes.string.isRequired,
    playerLost: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired,
    onNextRound: PropTypes.func.isRequired,
    onEndGame: PropTypes.func.isRequired,
};

const mapStateToProps = ({ player: { data: playerData }, player: { data: { game } } }) => ({
    roundPlayed: game.selected_card_ai > 0,
    aiCard: game.selected_card_ai,
    aiName: 'COMPUTER',
    aiLost: game.life_lost_ai,
    playerCard: game.selected_card_player,
    playerName: playerData.name,
    playerLost: game.life_lost_player,
    status: game.status,
});

const mapDispatchToProps = dispatch => ({
    onNextRound: () => dispatch((_, getState) => {
        const { login: { username } } = getState();
        dispatch(GameAction.nextRound(username));
    }),
    onEndGame: () => dispatch((_, getState) => {
        const { login: { username } } = getState();
        dispatch(GameAction.endGame(username));
    }),
});


export default connect(mapStateToProps, mapDispatchToProps)(Resolution);
