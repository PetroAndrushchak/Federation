'use strict';
import React, { Component } from 'react';

export default class HeaderComponent extends Component {
    render(){
        return(
            <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">GiveAwayApp</a>
                </div>
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav navbar-right">                
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