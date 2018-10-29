import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const cardDict = [
    [0, 0], // empty card (for the case the card is played or empty selected card)
    [1, 1], [1, 1],
    [1, 2], [1, 2],
    [1, 3],
    [2, 1], [2, 1],
    [2, 2], [2, 2],
    [2, 3],
    [3, 1], [3, 1],
    [3, 2], [3, 2],
    [3, 3],
    [4, 3],
    [5, 0],
];

const cardTypeDict = [
    'EMPTY',
    'FIRE',
    'WOOD',
    'WATER',
    'SPECIAL',
];

const Card = ({ cardId, onClick }) => {
    const Tag = cardId !== 0 && onClick ? 'a' : 'span';
    const cardTypeInt = cardDict[cardId][0];
    const cardType = cardTypeDict[cardTypeInt];

    return (
        <Tag
            className={`Card type${cardTypeInt} card${cardId}`}
            onClick={onClick}
        >
            <span className="type">{cardType}</span>
            <span className="power">{cardDict[cardId][1]}</span>
        </Tag>
    );
};

Card.defaultProps = {
    onClick: null,
};

Card.propTypes = {
    cardId: PropTypes.number.isRequired,
    onClick: PropTypes.func,
};

export default Card;
