import React from 'react';
import '../css/sign_in.css';
import { Col, Form, InputGroup } from 'react-bootstrap'




export default class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: '', password: '', repeat_password: '' };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value });
    }
    render() {
            return (

                <div className={"back"}>
                    <div className={"container"}>
                        <div className={"form-outer"}>
                            <h1>Sign in</h1>
                            <Form onSubmit={this.handleSubmit}>

                                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                                    <Form.Label>Username</Form.Label>
                                    <InputGroup row sm={2}>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control
                                            name = "value"
                                            type="text"
                                            placeholder="Username"
                                            aria-describedby="inputGroupPrepend"
                                            value={this.state.value}
                                            onChange={this.handleChange}
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
                                            name = "password"
                                            type="password"
                                            placeholder="Password"
                                            aria-describedby="inputGroupPrepend"
                                            value={this.state.password}
                                            onChange={this.handleChange}
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
            )
    }
}
