import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button';
import { PlayerAction } from '../../actions';
import './PlayerProfile.css';

class PlayerProfile extends Component {
    componentDidMount() {
        const { onMount } = this.props;
        onMount();
    }

    render() {
        const {
            name,
            winCount,
            lossCount,
            onStartGame,
            isReady,
            isFetching,
            error,
        } = this.props;
        return (
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
                    {
                        isFetching && <div>Loading record...</div>
                    }
                    {
                        error
                        && (
                            <div>
                                { error }
                            </div>
                        )
                    }
                    {
                        isReady && <Button onClick={onStartGame} className="green">START</Button>
                    }
                </div>

            </div>
        );
    }
}

PlayerProfile.propTypes = {
    name: PropTypes.string.isRequired,
    winCount: PropTypes.number.isRequired,
    lossCount: PropTypes.number.isRequired,
    onMount: PropTypes.func.isRequired,
    // onStartGame: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isReady: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
};

const mapStateToProps = ({ player }) => ({
    ...player.data,
    isReady: player.isReady,
    isFetching: player.isFetching,
    error: player.error,
});


const mapDispatchToProps = dispatch => ({
    onMount: () => dispatch((_, getState) => {
        const { login: { username } } = getState();
        dispatch(PlayerAction.getUser(username));
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile);
