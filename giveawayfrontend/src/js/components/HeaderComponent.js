import React, { Component } from 'react';

export default class HeaderComponent extends Component {
    render(){
        return(
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">GiveAwayApp</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">                
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Sign Up</a></li>                                              
                            <li><a href="/logout">Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}