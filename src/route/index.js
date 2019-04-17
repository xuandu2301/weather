import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'

import App from '../App';
import Welcome from '../component/welcome';
import aboutUs from '../component/aboutUs';


export default class RouteComponent extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Welcome} />
                    <Route path='/app' component={App} />
                    <Route path='/about' component={aboutUs} />
                </Switch>
            </BrowserRouter>
        )
    }
}