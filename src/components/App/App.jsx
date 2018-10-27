import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import './reset.css';
import Login from '../Login';
import Game from '../Game';

class App extends Component {
    state = {};

    render() {
        const { loggedIn } = this.props;
        return (
            <div className="App">
                {!loggedIn && <Login />}
                {loggedIn && <Game />}
            </div>
        );
    }
}

App.propTypes = {
    loggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ login }) => ({
    loggedIn: login.loggedIn,
});

export default connect(mapStateToProps)(App);
