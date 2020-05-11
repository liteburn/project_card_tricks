import React from 'react';

import Footer from './footer.js';
import Tricks from './tricks.js';

export default class Main extends React.Component {

    render() {
        return (<div className="App">
            <Tricks />
            <Footer />
        </div>);
    }
}