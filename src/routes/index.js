import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Login from '../pages/Login';


export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} isPrivate/>
            <Route path="/profile" component={Profile} isPrivate/>
        </Switch>
    )
}