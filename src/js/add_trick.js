import React from 'react';
import '../css/sign_in.css'


export default class Add_trick extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: '', href: '', description: '' };

        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange1(event) {
        this.setState({ href: event.target.value });
    }
    handleChange2(event) {
        this.setState({ value: event.target.value });
    }
    handleChange3(event) {
        this.setState({ description: event.target.value })
    }

    async handleSubmit(event) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)

        }
        const response = await fetch('http://localhost:3001/tricks', requestOptions);
        const data = await response.json();
        
    }

    render() {
        return (
            <div class="form">
                <br />
                <h1>Registration</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                    <input type="text" value={this.state.value} onChange={this.handleChange2} />
                    </label>
                    <br/>
                    <label>
                        Your image href:
                    <input type="text" value={this.state.href} onChange={this.handleChange1} />
                    </label>
                    <br />
                    <label>
                        Description:
                    <input type="text" value={this.state.description} onChange={this.handleChange3} />
                    </label>
                    <br />
                    <input type="submit" value="Post trick" />
                </form>
            </div>
        );

        
    }
}