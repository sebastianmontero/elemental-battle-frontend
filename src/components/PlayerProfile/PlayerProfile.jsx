import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button';

const PlayerProfile = ({
    name,
    winCount,
    lossCount,
    onStartGame,
}) => (
    <div className="PlayerProfile">
        <div className="title">Elemental Battles</div>
        <div className="welcome">
            <span>Welcome!</span>
        </div>
        <div className="username">
            <span>{ name }</span>
        </div>
        <div className="record">
            <p>Your Current Record</p>
            <span>
                Win
                <span className="count">{ winCount }</span>
            </span>
            <span>|</span>
            <span>
                Lost
                <span className="count">{ lossCount }</span>
            </span>
        </div>
        <div className="buttons">
            <Button onClick={onStartGame} className="green">START</Button>
        </div>

    </div>
);

PlayerProfile.propTypes = {
    name: PropTypes.string.isRequired,
    winCount: PropTypes.number.isRequired,
    lossCount: PropTypes.number.isRequired,
    onStartGame: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
    ...state,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile);
