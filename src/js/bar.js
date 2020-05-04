import React from 'react';
import BarElement from './barelem'
import '../css/bar.css'

export default class Bar extends React.Component {
    render() {
        return (    
            <div className={"bar-container"}>
                <ul>
                    <div className="barelem"><li className={"bar-title"}><a>Types</a></li></div>
                    <BarElement name={"Illusions"} />
                    <BarElement name={"Fake moves"} />
                    <BarElement name={"With Equipment"} />
                </ul>
                <br />
            </div>
        )
    }
}