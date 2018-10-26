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
        const { name } = this.props;
        return (
            <div className="App">
                {!name && <Login />}
                {name && <Game />}
            </div>
        );
    }
}
App.defaultProps = {
    name: null,
};

App.propTypes = {
    name: PropTypes.string,
};

const mapStateToProps = state => ({
    name: state.user.name,
});

export default connect(mapStateToProps)(App);
