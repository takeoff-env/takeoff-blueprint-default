import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';

import Login from '../components/Login';
import { loginUser, loginFromToken } from '../components/Login/actions';
import NavBar from '../components/NavBar';
import Users from '../components/Users';

import Home from '../components/Home';

// Mocks
const WillMatch = () => <h1>WillMatch</h1>;
const NoMatch = () => <h1>NoMatch</h1>;

class App extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        const token = sessionStorage.getItem('token');
        if (token) {
            loginFromToken(token, dispatch);
        }
    }

    render() {
        const { dispatch, isAuthenticated, isAdmin, error, version } = this.props;
        return (
            <main>
                <NavBar isAdmin={isAdmin} isAuthenticated={isAuthenticated} dispatch={dispatch} {...this.props} />
                <div className="py-5">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route
                            path="/login"
                            render={props => (
                                <Login
                                    {...props}
                                    error={error}
                                    onLogin={credentials => dispatch(loginUser(credentials))}
                                />
                            )}
                        />
                        <Route path="/users" component={Users} />
                        <Route component={NoMatch} />
                    </Switch>
                </div>

                <div>Version: {version}</div>
            </main>
        );
    }
}

function mapStateToProps(state) {
    const { auth } = state;
    const { isAuthenticated, isAdmin, error } = auth;

    return {
        isAuthenticated,
        isAdmin,
        error
    };
}

export default withRouter(connect(mapStateToProps)(App));
