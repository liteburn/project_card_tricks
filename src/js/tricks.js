import React from 'react';

import SomeEquipment from "../photos/trick_1.jpg";
import JustHands from "../photos/trick_2.jpg";
import SpecialEquipment from "../photos/trick_3.jpg";
import Trick from "./trick.js";


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
            <div className="trick-container">
                {this.state.items.map((item) => (
                    <Trick name={item.name} description={item.description} image={item.image} href={item.href}></Trick>
                    ))}
            </div>
        );
    }
}