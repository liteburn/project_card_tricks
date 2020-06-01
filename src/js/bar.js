import React from 'react';
import ReactBootstrap, { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BarElement from './barelem'
import '../css/bar.css'

export default class Bar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <div className={"container"}>
                    <Navbar.Brand href="#home">Card Tricks</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link name={"Title"} class={"bar_title"} href={""} />
                            <Nav.Link name={"Illusions"} class={"bar_small"} href={"/illusions"} >Illusions</Nav.Link>
                            <Nav.Link name={"With Equipment"} class={"bar_small"} href={"/withEquipment"} >With Equipment</Nav.Link>
                            <Nav.Link name={"Special Equipment"} class={"bar_small"} href={"/specialEquipment"} >Special Equipment</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link name={"Sign in"} class={"bar_small"} href={"/sign_in"} >Sign in</Nav.Link>
                            <Nav.Link name={"Sing up"} class={"bar_small"} href={"/sign_up"} >Sing up</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}