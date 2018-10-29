import React from 'react';
import PropTypes from 'prop-types';
import './PlayerInfo.css';

const PlayerInfo = ({ className, name, life }) => (
    <div className={`PlayerInfo${className ? ` ${className}` : ''}`}>
        <div className="name">{name}</div>
        <div className={`life life${life}`} />
        <div className="lifepoints">
            {`${life < 0 ? 0 : life}/5`}
        </div>
    </div>
);

PlayerInfo.defaultProps = {
    className: '',
};

PlayerInfo.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    life: PropTypes.number.isRequired,
};

export default PlayerInfo;
