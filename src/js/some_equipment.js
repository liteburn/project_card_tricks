import React from 'react';

import SomeEquipment from "../photos/trick_1.jpg";
import JustHands from "../photos/trick_2.jpg";
import SpecialEquipment from "../photos/trick_3.jpg";
import Trick from "./trick.js";
import '../css/with_equipment.css'


export default class SomEquipment extends React.Component {
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
            <div className={"text-outer"}>
                <div className={"container"}>
                    <div class="sign">
                        <span class="fast-flicker">M</span>ag<span class="flicker">i</span>c
                        </div>
                    <div className={"text"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                           
                        </div>

                </div>
            </div>
        );
    }
}