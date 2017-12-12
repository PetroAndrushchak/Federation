import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
                            <li> <Link to="/signin">Login</Link> </li>        
                            <li><a href="/register">Sign Up</a></li>                                              
                            <li><a href="/logout">Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}