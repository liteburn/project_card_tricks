import React, { Component } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import Main from './js/main.js';
import Bar from './js/bar.js';
import SpecialEquipment from './js/special_equipment.js';
import SomEquipment from './js/some_equipment.js';
import Illusions from './js/illusions.js';
import Sign_in from './js/sign_in.js';
import Register from './js/register.js';
import Add_trick from './js/add_trick.js';
import Login from './js/Login.js';
import axios from "axios";




import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/dashboard");
    }

    handleLogoutClick() {
        axios
            .delete("http://localhost:3001/logout", { withCredentials: true })
            .then(response => {
                this.props.handleLogout();
            })
            .catch(error => {
                console.log("logout error", error);
            });
    }

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
                        <Route exact path='/sign_in' >{
                            <Sign_in handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                        }
                        </Route>
                        <Route exact path='/sign_up' >{
                            <Register />
                        }
                        </Route>
                        <Route exact path='/add_trick' >{
                            <Add_trick />
                        }
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;