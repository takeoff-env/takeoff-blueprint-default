import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

import View from './view';

class Home extends Component {

    render() {
        return (<View {...this.props} />);
    }
}

function mapStateToProps(state) {
    const { auth, users } = state;
    const { isAuthenticated, error } = auth;

    return {
        users,
        isAuthenticated,
        error
    };
}

const connectState = connect(mapStateToProps)(Home);
export default withRouter(connectState);
