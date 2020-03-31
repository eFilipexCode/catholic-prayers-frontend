import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import NewPray from './components/NewPray/NewPray.jsx';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pray" exact component={NewPray} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;