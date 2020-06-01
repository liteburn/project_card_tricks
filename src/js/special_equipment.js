import React from 'react';
import { MDBContainer } from 'mdbreact';

import SomeEquipment from "../photos/trick_1.jpg";
import JustHands from "../photos/trick_2.jpg";
import SpecialEquip from "../photos/trick_3.jpg";
import Trick from "./trick.js";
import '../css/special_equipment.css'



export default class SpecialEquipment extends React.Component {
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
                    image: SpecialEquip
                }
            ]
        };
    }

    render() {
        return (
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/LjLLPe5ZhFo" allowfullscreen></iframe>
            </div>
        );
    }
    
}   