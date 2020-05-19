import React from 'react';
import BarElement from './barelem'
import '../css/bar.css'

export default class Bar extends React.Component {
    render() {
        return (    
            <div className={"bar-container"}>
                <ul>
                    <BarElement name={"Title"} class={"bar_title"} href={""}/>
                    <BarElement name={"Illusions"} class={"bar_small"} href={"/illusions"} />
                    <BarElement name={"With Equipment"} class={"bar_small"} href={"/withEquipment"} />
                    <BarElement name={"Special Equipment"} class={"bar_small"} href={"/specialEquipment"} />
                    <BarElement name={"Sign in"} class={"bar_small"} href={"/sign_in"} />
                    <BarElement name={"Sing up"} class={"bar_small"} href={"/sign_up"} />
                </ul>
                <br />
            </div>
        )
    }
}