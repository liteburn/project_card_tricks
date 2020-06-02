import React from 'react';

import SomeEquipment from "../photos/trick_1.jpg";
import JustHands from "../photos/trick_2.jpg";
import SpecialEquipment from "../photos/trick_3.jpg";
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
            <div className="illusions-container">
                <div class="state"><h1>This is illusions future container.</h1></div>
                {this.state.items.map((item) => (
                    <Trick name={item.name} description={item.description} image={item.image} href=""></Trick>
                ))}
            </div>
        );
    }
}