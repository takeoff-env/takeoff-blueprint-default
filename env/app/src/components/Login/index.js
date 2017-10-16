import React, { Component } from 'react';

import View from './view';

export default class Login extends Component {
    constructor(props) {
        super(...props);
        this.state = {
            usernameValid: false,
            passwordValid: false
        };
    }
    handleUpdate() {}

    handleChange({ username, password }) {
        if (username.length === 0) {
            this.setState({ usernameValid: false });
        } else if (password.length < 8) {
            this.setState({ passwordValid: false });
        } else {
            this.setState({
                usernameValid: true,
                passwordValid: true
            })
        }
    }

    handleSubmit({ username, password }) {
        this.props.onLogin({ username, password });
    }

    render() {
        const { error } = this.props;
        const { usernameValid, passwordValid } = this.state;

        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"> </div>
                        <div className="col-md-6">
                            <View
                                error={error}
                                validation={{ usernameValid, passwordValid }}
                                handleUpdate={this.handleUpdate.bind(this)}
                                handleChange={this.handleChange.bind(this)}
                                handleSubmit={this.handleSubmit.bind(this)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
