import React from 'react';

import { Form, Control } from 'react-redux-form';
import { FormGroup, Label, Input, Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

import './style.scss';

export default ({ error, handleChange, handleUpdate, handleSubmit, validation }) => (
    <Card className="text-white p-5 bg-primary">
        <CardBody>
            <CardTitle>Login</CardTitle>
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
                        className="login-form-username"
                        placeholder="Enter username"
                        autoComplete="off"
                        component={Input}
                        valid={validation.usernameValid}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Username</Label>
                    <Control.text
                        id="password"
                        model=".password"
                        type="password"
                        placeholder="Password"
                        className="login-form-username"
                        placeholder="Enter Password"
                        autoComplete="off"
                        component={Input}
                        valid={validation.passwordValid}
                    />
                </FormGroup>
                <Button className="btn btn-secondary btn-lg btn-block" type="submit">
                    Sign In
                </Button>
            </Form>
        </CardBody>
    </Card>
);
