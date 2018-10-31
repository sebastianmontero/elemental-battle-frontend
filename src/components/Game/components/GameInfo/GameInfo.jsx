import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GameAction } from '../../../../actions';
import RulesModal from './components/RulesModal';
import Button from '../../../Button';
import './GameInfo.css';

const GameInfo = ({
    className,
    deckCardCount,
    handCardCount,
    onEndGame,
}) => (
    <div className={`Info${className ? ` ${className}` : ''}`}>
        <p>
            {'ROUND '}
            <span className="round-number">{`${18 - deckCardCount - handCardCount}/17`}</span>
        </p>
        <RulesModal />
        <div>
            <Button onClick={onEndGame} className="small red">QUIT</Button>
        </div>
    </div>
);

GameInfo.defaultProps = {
    className: '',
};

GameInfo.propTypes = {
    className: PropTypes.string,
    deckCardCount: PropTypes.number.isRequired,
    handCardCount: PropTypes.number.isRequired,
    onEndGame: PropTypes.func.isRequired,
};

const mapStateToProps = ({ player: { data: { game } } }) => (
    {
        deckCardCount: game.deckCardCount,
        handCardCount: game.handCardCount,
    }
);

const mapDispatchToPros = dispatch => ({
    onEndGame: () => dispatch((_, getState) => {
        const { login: { username } } = getState();
        dispatch(GameAction.endGame(username));
    }),
});

export default connect(mapStateToProps, mapDispatchToPros)(GameInfo);
