import React from 'react';

import SomeEquipment from "../photos/trick_1.jpg";
import JustHands from "../photos/trick_2.jpg";
import SpecialEquipment from "../photos/trick_3.jpg";
import '../css/trick.css';

const Trick1 = ({ name, description, image }) => (
    
    <div class="trick-container">
        <br />
        <h1>{name}</h1>
        <img src={image} alt={name} width="100px" height="100px" /><div class="desc_part">{description}</div>
        <br />
    </div>);
export default class Trick extends React.Component {
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
                    description: "Somthing",
                    image: JustHands
                },
                {
                    name: "Third",
                    description: "Somthing",
                    image: SpecialEquipment
                }
            ]
        };
    }

    render() {
        return (
            <div className="trick-container">

                <div className="trick">
                        {this.state.items.map((item) => (
                        <Trick1 name={item.name} description={item.description} image={item.image}></Trick1>
                        ))}
                </div>
            </div>
        );
    }
}