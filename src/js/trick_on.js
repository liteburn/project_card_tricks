import React from 'react';

import SomeEquipment from "../photos/trick_1.jpg";
import JustHands from "../photos/trick_2.jpg";
import SpecialEquipment from "../photos/trick_3.jpg";
import '../css/trick.css';

const Trick1 = ({ name, description, image }) => (

    <div class="trick-container">
        <br />
        <h1>{name}</h1>
        <img src={image} alt={name} width="100px" height="100px" /><span>{description}</span>
        <br />
    </div>);
export default class Trick extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    name: "Magick",
                    description: "",
                    image: SomeEquipment
                },
                {
                    name: "Imagiation",
                    description: "Lore ipsum",
                    image: JustHands
                },
                {
                    name: "Hard to believe",
                    description: "Lore ipsum name per sani.",
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