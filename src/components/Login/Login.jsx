import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button';
import { LoginAction } from '../../actions';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'wrf2cjltf2n3',
            key: '5KRfc21riCSdtZxUxKyMpvCvatUngKxcppJUk8r4xbWdVywdJLy',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { form } = this.state;

        this.setState({
            ...form,
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { onLogin } = this.props;
        onLogin(this.state);
    }

    render() {
        const { username, key } = this.state;
        const { loggingIn, error } = this.props;
        return (
            <div className="Login">
                <div className="title">Elemental Battles - Login</div>
                <div className="description"> Please use the login information provided in the previous page</div>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label htmlFor="username">
                            Account name
                            <input
                                id="username"
                                type="text"
                                name="username"
                                value={username}
                                placeholder="All small letters, a-z, 1-5 or dot, max 12 characters"
                                onChange={this.handleChange}
                                pattern="[\.a-z1-5]{2,12}"
                                required

                            />
                        </label>
                    </div>
                    <div className="field">
                        <label htmlFor="key">
              Private key
                            <input
                                type="password"
                                name="key"
                                value={key}
                                onChange={this.handleChange}
                                pattern="^.{51,}$"
                                required
                            />
                        </label>
                    </div>
                    <div className="field">
                        {loggingIn && <span>Logging In...</span>}
                    </div>
                    <div className="field form-error">
                        {error && <span className="error">{error}</span>}
                    </div>
                    <div className="bottom">
                        <Button type="submit" className="green">
                            { 'CONFIRM' }
                        </Button>
                    </div>
                </form>

            </div>
        );
    }
}

Login.propTypes = {
    loggingIn: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    onLogin: PropTypes.func.isRequired,
};

const mapStateToProps = ({ login }) => ({
    loggingIn: login.loggingIn,
    error: login.error,
});

export default connect(mapStateToProps, { onLogin: LoginAction.login })(Login);
