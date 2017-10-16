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
            <NavbarBrand brand={<Link to="/">Takeoff React App</Link>}><br /></NavbarBrand>
            <NavbarToggler onClick={onUserMenuClick} />
            <Collapse isOpen={showingUserMenu} navbar>
                <Nav className="ml-auto text-center justify-content-end">
                    {(isAdmin && (
                        <NavItem>
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
                        </NavItem>
                    )) ||
                        null}

                    {(isAuthenticated && (
                        <NavItem>
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
                    </NavItem>
                    )) ||
                        null}
                    {(!isAuthenticated && (
                        <NavItem>
                            <Link to="/login" className="btn navbar-btn btn-primary ml-2 text-white">
                                <i className="fa d-inline fa-lg fa-user-circle-o" /> Sign in
                            </Link>
                        </NavItem>
                    )) ||
                        null}
                </Nav>
            </Collapse>
        </Navbar>
    );
};
