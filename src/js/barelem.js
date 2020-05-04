import React from 'react';
import '../css/barelem.css'

export default class BarElement extends React.Component {
    render() {
        return (
            <div className={"barelem"}>
                <li><a href="/{this.props.name}">{this.props.name}</a></li>
            </div>
        )
    }
}