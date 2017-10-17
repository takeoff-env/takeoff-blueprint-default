import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import { fetchUsers, createUser } from './actions';
import List from './views/list';
import Form from './views/form';
import Detail from './views/detail';

class Users extends Component {
    constructor(props) {
        super(...props);
        this.state = {
            usernameValid: false,
            passwordValid: false,
            isSubmitted: false
        };
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(fetchUsers());
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
            });
        }
    }

    handleSubmit({ username, password, displayName, role }) {
        const { dispatch } = this.props;
        dispatch(createUser({ username, password, displayName, role }));
        this.setState({ isSubmitted: true });
    }

    render() {
        const { users } = this.props;
        const { isSubmitted, usernameValid, passwordValid } = this.state;

        return (
            <Container>
                <Row>
                    <Col md={12}>
                        <Switch>
                            <Route exact path="/users" render={props => <List {...props} users={users.users} />} />
                            <Route
                                exact
                                path="/users/add"
                                render={props => (
                                    <Form
                                        {...props}
                                        isSubmitted={isSubmitted}
                                        validation={{ usernameValid, passwordValid }}
                                        handleUpdate={this.handleUpdate.bind(this)}
                                        handleChange={this.handleChange.bind(this)}
                                        handleSubmit={this.handleSubmit.bind(this)}
                                    />
                                )}
                            />
                            <Route
                                path="/users/:userId"
                                render={props => {
                                    return (
                                        <Detail {...props} user={users.users.find(u => props.match.params.userId)} />
                                    );
                                }}
                            />
                        </Switch>
                    </Col>
                </Row>
            </Container>
        );
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

const connectState = connect(mapStateToProps)(Users);
export default withRouter(connectState);
