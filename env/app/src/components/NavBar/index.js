import React, { Component, PropTypes } from 'react';
import Login from '../Login';
import Logout from '../Logout';
import { loginUser, logoutUser } from '../Login/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import logo from './images/logo.png';

import View from './view';

class NavBar extends Component {
    constructor(props) {
        super(...props);

        this.state = {
            showingAdminMenu: false,
            showingUserMenu: false
        };
    }

    onAdminClick() {
        this.setState({ showingAdminMenu: !this.state.showingAdminMenu });
    }

    onUserMenuClick() {
        this.setState({ showingUserMenu: !this.state.showingUserMenu });
    }

    render() {
        const { isAuthenticated, isAdmin, dispatch, user } = this.props;
        const { showingAdminMenu, showingUserMenu } = this.state;
        return (
            <View
                dispatch={dispatch}
                isAdmin={isAdmin}
                isAuthenticated={isAuthenticated}
                user={user}
                showingAdminMenu={showingAdminMenu}
                showingUserMenu={showingUserMenu}
                onAdminClick={this.onAdminClick.bind(this)}
                onUserMenuClick={this.onUserMenuClick.bind(this)}
            />
        );
    }
}

function mapStateToProps(state) {
    const { auth } = state;
    const { isAuthenticated, isAdmin, user } = auth;

    return {
        isAuthenticated,
        isAdmin,
        user
    };
}

const connectState = connect(mapStateToProps)(NavBar);
export default withRouter(connectState);
