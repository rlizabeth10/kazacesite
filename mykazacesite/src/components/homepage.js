import React from 'react';
import {Switch, Route} from "react-router-dom";

import Home from './home';
import Man from './man';
import Girl from './girl';
import Shoes from './shoes';


const Main = () => {
    return (
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/man" component={Man}/>
            <Route exact path="/girl" component={Girl}/>
            <Route exact path="/shoes" component={Shoes}/>
        </Switch>
    )
};

export default Main;