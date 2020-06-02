import React from 'react';
import '../css/trick.css';




export default class Trick extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <div class="trick">
                    <a href={this.props.href} > <h1>{this.props.name}</h1></a>
                    <div class="img"><img src={this.props.image} alt={this.props.name}/></div><div class="desc">{this.props.description}</div>
                </div>
            </div>
        );
    }
}