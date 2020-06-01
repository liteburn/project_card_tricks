import React from 'react';
import ReactBootstrap, { Carousel } from 'react-bootstrap'

import SomeEquipment from "../photos/trick_1.jpg";
import JustHands from "../photos/trick_2.jpg";
import SpecialEquipment from "../photos/trick_3.jpg";
import '../css/illusions.css'
import Trick from "./trick.js";


export default class Illusions extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    name: "First",
                    description: "Somthing",
                    image: SomeEquipment
                },
                {
                    name: "Second",
                    description: "Lore ipsum",
                    image: JustHands
                },
                {
                    name: "Third",
                    description: "Lore ipsum name per sani.",
                    image: SpecialEquipment
                }
            ]
        };
    }

    render() {
        return (
            <div className={"Container"}>
                <Carousel interval={3000}>
                    <Carousel.Item>
                        <img
                            className={"carousel_photo"}
                            src={require("./carousel/first.jpg")}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={"carousel_photo"}
                            src={require("./carousel/second.jpg")}
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={"carousel_photo"}
                            src={require("./carousel/third.jpg")}
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={"carousel_photo"}
                            src={require("./carousel/four.jpg")}
                        />

                        <Carousel.Caption>
                            <h3>Four slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}