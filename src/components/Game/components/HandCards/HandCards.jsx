import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './HandCards.css';

const HandCards = ({ className, cards, onPlayCard }) => {
    const cardElements = [];
    for (let i = 0; i < 4; i++) {
        const cardProps = {
            key: i,
            cardId: cards[i],
        };

        if (onPlayCard) {
            cardProps.onClick = () => onPlayCard(i);
        }
        cardElements.push(<Card {...cardProps} />);
    }

    return (
        <div className={`HandCards${className ? ` ${className}` : ''}`}>
            {cardElements}
        </div>
    );
};

HandCards.defaultProps = {
    className: '',
    onPlayCard: null,
};

HandCards.propTypes = {
    className: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.number).isRequired,
    onPlayCard: PropTypes.func,
};

export default HandCards;
