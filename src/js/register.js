import React from 'react';
import '../css/sign_in.css';
import { Redirect } from 'react-router-dom';

let retry = false;

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { value: '', password: '', repeat_password: '' };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(event) {
        this.setState({ password: event.target.value });
    }
    handleChange2(event) {
        this.setState({ value: event.target.value });
    }
    handleChange3(event) {
        this.setState({ repeat_password: event.target.value })
    }

    async handleSubmit(event) {
        if (this.state.password == this.state.repeat_password) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state)
                
            }
            retry = false;
            const response = await fetch('http://localhost:3001/logins', requestOptions);
            const data = await response.json();
            return <Redirect to="/sign_in" />
        }
        else {
            retry = true;
        }
    }

    render() {
        if (!retry) {
            return (
                <div>
                    <br />
                    <h1>Registration</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Nickname:
                        <input type="text" value={this.state.value} onChange={this.handleChange2} />
                        </label>
                        <label>
                            Password:
                        <input type="password" value={this.state.password} onChange={this.handleChange1} />
                        </label>
                        <label>
                            Repeat password:
                        <input type="password" value={this.state.repeat_password} onChange={this.handleChange3} />
                        </label>
                        <input type="submit" value="Sign up" />
                    </form>
                </div>
            );
        }
        else {
            return (
                <div>
                    <br />
                    <h1>Registration</h1>
                    <div style="color:red">Not same password.</div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Nickname:
                        <input type="" value={this.state.value} onChange={this.handleChange2} />
                        </label>
                        <label>
                            Password:
                        <input type="password" value={this.state.password} onChange={this.handleChange1} />
                        </label>
                        <label>
                            Repeat password:
                        <input type="password" value={this.state.repeat_password} onChange={this.handleChange3} />
                        </label>
                        <input type="submit" value="Sign up" />
                    </form>
                </div>
            );
        }
       
    }
}
