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
            <main>
                <div className="page-head">
                    <div className="page-title">
                        <h1 className="page-header text-overflow">Login</h1>
                    </div>
                </div>
                <div className="page-content">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="panel">
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
            </main>
        );
    }
}
