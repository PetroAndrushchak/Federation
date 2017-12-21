import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const HeaderComponent = props => {
    const { currentUser } = props;
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">GiveAwayApp</a>
                </div>
                <div className="collapse navbar-collapse">
                    {
                        currentUser ?
                            <ul className="nav navbar-nav navbar-right">
                                <li> <a>{currentUser.username} </a></li>
                                <li><a href="/logout">Logout</a></li>
                            </ul>
                            :
                            <ul className="nav navbar-nav navbar-right">
                                <li> <Link to="/signin">Login</Link> </li>
                                <li><a href="/register">Sign Up</a></li>
                            </ul>
                    }
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;