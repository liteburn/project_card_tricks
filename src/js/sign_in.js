import React from 'react';
import '../css/sign_in.css'


export default class Sign_in extends React.Component {
    constructor(props) {
        super(props);
        this.state = { password: '', value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ password: event.target.passord });
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <br />
                <div class="container">
                    <h1>Sign in</h1>
                    <label>
                        Nickname:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>

                    <label>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Sign in" />
                </div>
            </form>
           
        );
    }
}