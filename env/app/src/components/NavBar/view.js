import React, { Component, PropTypes } from 'react';
import Login from '../Login';
import Logout from '../Logout';
import { loginUser, logoutUser } from '../Login/actions';
import { Link } from 'react-router-dom';

import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import logo from './images/logo.png';

import classNames from 'classnames';

export default ({
    dispatch,
    isAuthenticated,
    isAdmin,
    showingAdminMenu,
    showingUserMenu,
    onAdminClick,
    onUserMenuClick
}) => {
    let dropdownToggle = classNames('mega-dropdown-toggle', { open: showingAdminMenu });
    let dropdown = classNames('dropdown-menu mega-dropdown-menu', { show: showingAdminMenu, hide: !showingAdminMenu });

    return (
        <nav className="navbar navbar-expand-md bg-primary navbar-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Takeoff React Application<br />
                </Link>
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
                        {(isAdmin && (
                            <ButtonDropdown isOpen={showingAdminMenu} toggle={onAdminClick}>
                                <DropdownToggle caret>Admin Menu</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <Link to="/users">
                                            <i className="fa d-inline fa-lg fa-bookmark-o" /> Users
                                        </Link>
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        )) ||
                            null}
                        {(isAuthenticated && (
                            <ButtonDropdown isOpen={showingUserMenu} toggle={onUserMenuClick}>
                                <DropdownToggle caret>User Menu</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>
                                        <Link to="/bookmarks">
                                            <i className="fa d-inline fa-lg fa-bookmark-o" /> Bookmarks
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/contacts">
                                            <i className="fa d-inline fa-lg fa-bookmark-o" /> Contacts
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <Logout onLogout={() => dispatch(logoutUser())} />
                                    </DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        )) ||
                            null}
                    </ul>

                    {(!isAuthenticated && (
                        <Link to="/login" className="btn navbar-btn btn-primary ml-2 text-white">
                            <i className="fa d-inline fa-lg fa-user-circle-o" /> Sign in
                        </Link>
                    )) ||
                        null}
                </div>
            </div>
        </nav>
    );
};
