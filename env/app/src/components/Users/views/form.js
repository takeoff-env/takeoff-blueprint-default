import React from 'react';

import { Form, Control } from 'react-redux-form';
import {Redirect} from 'react-router-dom';
import { FormGroup, Label, Input, Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

export default ({ error, handleChange, handleUpdate, handleSubmit, isSubmitted }) => {
    if (isSubmitted) {
        return <Redirect to="/users" />;
    }

    return (
        <Card>
            <CardBody>
                <CardTitle>Create or Edit User</CardTitle>
                <Form
                    model="user"
                    onUpdate={form => handleUpdate(form)}
                    onChange={values => handleChange(values)}
                    onSubmit={values => handleSubmit(values)}
                >
                    {error && <div className="alert alert-danger">{error.message}</div>}

                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Control.text
                            id="username"
                            model=".username"
                            autoFocus
                            placeholder="Enter username"
                            autoComplete="off"
                            component={Input}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Username</Label>
                        <Control.text
                            id="password"
                            model=".password"
                            type="password"
                            placeholder="Password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            component={Input}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="displayName">Display Name</Label>
                        <Control.text
                            id="displayName"
                            model=".displayName"
                            placeholder="Enter display name"
                            autoComplete="off"
                            component={Input}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="role">Role</Label>
                        <Control.select id="role" model=".role" placeholder="Select Role">
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </Control.select>
                    </FormGroup>

                    <button className="btn btn-primary btn-lg btn-block" type="submit">
                        Add User
                    </button>
                </Form>
            </CardBody>
        </Card>
    );
};
