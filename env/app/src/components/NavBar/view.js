import React, { Component, PropTypes } from 'react';
import Login from '../Login';
import Logout from '../Logout';
import { loginUser, logoutUser } from '../Login/actions';
import { Link } from 'react-router-dom';

import logo from './images/logo.png';

import classNames from 'classnames';

export default ({ dispatch, isAuthenticated, showingAdminMenu, onAdminClick }) => {
    let dropdownToggle = classNames('mega-dropdown-toggle', { open: showingAdminMenu });
    let dropdown = classNames('dropdown-menu mega-dropdown-menu', { show: showingAdminMenu, hide: !showingAdminMenu });

    return (
        <nav className="navbar navbar-expand-md bg-primary navbar-dark">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Takeoff React Application<br />
                </a>
                <button
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar2SupportedContent"
                    aria-controls="navbar2SupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    {' '}
                    <span className="navbar-toggler-icon" />{' '}
                </button>
                <div className="collapse navbar-collapse text-center justify-content-end" id="navbar2SupportedContent">
                    <ul className="navbar-nav">
                        {(isAuthenticated && (
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="fa d-inline fa-lg fa-bookmark-o" /> Admin
                                </a>
                            </li>
                        )) ||
                            null}
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa d-inline fa-lg fa-bookmark-o" /> Bookmarks
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <i className="fa d-inline fa-lg fa-envelope-o" /> Contacts
                            </a>
                        </li>
                    </ul>

                    {(isAuthenticated && <Logout onLogout={() => dispatch(logoutUser())} />) || (
                        <a href="/login" className="btn navbar-btn btn-primary ml-2 text-white">
                            <i className="fa d-inline fa-lg fa-user-circle-o" /> Sign in
                        </a>
                    )}
                </div>
            </div>
        </nav>
    );
};
