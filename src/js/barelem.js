import React from 'react';
import '../css/barelem.css'

export default class BarElement extends React.Component {
    render() {
        return (
            <li><a href={this.props.href} className={this.props.class}> {this.props.name}</a></li>
        )
    }
}