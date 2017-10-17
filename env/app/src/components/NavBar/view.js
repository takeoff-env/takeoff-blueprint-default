import React, { Component, PropTypes } from 'react';
import Login from '../Login';
import Logout from '../Logout';
import { loginUser, logoutUser } from '../Login/actions';
import { Link } from 'react-router-dom';

import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

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
        <Navbar className="bg-primary navbar-dark" expand="md">
            <NavbarBrand tag={Link} to="/">
                Takeoff React App<br />
            </NavbarBrand>
            <NavbarToggler onClick={onUserMenuClick} />
            <Collapse isOpen={showingUserMenu} navbar>
                <Nav className="ml-auto text-center justify-content-end navbar">
                    {(isAdmin && (
                        <NavItem>
                            <NavLink tag={Link} to="/users" className="btn navbar-btn btn-primary ml-2 text-white">
                                <i className="fa d-inline fa-lg fa-user-circle-o" /> Users
                            </NavLink>
                        </NavItem>
                    )) ||
                        null}

                    {(isAuthenticated && (
                        <NavItem>
                            <NavLink tag={Link} to="/profile" className="btn navbar-btn btn-primary ml-2 text-white">
                                <i className="fa fa-fw fa-address-card-o" /> Profile
                            </NavLink>
                        </NavItem>
                    )) ||
                        null}
                    {(!isAuthenticated && (
                        <NavItem>
                            <Link to="/login" className="btn navbar-btn btn-primary ml-2 text-white">
                                <i className="fa d-inline fa-lg fa-unlock-alt" /> Sign in
                            </Link>
                        </NavItem>
                    )) || <Logout onLogout={() => dispatch(logoutUser())} />}
                </Nav>
            </Collapse>
        </Navbar>
    );
};
