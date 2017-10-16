import React from 'react';

import { Form, Control } from 'react-redux-form';

import './style.scss';

export default ({ error, handleChange, handleUpdate, handleSubmit }) => (
    <div className="card text-white p-5 bg-primary">
        <div className="card-body">
            <h1 className="mb-4">Login</h1>
            <Form
                model="user"
                onUpdate={form => handleUpdate(form)}
                onChange={values => handleChange(values)}
                onSubmit={values => handleSubmit(values)}
            >
                {error && <div className="alert alert-danger">{error.message}</div>}

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <Control.text
                        model=".username"
                        autoFocus
                        className="form-control login-form-username"
                        placeholder="Enter username"
                        autoComplete="off"
                    />
                </div>

                <div className="form-group">
                    <label className="control-label">Username</label>
                    <Control.text
                        model=".password"
                        type="password"
                        placeholder="Password"
                        className="form-control login-form-username"
                        placeholder="Enter Password"
                        autoComplete="off"
                    />
                </div>
                <button className="btn btn-secondary btn-lg btn-block" type="submit">
                    Sign In
                </button>
            </Form>
        </div>
    </div>
);
