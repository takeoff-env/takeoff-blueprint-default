import React, { Component } from 'react';

export default ({ onLogout }) => (
    <a className="btn navbar-btn btn-primary ml-2 text-white" onClick={() => onLogout()}><i class="fa d-inline fa-lg fa-user-circle-o"></i> Log Out</a>
);
