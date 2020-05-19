import React from 'react';

import Footer from './footer.js';
import Bar from './bar.js';
import Trick from './trick.js';

export default class Main extends React.Component {

    render() {
        return (<div className="App">
            <Bar />
            <Trick />
            <Footer />
        </div>);
    }
}