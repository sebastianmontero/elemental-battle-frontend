import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button';
import { ApiService } from '../../services';
import { UserAction } from '../../actions';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                username: 'wbkgxvo35pcv',
                key: '5KQqn8M5joM1sdtoxsFwmwpeaPh8JYCED2KqAyyjh7y7yweBmND',
            },
            error: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { form } = this.state;

        this.setState({
            form: {
                ...form,
                [name]: value,
            },
            error: '',
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const { form } = this.state;
        const { setUser } = this.props;

        ApiService.login(form)
            .then(() => setUser({ name: form.username }))
            .catch(err => this.setState({ error: err.toString() }));
    }

    render() {
        const { form, error } = this.state;
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
                                value={form.username}
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
                                value={form.key}
                                onChange={this.handleChange}
                                pattern="^.{51,}$"
                                required
                            />
                        </label>
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
    setUser: PropTypes.func.isRequired,
};

export default connect(null, { setUser: UserAction.setUser })(Login);
