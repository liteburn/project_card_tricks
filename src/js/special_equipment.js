import React from 'react';

import SomeEquipment from "../photos/trick_1.jpg";
import JustHands from "../photos/trick_2.jpg";
import SpecialEquip from "../photos/trick_3.jpg";
import Trick from "./trick.js";


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
            <div className="special_equipment-container">
                <h1>This is with special equipment future container.</h1>
                {this.state.items.map((item) => (
                    <Trick name={item.name} description={item.description} image={item.image} href=""></Trick>
                ))}
            </div>
        );
    }
}   