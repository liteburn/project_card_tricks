import React from 'react';

export default class Icon extends React.Component {
    constructor({ image }) {
        super();
        this.state = {
            image: image,
        };
    }

    render() {
        return (<img className="icon" href={this.image} />);
    }
}