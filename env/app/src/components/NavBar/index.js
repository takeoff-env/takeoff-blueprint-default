import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import View from './view';

class NavBar extends Component {
    constructor(props) {
        super(...props);

        this.state = {
            showingAdminMenu: false
        };
    }

    onAdminClick() {
        this.setState({ showingAdminMenu: !this.state.showingAdminMenu });
    }

    render() {
        const { isAuthenticated, dispatch } = this.props;
        const { showingAdminMenu } = this.state;
        return (
            <View
                dispatch={dispatch}
                isAuthenticated={isAuthenticated}
                showingAdminMenu={showingAdminMenu}
                onAdminClick={this.onAdminClick.bind(this)}
            />
        );
    }
}

function mapStateToProps(state) {
    const { auth } = state;
    const { isAuthenticated } = auth;

    return {
        isAuthenticated
    };
}

export default withRouter(connect(mapStateToProps)(NavBar));
