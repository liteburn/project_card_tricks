import React, { Component } from 'react';

import "./App.css";
import Main from './js/main.js';
import Bar from './js/bar.js';
import SpecialEquipment from './js/special_equipment.js';
import SomEquipment from './js/some_equipment.js';
import Illusions from './js/illusions.js';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Bar />
                    <Switch>

                        <Route exact path='/'>
                            <Main />
                        </Route>
                        <Route exact path='/illusions'>{
                            <Illusions />
                        }
                        </Route>
                        <Route exact path='/withEquipment'>{
                            <SomEquipment />
                        }
                        </Route>
                        <Route exact path='/specialEquipment' >{
                            <SpecialEquipment />
                        }
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;