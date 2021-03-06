import React, { Component } from 'react';

class SignInComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            profileImageUrl: ''
          };
          this.handleSubmit = this.handleSubmit.bind(this);
          this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSignIn(this.state);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="col-sm-4 col-sm-offset-4">
            <span className="text-danger"> sdfdsf </span>
                <form onSubmit={this.handleSubmit}>
                    <h2> Log in </h2>
                    <label htmlFor="signin-email">E-mail</label>
                    <input
                        id="signin-email"
                        type="text"
                        name="email"
                        className="form-control"
                        autoComplete="off"
                        onChange={this.handleChange} />
                    <label htmlFor="signin-password">Password</label>
                    <input
                        id="signin-password"
                        type="password"
                        name="password"
                        className="form-control"
                        autoComplete="off"
                        onChange={this.handleChange} />
                    <button type="submit" className="btn btn-default">Log in</button>
                </form>
            </div>
        );
    }
}

export default SignInComponent;