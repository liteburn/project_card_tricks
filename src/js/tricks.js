import React from 'react';
import ReactBootstrap, { Row, Col } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';
import { motion } from "framer-motion"

import SomeEquipment from "../photos/trick_1.jpg";
import JustHands from "../photos/trick_2.jpg";
import SpecialEquipment from "../photos/trick_3.jpg";
import Trick from "./trick.js";
import '../css/trick.css'

export default class Tricks extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    name: "First",
                    description: "Somthing",
                    image: SomeEquipment,
                    href: '/illusions',
                    a: "Discover more",
                },
                {
                    name: "Second",
                    description: "Lore ipsum",
                    image: JustHands,
                    href: '/withEquipment',
                },
                {
                    name: "Third",
                    description: "Lore ipsum name per sani.",
                    image: SpecialEquipment,
                    href: '/specialEquipment',
                }
            ]
        };
    }


    render() {
        return (
            <div>

                <div className={"outer"}>
                    <Zoom>
                    <div className={"container"}>
                        <Row mt-5 >
                            {this.state.items.map((item) => (
                                <Col>
                            
                                    <div className={"flip-container"} >
                                        <div className={"flipper"}>
                                           
                                                <div className={"front"}></div>
                                            
                                            <div className={"backcard"}>
                                                <Trick name={item.name} description={item.description} image={item.image} href={item.href} a={item.a}></Trick>
                                            </div>
                                        </div>
                                    </div>
                            
                                </Col>
                            ))}
                       </Row>
                    </div>
                    </Zoom>
                </div>
                
            </div>
    );

    }
}