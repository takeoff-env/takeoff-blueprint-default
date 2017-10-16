import React, { Component } from 'react';

import View from './view';

export default class Login extends Component {
    handleUpdate() {}

    handleChange() {}

    handleSubmit({ username, password }) {
        this.props.onLogin({ username, password });
    }

    render() {
        const { error } = this.props;

        return (
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"> </div>
                        <div className="col-md-6">
                            <View
                                error={error}
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
