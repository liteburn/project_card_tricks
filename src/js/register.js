import React, { useState } from 'react';
import '../css/sign_in.css';
import { Redirect } from 'react-router-dom';
import ReactBootstrap, { Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import axios from 'axios';
import {element} from "prop-types";
import {forEach} from "react-bootstrap/cjs/ElementChildren";


let retry = false;
let data = {};
function getvals(){
    return fetch('/logins',
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
            return responseData;
        })
}

getvals().then(
    response => data = response.data,
    console.log(data));

export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: '', password: '', repeat_password: '', data:'' };

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
        if (this.state.password === this.state.repeat_password) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.state)
            }
            retry = false;
            getvals();
            const response = await fetch('http://localhost:3000/logins', requestOptions);
            return <Redirect to="/sign_in" />
        }
        else {
            retry = true;
        }
    }


    render() {
        if (!retry) {
            return (
 
                <div className={"back"}>
                    <div className={"container"}>
                        <div className={"form-outer"}>
                            <h1>Registration</h1>
                            <Form onSubmit={this.handleSubmit}>

                                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup row sm={2}>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            type="text"
                                            placeholder="Username"
                                            aria-describedby="inputGroupPrepend"
                                            value={this.state.value}
                                            onChange={this.handleChange2}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>

                                <Form.Group as={Col} md="4" controlId="formHorizontalPassword">
                                    <Form.Label>Password</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            aria-describedby="inputGroupPrepend"
                                            value={this.state.password}
                                            onChange={this.handleChange1}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                    </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>


                                <Form.Group as={Col} md="4" controlId="formCheckPassword">
                                    <Form.Label>Repeat password</Form.Label>
                                    <InputGroup>
                                        <Form.Control
                                            type="password"
                                            placeholder="RepeatPassword"
                                            aria-describedby="inputGroupPrepend"
                                            value={this.state.repeat_password}
                                            onChange={this.handleChange3}
                                            required
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Please choose a username.
                                    </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>


                                <input type="submit" value="Sign up" className={"sbutton"} />
                             
                            </Form>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className={"back"}>
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